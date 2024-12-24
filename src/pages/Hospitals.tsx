import HospitalCard from "@/components/modules/hospital/HospitalCard";
import HospitalFilters from "@/components/modules/hospital/HospitalFilters";
import Container from "@/components/ui/container";

export default function Hospitals() {
  return (
    <Container>
      <HospitalFilters />
      <HospitalCard />
    </Container>
  );
}
