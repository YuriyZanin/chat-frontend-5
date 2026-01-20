import { FileContent } from '../../profile-uploads.props';

export type VoiceProps = {
  item: FileContent;
  onPlay: (audioRef: HTMLAudioElement | null) => void;
  onPause: () => void;
};
