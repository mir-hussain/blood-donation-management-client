import RequestCard from "@/components/modules/requests/RequestCard";
import RequestFilters from "@/components/modules/requests/RequestFilter";
import Container from "@/components/ui/container";
import Loading from "@/components/ui/loading";
import { useGetRequestsQuery } from "@/redux/features/requestBlood/requestBloodApi";
import { IRequest } from "@/types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Requests() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    searchParams.get("city") ?? undefined
  );
  const { data, isLoading, isError } = useGetRequestsQuery({
    name: searchTerm,
    city: selectedCity,
  });

  return (
    <Container>
      <RequestFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCity={selectedCity as string}
        setSelectedCity={setSelectedCity}
      />
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <div className="space-y-8">
          {data?.data?.map((request: IRequest) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      )}
    </Container>
  );
}
