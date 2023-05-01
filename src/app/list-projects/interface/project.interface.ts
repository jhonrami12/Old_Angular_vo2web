export interface V2vIProject {
  uid?: string;
  uidUser?: string;
  name?: string;
  description?: string;
  originSrc?: string;
  renderedSrc?: string;
  completedAudioSrc?: string;
  audioBackgroud?: V2vIAudioBackground;
  localeOrigin?: string;
  localeTarget?: string;
  speakerVoices?: V2vISpeakerVoice[];
  tags?: V2vITag[];
}

export interface V2vITag {
  id?: string;
  label?: string;
  icon?: string;
}

interface V2vIAudioBackground {
  src?: string;
  volumen?: string;
}

interface V2vISpeakerVoice {
  speaker?: number;
  speakerVoiceUid?: string;
}
