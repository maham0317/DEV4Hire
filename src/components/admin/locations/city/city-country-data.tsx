import { useGetCountryByIdQuery } from "@/services/locations/country";

export const CityCountryData = ({id}: {id: number}) => {

    const { data = [] } = useGetCountryByIdQuery(id);

    return <>{data?.CountryName}</>;
}