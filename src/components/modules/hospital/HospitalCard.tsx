import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HospitalCard() {
  return (
    <div className="bg-white p-4 rounded-lg border shadow  hover:shadow-lg transition-all">
      <h1 className="text-xl font-semibold mb-3"> Ibn Sina (Dhanmondi) </h1>
      <div className="flex items-end justify-between">
        <div className="text-sm text-gray-400">
          <p> 123, Shukrabad, Dhanmondi, Dhaka </p>
          <p> 01712345678 </p>
        </div>
        <div>
          <Link to="#" className="flex items-center hover:underline">
            <span> View Details </span>
            <ChevronRight className="mt-[2px] size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
