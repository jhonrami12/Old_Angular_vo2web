export interface V2vISsmlConfiguration {
  uidTP?: string;
  uidProject?: string;
  break?: V2vIBreak;
  emphasis?: string;
  lexicon?: string;
  mstts?: V2vIMssts;
}

export interface V2vIBreak {
  strength?: string;
  time?: string;
}

export interface V2vIMssts {
  expressAs?: V2vIExpressAs;
  audioduration?: string;
  silence?: V2vISilence;
}

export interface V2vIExpressAs {
  style?: string;
  styledegree?: string;
  role?: string;
}

export interface V2vISilence {
  type?: string;
  value?: string;
}

export interface V2vIPhoneme {
  alphabet?: string;
  ph?: string;
}

export interface V2vIProsody {
  pitch?: string;
  contour?: string;
  range?: string;
  rate?: string;
  volume?: string;
}
