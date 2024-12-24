import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentAdditions = [
  {
    id: 1,
    bloodType: "O+",
    quantity: 5,
    hospital: "City General Hospital",
    date: "2023-06-15",
  },
  {
    id: 2,
    bloodType: "A-",
    quantity: 3,
    hospital: "St. Mary's Medical Center",
    date: "2023-06-14",
  },
  {
    id: 3,
    bloodType: "B-",
    quantity: 2,
    hospital: "County Emergency Hospital",
    date: "2023-06-13",
  },
  {
    id: 4,
    bloodType: "AB-",
    quantity: 1,
    hospital: "Children's Hospital",
    date: "2023-06-12",
  },
];

export default function RecentAdditions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Added Blood</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Blood Type</TableHead>
              <TableHead>Quantity (Units)</TableHead>
              <TableHead>Hospital</TableHead>
              <TableHead>Date Added</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentAdditions.map((addition) => (
              <TableRow key={addition.id}>
                <TableCell>{addition.bloodType}</TableCell>
                <TableCell>{addition.quantity}</TableCell>
                <TableCell>{addition.hospital}</TableCell>
                <TableCell>{addition.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
