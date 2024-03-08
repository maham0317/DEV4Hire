export default interface NetworkAndCommunitiesModel {
  Id: Number;
  NetworkOrCommuniy: string;
}

export interface NetworkAndCommunitiesStateModel {
  status: string;
  error: object | null;
  isLoading: boolean;
  isError: boolean;
  data: NetworkAndCommunitiesModel | null;
}
 