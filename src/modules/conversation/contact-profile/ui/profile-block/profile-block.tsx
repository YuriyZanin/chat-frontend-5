'use client';
import clsx from 'clsx';
import { PROFILE } from 'modules/conversation/shared/utils/profile';
import { JSX, useState } from 'react';
import { ImageUI } from 'shared/ui/image';
import AddIcon from './icons/add.svg';
import CloseIcon from './icons/close.svg';
import CopyIcon from './icons/copy.svg';
import DropdownIcon from './icons/dropdown.svg';
import styles from './profile-block.module.scss';
import { ProfileBlockProps } from './profile-block.props';

export const ProfileBlock = ({ uid }: ProfileBlockProps): JSX.Element => {
  void uid;
  const tabs = [
    {
      id: 'media',
      title: 'Медиа',
      content: <p>Контент первой вкладки</p>,
    },
    {
      id: 'files',
      title: 'Файлы',
      content: <p>Контент второй вкладки</p>,
    },
    {
      id: 'voices',
      title: 'Голосовые',
      content: <p>Контент третьей вкладки</p>,
    },
    {
      id: 'links',
      title: 'Ссылки',
      content: <p>Контент четвертой вкладки</p>,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.delete}>
          <CloseIcon />
        </button>
        <span className={styles.label}>Информация</span>
        <button className={styles.dropdown}>
          <DropdownIcon />
        </button>
      </div>
      <div className={styles.imageContainer}>
        <ImageUI src={PROFILE.avatar_url} alt={PROFILE.last_name} width={360} height={360} />
        <div className={styles.imageLabel}>
          <div className={styles.name}>{`${PROFILE.first_name} ${PROFILE.last_name}`}</div>
          <div className={styles.status}>{PROFILE.is_online ? 'в сети' : 'не в сети'}</div>
        </div>
      </div>
      <div className={styles.notification}>
        <span className={styles.label}>Уведомления</span>
        <button className={styles.toggleButton}>
          <div className={styles.toggle}>
            <div className={styles.circle}></div>
          </div>
        </button>
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.item}>
          <div className={styles.content}>
            <div className={styles.label}>Никнейм</div>
            <div className={styles.link}>{PROFILE.nickname}</div>
          </div>
          <button>
            <CopyIcon />
          </button>
        </div>
        <div className={clsx(styles.item, styles.itemBorder)}>
          <div className={styles.content}>
            <div className={styles.label}>Номер телефона</div>
            <div className={styles.link}>{PROFILE.phoneNumber}</div>
          </div>
          <button>
            <CopyIcon />
          </button>
        </div>
        <div className={clsx(styles.item, styles.itemBorder)}>
          <div className={styles.content}>
            <div className={styles.label}>День рождения</div>
            <div className={styles.text}>{PROFILE.birthDay}</div>
          </div>
        </div>
        <div className={clsx(styles.item, styles.itemBorder)}>
          <div className={styles.content}>
            <div className={styles.label}>О себе</div>
            <div className={styles.text}>{PROFILE.about}</div>
          </div>
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <button>
          <AddIcon />
        </button>
        <span className={styles.label}>Добавить в контакты</span>
      </div>
      <div className={styles.buttonBlock}>
        <button>
          <AddIcon />
        </button>
        <span className={styles.label}>Разблокировать</span>
      </div>
      <div className={styles.tabContainer}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={clsx(styles.tab, activeTab === index && styles.active)}
              onClick={() => setActiveTab(index)}
            >
              <div className={styles.tabContent}>
                <span className={styles.label}>{tab.title}</span>
                <div className={clsx(styles.border, activeTab === index && styles.active)}></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
