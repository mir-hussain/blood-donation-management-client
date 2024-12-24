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
import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function Hospitals() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>): void => {
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
    } else {
      filter.delete(keyword);
    }

    setSearchParams(filter, { replace: true });
  };

  return (
    <Container>
      <div className="flex justify-between items-center my-10">
        <div>
          <Input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearchTerm(e)}
          />
        </div>
        <div className="flex space-x-4">
          <Select onValueChange={(data) => handleSelectChange(data, "city")}>
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
          <Select>
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
      <h1> This is Hospitals component </h1>
    </Container>
  );
}
