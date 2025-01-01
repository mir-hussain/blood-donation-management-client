import { IHospital } from "@/types";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {
  hospital: IHospital;
}

export default function HospitalCard({ hospital }: IProps) {
  return (
    <div className="bg-white p-4 rounded-lg border shadow  hover:shadow-lg transition-all">
      <h1 className="text-xl font-semibold mb-3">
        {hospital.name} {hospital.branch ?? hospital.branch}
      </h1>
      <div className="flex items-end justify-between">
        <div className="text-sm text-gray-400">
          <p> {hospital.address} </p>
          <p> {hospital.contact_number} </p>
        </div>
        <div>
          <Link
            to="/hospitals/34523452345234"
            className="flex items-center hover:underline"
          >
            <span> View Details </span>
            <ChevronRight className="mt-[2px] size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
