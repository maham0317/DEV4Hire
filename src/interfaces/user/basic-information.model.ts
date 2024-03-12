export default interface BasicInformation {
  Id: Number;
  PreFix: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Email: string;
  PostalCode: string;
  Mobile: string;
  CountryId?: Number;
  CityId?: Number;
  SkillTypeId?: Number;
  UploadedFile: string;
  LinkedIn: string;
  AdditionalQuestion: string;
}
