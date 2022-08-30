import { useSearchParams } from "react-router-dom";

const useLocationInfo = () => {
    const [searchParams] = useSearchParams();
    const querParams = Object.fromEntries(searchParams);
    const cityId: string = (querParams.cityId as string) ?? "11307";
    const cityName: string = (querParams.cityName as string) ?? "Jammu";
    const area: string = (querParams.area as string) ?? "Jammu";
    const cuisineId: string = querParams.cuisineId as string;
    const countryName: string = (querParams.countryName as string) ?? "India";
    const entityType: string = (querParams.entityType as string) ?? "city";
    return {
        cityId,
        cityName,
        area,
        cuisineId,
        countryName,
        entityType
    };
};

export default useLocationInfo;
