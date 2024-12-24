import HospitalCard from "@/components/modules/hospital/HospitalCard";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Hospitals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    searchParams.get("city") ?? undefined
  );
  const [selectedArea, setSelectedArea] = useState<string | undefined>(
    searchParams.get("area") ?? undefined
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    const search = new URLSearchParams(searchParams);
    if (e.target.value) {
      search.set("searchTerm", e.target.value);
    } else {
      search.delete("searchTerm");
    }

    setSearchParams(search, { replace: true });
  };

  const handleSelectChange = (data: string, keyword: string) => {
    const filter = new URLSearchParams(searchParams);

    if (data) {
      filter.set(keyword, data);
      if (keyword === "city") {
        setSelectedCity(data);
      } else {
        setSelectedArea(data);
      }
    }

    setSearchParams(filter, { replace: true });
  };

  const handleClearFilter = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
    setSelectedCity("");
    setSelectedArea("");
    setSearchTerm("");
  };

  return (
    <Container>
      <div className="flex justify-between items-center my-10">
        <div>
          <Input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearchTerm(e)}
            value={searchTerm}
          />
        </div>
        <div className="flex space-x-4">
          {Array.from(searchParams.keys()).length > 0 && (
            <Button onClick={handleClearFilter}>Clear Filter</Button>
          )}
          <Select
            value={selectedCity}
            onValueChange={(data) => handleSelectChange(data, "city")}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={selectedArea}
            onValueChange={(data) => handleSelectChange(data, "area")}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <HospitalCard />
      </div>
    </Container>
  );
}
