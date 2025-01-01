import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Hospital = {
  id: string;
  name: string;
  branch: string | null;
  city: string;
  address: string;
};

const initialHospitals: Hospital[] = [
  {
    id: "1",
    name: "City Hospital",
    branch: "Main",
    city: "New York",
    address: "123 Main St, New York, NY 10001",
  },
  {
    id: "2",
    name: "County Hospital",
    branch: null,
    city: "Los Angeles",
    address: "456 Elm St, Los Angeles, CA 90001",
  },
  {
    id: "3",
    name: "General Hospital",
    branch: "West",
    city: "Chicago",
    address: "789 Oak St, Chicago, IL 60601",
  },
  {
    id: "4",
    name: "Community Hospital",
    branch: "East",
    city: "Houston",
    address: "101 Pine St, Houston, TX 77001",
  },
];

export default function HospitalList() {
  const [hospitals, setHospitals] = useState<Hospital[]>(initialHospitals);

  const handleDeleteHospital = (hospitalId: string) => {
    setHospitals(hospitals.filter((hospital) => hospital.id !== hospitalId));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Hospital Management</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hospital Name</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>City</TableHead>
              <TableHead className="w-1/2">Address</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hospitals.map((hospital) => (
              <TableRow key={hospital.id}>
                <TableCell className="font-medium">{hospital.name}</TableCell>
                <TableCell>{hospital.branch || "-"}</TableCell>
                <TableCell>{hospital.city}</TableCell>
                <TableCell className="w-1/2">
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="truncate w-full block cursor-pointer">
                        {hospital.address}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{hospital.address}</p>
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDeleteHospital(hospital.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
