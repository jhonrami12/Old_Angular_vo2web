import { V2vITag } from '../../list-projects/interface/project.interface';
type V2vTag = 'Dubbling' | 'Translation' | 'Transcribe' | 'Audio' | 'Video';

enum V2vEnumTag {
  Dubbling = '../../../assets/svg/dubbling-icon.svg',
  Translation = '../../../assets/svg/translate-icon.svg',
  Transcribe = '../../../assets/svg/transcribe-icon.svg',
  Audio = '../../../assets/svg/audio-icon.svg',
  Video = '../../../assets/svg/video-icon.svg',
}

const getTag = (type: V2vTag): V2vITag => {
  return {
    id: `tag-${type}-id`,
    icon: V2vEnumTag[type],
    label: type,
  };
};

export default getTag;
