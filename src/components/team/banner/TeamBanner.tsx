import { useModal } from '@hooks/useModal';
import { Option } from '@components/@shared/Dropdown';
import { useTeamStore } from '@/src/stores/teamStore';
import Image from 'next/image';
import EditDropdown from '../EditDropdown';
import EditTeamModal from './EditTeamModal';
import DeleteTeamModal from './DeleteTeamModal';

export default function TeamBanner() {
  const { teamName, imageUrl } = useTeamStore();

  const {
    isOpen: editIsOpen,
    openModal: editOpenModal,
    closeModal: editCloseModal,
  } = useModal();

  const {
    isOpen: deleteIsOpen,
    openModal: deleteOpenModal,
    closeModal: deleteCloseModal,
  } = useModal();

  const gearIcon = (
    <Image width={24} height={24} src="/icons/gear.svg" alt="톱니바퀴 아이콘" />
  );
  // 드롭다운에서 선택된 옵션을 처리하는 함수
  const handleSelect = (option: Option) => {
    if (option.label === 'edit') {
      editOpenModal(); // '수정하기'를 선택했을 때
    } else {
      deleteOpenModal();
    } // '삭제하기'를 선택했을 때
  };
  return (
    <div className="flex items-center justify-between rounded-[12px] border border-border-primary border-opacity-10 bg-slate-50 bg-opacity-10 bg-[url('/images/thumbnail_team.png')] bg-contain bg-[90%] bg-no-repeat p-[24px]">
      <div className="flex items-center gap-[15px]">
        <div className="relative h-[45px] w-[45px] rounded-[16px] bg-border-primary">
          <Image src={imageUrl} alt="팀 프로필 이미지" fill />
        </div>
        <p className="text-xl-bold">{teamName}</p>
      </div>

      <EditDropdown triggerIcon={gearIcon} onSelect={handleSelect} />
      <EditTeamModal isOpen={editIsOpen} closeModal={editCloseModal} />
      <DeleteTeamModal isOpen={deleteIsOpen} closeModal={deleteCloseModal} />
    </div>
  );
}
