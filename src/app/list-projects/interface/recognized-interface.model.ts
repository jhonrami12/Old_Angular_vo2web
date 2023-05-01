export interface V2vIRecognizedPhrases {
  uid?: string;
  uidProject?: string;
  order?: number;
  channel?: number;
  speaker?: number;
  offsetInTicks?: number;
  durationInTicks?: number;
  displayOriginal?: string;
  lexical?: string;
  itn?: string;
  maskedITN?: string;
  display?: string;
  uidTranslate?: string;
}
