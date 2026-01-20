import { JSX, useState } from 'react';
import { FileContent } from '../profile-uploads.props';
import { Voice } from './voice/voice';
import styles from './voices-tab.module.scss';
import { VoicesTabProps } from './voices-tab.props';

export const VoicesTab = ({ items }: VoicesTabProps): JSX.Element => {
  const [localFiles, setLocalFiles] = useState<FileContent[]>(items);
  const [currentVoice, setCurrentVoice] = useState<HTMLAudioElement | null>(null);

  const handlePlay = (audioRef: HTMLAudioElement | null): void => {
    if (currentVoice && currentVoice !== audioRef) {
      currentVoice.pause();
    }

    audioRef?.play();
    setCurrentVoice(audioRef);
  };

  const handlePause = (): void => {
    if (currentVoice) {
      currentVoice.pause();
      setCurrentVoice(null);
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.fileList}>
        {localFiles.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <Voice item={item} onPlay={handlePlay} onPause={handlePause} />
          </li>
        ))}
      </ul>
    </div>
  );
};
