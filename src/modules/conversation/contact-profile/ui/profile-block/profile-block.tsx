import { PROFILE } from 'modules/conversation/shared/utils/profile';
import { JSX } from 'react';
import { AddButton } from '../action-button';
import { ProfileAvatar } from '../profile-avatar';
import { ProfileHeader } from '../profile-header';
import { ProfileInfo } from '../profile-info';
import { ProfileLayout } from '../profile-layout';
import { ProfileNotification } from '../profile-notification';
import { ProfileUploads } from '../profile-uploads';
import AddIcon from './icons/add.svg';
import { ProfileBlockProps } from './profile-block.props';

export const ProfileBlock = ({ uid }: ProfileBlockProps): JSX.Element => {
  void uid;

  return (
    <ProfileLayout header={<ProfileHeader uid={uid} />}>
      <ProfileAvatar
        avatarHref={PROFILE.avatar_url}
        firstName={PROFILE.first_name}
        lastName={PROFILE.last_name}
        isOnline={PROFILE.is_online}
      />
      <ProfileNotification uid={uid} />
      <ProfileInfo
        nickname={PROFILE.nickname}
        phoneNumber={PROFILE.phoneNumber}
        birthDay={PROFILE.birthDay}
        about={PROFILE.about}
      />
      {PROFILE.is_in_contact && <AddButton icon={<AddIcon />} label={'Добавить в контакты'} />}
      {!PROFILE.is_blocked && <AddButton icon={<AddIcon />} label={'Разблокировать'} />}
      <ProfileUploads />
    </ProfileLayout>
  );
};
