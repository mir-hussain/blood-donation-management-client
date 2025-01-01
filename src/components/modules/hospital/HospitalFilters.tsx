import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { citiesInBangladesh } from "@/constants/city";
import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

interface IProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function HospitalFilters({
  searchTerm,
  setSearchTerm,
  selectedCity,
  setSelectedCity,
}: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();

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

      setSelectedCity(data);
    }

    setSearchParams(filter, { replace: true });
  };

  const handleClearFilter = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
    setSelectedCity("");

    setSearchTerm("");
  };
  return (
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
              {citiesInBangladesh.map((city) => (
                <SelectItem value={city}>{city}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
