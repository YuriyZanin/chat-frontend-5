import { JSX, useRef, useState } from 'react';
import { CircularProgress } from '../../circular-progress-label';
import PauseIcon from './icons/Pause.svg';
import PlayIcon from './icons/Play.svg';
import styles from './voice.module.scss';
import { VoiceProps } from './voice.props';

export const Voice = ({ item, onPlay, onPause }: VoiceProps): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = (): void => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay(audioRef?.current);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container} onClick={togglePlay}>
      <CircularProgress>{isPlaying ? <PauseIcon /> : <PlayIcon />}</CircularProgress>
      <audio ref={audioRef} src={item.url} onEnded={() => setIsPlaying(false)} />
      <div className={styles.fileInfo}>
        <div className={styles.fileName}>{item.file}</div>
        <div className={styles.fileDescription}>
          <div className={styles.fileSize}>{item.size}</div>
          <div className={styles.dot}>•</div>
          <div className={styles.fileDate}>{item.created}</div>
        </div>
      </div>
    </div>
  );
};
