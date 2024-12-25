import RequestCard from "@/components/modules/requests/RequestCard";
import RequestFilters from "@/components/modules/requests/RequestFilter";
import Container from "@/components/ui/container";
import { useGetRequestsQuery } from "@/redux/features/requestBlood/requestBloodApi";
import { IRequest } from "@/types";

export default function Requests() {
  const { data } = useGetRequestsQuery(undefined);

  console.log(data);

  return (
    <Container>
      <RequestFilters />
      <div className="space-y-8">
        {data?.data?.map((request: IRequest) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </Container>
  );
}
