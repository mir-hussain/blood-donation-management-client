import HospitalCard from "@/components/modules/hospital/HospitalCard";
import HospitalFilters from "@/components/modules/hospital/HospitalFilters";
import Container from "@/components/ui/container";
import Loading from "@/components/ui/loading";
import { useGetHospitalsQuery } from "@/redux/features/hospital/hospitalApi";
import { IHospital } from "@/types";

export default function Hospitals() {
  const { data, isLoading, isError } = useGetHospitalsQuery(undefined);
  return (
    <Container>
      <HospitalFilters />
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <div className="space-y-6">
          {data?.data?.map((hospital: IHospital) => (
            <HospitalCard hospital={hospital} />
          ))}
        </div>
      )}
    </Container>
  );
}
