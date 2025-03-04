import { IRequest } from "@/types";
import { format } from "date-fns";
import { DonationModal } from "./DonationModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface IProps {
  request: IRequest;
}

export default function RequestCard({ request }: IProps) {
  const user = JSON.parse(request.user);

  return (
    <div className="bg-white p-4 rounded-lg border shadow  hover:shadow-lg transition-all">
      <h1 className="text-2xl font-semibold mb-3"> {user.name} </h1>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xl mb-5">
            Blood type: {request.blood_type_requested}
          </p>
          <p>Units needed: {request.quantity_requested} Bags </p>
          <p>Location: {request.location} </p>
          <p>City: {request.city} </p>
          <p>Date: {format(new Date(request.request_date), "dd-MMM yyyy")} </p>
        </div>
        <div className="space-x-3">
          <Link to={`/response/${request.id}`}>
            <Button variant="outline">Details</Button>
          </Link>
          <DonationModal request={request} />
        </div>
      </div>
    </div>
  );
}
