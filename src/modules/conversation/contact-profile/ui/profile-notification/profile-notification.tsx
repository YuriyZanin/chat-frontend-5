import { JSX } from 'react';
import styles from './profile-notification.module.scss';
import { ProfileNotificationProps } from './profile-notification.props';

export const ProfileNotification = ({ uid }: ProfileNotificationProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Уведомления</span>
      <button className={styles.toggleButton}>
        <div className={styles.toggle}>
          <div className={styles.circle}></div>
        </div>
      </button>
    </div>
  );
};
