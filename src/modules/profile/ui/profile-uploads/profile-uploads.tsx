import clsx from 'clsx';
import { FILES, LINKS, PHOTOS } from 'modules/profile/shared/utils/profile';
import { JSX, ReactElement, useState } from 'react';
import { FilesTab } from './files-tab';
import { LinksTab } from './links-tab';
import { MediaTab } from './media-tab';
import styles from './profile-uploads.module.scss';
import { ProfileUploadsProps } from './profile-uploads.props';

export const ProfileUploads = ({ uid }: ProfileUploadsProps): JSX.Element => {
  void uid;

  const tabs = [
    {
      id: 'media',
      title: 'Медиа',
    },
    {
      id: 'files',
      title: 'Файлы',
    },
    {
      id: 'voices',
      title: 'Голосовые',
    },
    {
      id: 'links',
      title: 'Ссылки',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const renderTab = (): ReactElement | null => {
    const tab = tabs[activeTab];

    switch (tab.id) {
      case 'media':
        return <MediaTab items={PHOTOS} />;
      case 'files':
        return <FilesTab items={FILES} />;
      case 'links':
        return <LinksTab items={LINKS} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={clsx(styles.tab, activeTab === index && styles.active)}
            onClick={() => setActiveTab(index)}
          >
            <div className={styles.tabButtons}>
              <span className={styles.label}>{tab.title}</span>
              <div className={clsx(styles.border, activeTab === index && styles.active)}></div>
            </div>
          </button>
        ))}
      </div>

      {renderTab()}
    </div>
  );
};
