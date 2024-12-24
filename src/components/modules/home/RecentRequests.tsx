import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentRequests = [
  {
    id: 1,
    bloodType: "A+",
    quantity: 2,
    hospital: "City General Hospital",
    date: "2023-06-15",
  },
  {
    id: 2,
    bloodType: "O-",
    quantity: 3,
    hospital: "St. Mary's Medical Center",
    date: "2023-06-14",
  },
  {
    id: 3,
    bloodType: "B+",
    quantity: 1,
    hospital: "County Emergency Hospital",
    date: "2023-06-13",
  },
  {
    id: 4,
    bloodType: "AB+",
    quantity: 2,
    hospital: "Children's Hospital",
    date: "2023-06-12",
  },
];

export default function RecentRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Blood Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Blood Type</TableHead>
              <TableHead>Quantity (Units)</TableHead>
              <TableHead>Requesting Hospital</TableHead>
              <TableHead>Date Requested</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.bloodType}</TableCell>
                <TableCell>{request.quantity}</TableCell>
                <TableCell>{request.hospital}</TableCell>
                <TableCell>{request.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
