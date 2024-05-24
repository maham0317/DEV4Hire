export default interface LanguageModel {
  Id: number;
  LanguageName: string;
  Description: string;
  IsCVLanguage: string;
}

export interface IAddLanguageProp {
  refreshResult: (model: LanguageModel) => void;
}

export interface IEditLanguageProp extends IAddLanguageProp {
  selectedData: LanguageModel | undefined;
}
