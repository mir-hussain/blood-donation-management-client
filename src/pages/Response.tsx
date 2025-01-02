import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  useGetRequestByIdQuery,
  useGetResponseQuery,
} from "@/redux/features/requestBlood/requestBloodApi";
import { useParams } from "react-router-dom";
import { IResponse } from "@/types";

export default function Response() {
  const { id } = useParams();

  const { data: responses } = useGetResponseQuery(id);
  const { data: request } = useGetRequestByIdQuery(id);

  if (!request) {
    return <div>Loading...</div>;
  }
  console.log(request.data);

  const requestUser = JSON.parse(request?.data?.user);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blood Request Responses</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Blood Request Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Requester:</p>
              <p>{requestUser?.name}</p>
            </div>
            <div>
              <p className="font-semibold">Blood Type Requested:</p>
              <p>{request?.data?.blood_type_requested}</p>
            </div>
            <div>
              <p className="font-semibold">Quantity Requested:</p>
              <p>{request?.data?.quantity_requested} units</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <Badge>{request?.data?.status}</Badge>
            </div>
            <div>
              <p className="font-semibold">Request Date:</p>
              <p>{format(new Date(request?.data?.request_date), "PPP")}</p>
            </div>
            <div>
              <p className="font-semibold">Location:</p>
              <p>
                {request?.data?.location}, {request?.data?.city}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Donation Responses</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor Name</TableHead>
                <TableHead>Blood Type</TableHead>
                <TableHead>Quantity Donated</TableHead>
                <TableHead>Donation Date</TableHead>
                <TableHead>Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {responses?.data?.map((response: IResponse) => (
                <TableRow key={response.donation_id}>
                  <TableCell>{response.user_name}</TableCell>
                  <TableCell>{response.blood_type}</TableCell>
                  <TableCell>{response.quantity_donated} units</TableCell>
                  <TableCell>
                    {format(new Date(response.donation_date), "PPP")}
                  </TableCell>
                  <TableCell>
                    <p>{response.user_email}</p>
                    <p>{response.user_phone}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
