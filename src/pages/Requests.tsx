import RequestCard from "@/components/modules/requests/RequestCard";
import RequestFilters from "@/components/modules/requests/RequestFilter";
import Container from "@/components/ui/container";

export default function Requests() {
  return (
    <Container>
      <RequestFilters />
      <RequestCard />
    </Container>
  );
}
