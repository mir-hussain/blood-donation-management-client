import HospitalCard from "@/components/modules/hospital/HospitalCard";
import HospitalFilters from "@/components/modules/hospital/HospitalFilters";
import Container from "@/components/ui/container";
import Loading from "@/components/ui/loading";
import { useGetHospitalsQuery } from "@/redux/features/hospital/hospitalApi";
import { IHospital } from "@/types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Hospitals() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    searchParams.get("city") ?? undefined
  );
  const { data, isLoading, isError } = useGetHospitalsQuery({
    name: searchTerm,
    city: selectedCity,
  });

  return (
    <Container>
      <HospitalFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCity={selectedCity as string}
        setSelectedCity={setSelectedCity}
      />
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
