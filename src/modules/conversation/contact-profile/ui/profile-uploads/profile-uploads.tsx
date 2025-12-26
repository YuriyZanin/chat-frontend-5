import clsx from 'clsx';
import { JSX, useState } from 'react';
import styles from './profile-uploads.module.scss';

export const ProfileUploads = (): JSX.Element => {
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
  );
};
