import { useGetIndustryTypeByIdQuery } from "@/services/industry-type";

export const IndustryTypeData = ({ id }: { id: number }) => {
  const { data = [] } = useGetIndustryTypeByIdQuery(id);

  return <>{data?.IndustryName}</>;
};
