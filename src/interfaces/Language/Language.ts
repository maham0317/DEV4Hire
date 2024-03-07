export default interface LanguageModel {
  Id: Number;
  LanguageName: string;
  Description: string;
  IsCVLanguage: string;
}

export interface LanguageStateModel {
  status: string;
  error: object | null;
  isLoading: boolean;
  isError: boolean;
  data: LanguageModel | null;
}
