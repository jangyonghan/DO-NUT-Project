import Dropdown, { Option } from '@components/@shared/Dropdown';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useUserData } from '@hooks/mysetting/useUserData';
import clsx from 'clsx';
import PCLogo from 'public/images/donut_logo3.png';
import Link from 'next/link';
import Image from 'next/image';
import { useUserStore } from '@/src/stores/useUserStore';
import NavBarTeam from './NavBar_Team';
import ButtonMotion from './animation/ButtonMotion';

export default function NavBar() {
  const router = useRouter();
  const { logout } = useUserStore();
  const [isLogoOnlyPage, setIsLogoOnlyPage] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { data } = useUserData();
  const handleLogout = () => {
    logout();
    router.push('/signin');
  };

  useEffect(() => {
    setIsClient(true);
    const logoOnlyPages = [
      '/signin',
      '/signup',
      '/addteam',
      '/',
      '/oauth/signup/google',
      '/oauth/signup/kakao',
    ];
    setIsLogoOnlyPage(logoOnlyPages.includes(router.pathname));
  }, [router.pathname]);

  if (!isClient) {
    return null;
  }

  const basic: Option[] = [
    {
      label: '마이 히스토리',
      component: (
        <button
          type="button"
          onClick={() => router.push(`/myhistory/${data?.id}`)}
          className="w-full"
        >
          마이 히스토리
        </button>
      ),
    },
    {
      label: '팀 목록',
      component: (
        <button
          type="button"
          onClick={() => router.push('/myteam')}
          className="w-full"
        >
          팀 목록
        </button>
      ),
    },
    {
      label: '팀 참여',
      component: (
        <button
          type="button"
          onClick={() => router.push('/addteam/participate')}
          className="w-full"
        >
          팀 참여
        </button>
      ),
    },
    {
      label: '계정 설정',
      component: (
        <button
          type="button"
          onClick={() => router.push(`/mysetting/${data?.id}`)}
          className="w-full text-text-tertiary"
        >
          계정 설정
        </button>
      ),
    },
    {
      label: '로그아웃',
      component: (
        <button
          type="button"
          onClick={handleLogout}
          className="w-full text-text-disabled"
        >
          로그아웃
        </button>
      ),
    },
  ];

  return (
    <header className=" flex h-16 items-center justify-center border-b border-border-primary border-opacity-10 bg-background-secondary px-6">
      <nav className="flex h-8 w-[1200px]  items-center justify-between text-text-primary max-xl:w-full max-md:w-full ">
        <div className="flex items-center gap-10 max-md:gap-5">
          {isLogoOnlyPage ? (
            <Link href="/">
              <div className="block max-xl:hidden">
                <Image src={PCLogo} alt="로고" width={158} height={32} />
              </div>
              <div className="hidden max-xl:block">
                <Image src={PCLogo} alt="로고" width={102} height={20} />
              </div>
            </Link>
          ) : (
            data && <NavBarTeam data={data} />
          )}
        </div>
        {!isLogoOnlyPage && (
          <div>
            <Dropdown
              options={basic}
              triggerIcon={
                <div
                  className={clsx({
                    'mt-[5px] flex items-center gap-2 ': data,
                    hidden: !data,
                  })}
                >
                  <div className="h-[35px] w-[35px] overflow-hidden rounded-xl">
                    <Image
                      src={data?.image ?? '/icons/user.svg'}
                      alt="로고"
                      width={35}
                      height={35}
                      className="h-[35px] w-[35px] rounded-lg"
                    />
                  </div>
                  <ButtonMotion>
                    <span className="max-xl:hidden">
                      {data?.nickname || '이름'}
                    </span>
                  </ButtonMotion>
                </div>
              }
              optionsWrapClass="mt-2 right-0 rounded-[12px] border shadow-[0_2px_10px_rgba(0,0,0,0.5)] border-background-tertiary"
              optionClass="rounded-[12px] md:w-[150px] md:h-[47px] w-[120px] h-[40px] justify-center text-md-regular md:text-lg-regular text-center hover:bg-background-tertiary"
            />
          </div>
        )}
      </nav>
    </header>
  );
}
