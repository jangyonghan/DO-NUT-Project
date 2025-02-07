import { authAxiosInstance } from '@libs/axios/axiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Article } from '@/src/types/article/ArticleType';
import Image from 'next/image';
import HeartIcon from 'public/icons/heart.svg';
import HertRedIcon from 'public/icons/heartRed.svg';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeartProps {
  articleId: number | undefined;
  isLiked?: boolean;
  likeCount?: number;
}

export default function Heart({
  articleId,
  isLiked = false,
  likeCount = 0,
}: HeartProps) {
  const queryClient = useQueryClient();
  const [isVisible, setIsVisible] = useState(false);

  const { mutate: toggleLikeMutation } = useMutation({
    mutationFn: async (newLiked: boolean) => {
      return newLiked
        ? authAxiosInstance.post(`articles/${articleId}/like`)
        : authAxiosInstance.delete(`articles/${articleId}/like`);
    },
    onMutate: async (newLiked) => {
      await queryClient.cancelQueries({ queryKey: ['DetailCard', articleId] });

      const previousData = queryClient.getQueryData<{
        isLiked: boolean;
        likeCount: number;
      }>(['DetailCard', articleId]);

      queryClient.setQueryData<Article>(
        ['DetailCard', articleId],
        (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            isLiked: newLiked,
            likeCount: newLiked ? oldData.likeCount + 1 : oldData.likeCount - 1,
          };
        }
      );

      return { previousData };
    },
    onError: (_error, _newLiked, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          ['DetailCard', articleId],
          context.previousData
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['DetailCard', articleId] });
    },
  });

  const handleAnimation = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  const toggleLike = () => {
    const newLiked = !isLiked;
    toggleLikeMutation(newLiked);
    if (newLiked) handleAnimation();
  };

  return (
    <>
      <button onClick={toggleLike} type="button">
        {isLiked ? <HertRedIcon /> : <HeartIcon />}
      </button>
      <span className="text-slate-400">{likeCount}</span>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 transform md:left-1/2"
          >
            <Image
              alt="하트 클릭 애니메이션"
              src="/icons/heartRed.svg"
              width={200}
              height={200}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
