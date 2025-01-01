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
import { AddHospitalModal } from "@/components/modules/admin/AddHospitalModal";
import { useGetHospitalsQuery } from "@/redux/features/hospital/hospitalApi";
import { IHospital } from "@/types";

export default function HospitalList() {
  const { data, isLoading, isError } = useGetHospitalsQuery(undefined);

  console.log(data);
  const handleDeleteHospital = (hospitalId: number) => {
    console.log(hospitalId);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Hospital Management</h1>
      <div className="my-5 flex justify-end">
        <AddHospitalModal />
      </div>
      <div className="rounded-md border">
        {isLoading && <p>Loading...</p>}
        {!isLoading && !isError && (
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
              {data?.data?.map((hospital: IHospital) => (
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
        )}
      </div>
    </div>
  );
}
