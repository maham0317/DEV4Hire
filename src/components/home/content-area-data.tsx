import { useGetProfileInfoByIdQuery } from "@/services/profile-info";

export const ContentAreaData = ({ id }: { id: number }) => {
  const { data } = useGetProfileInfoByIdQuery(id);

  return <>{data?.JobTitle}</>;
};
