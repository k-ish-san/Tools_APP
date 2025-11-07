export interface Language {
  language: string;
  name?: string;
}

export interface TranslationResponse {
  data: {
    translations: { translatedText: string }[];
  };
}

export interface DetectionResponse {
  data: {
    detections: { language: string; confidence: number; isReliable: boolean }[][];
  };
}
