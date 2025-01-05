"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/ui/container";
import { useGetStorageQuery } from "@/redux/features/hospital/hospitalApi";
import { useParams } from "react-router-dom";

const bloodTypes = [
  { type: "A+", quantity: 50 },
  { type: "A-", quantity: 30 },
  { type: "B+", quantity: 45 },
  { type: "B-", quantity: 25 },
  { type: "O+", quantity: 55 },
  { type: "O-", quantity: 35 },
  { type: "AB+", quantity: 20 },
  { type: "AB-", quantity: 15 },
];

export default function BloodBank() {
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("");
  const { id } = useParams();

  const { data } = useGetStorageQuery(id);

  console.log(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Request submitted:", { selectedBloodType, quantity, reason });
    // toast({
    //   title: "Request Submitted",
    //   description: `Your request for ${quantity} units of ${selectedBloodType} blood has been received.`,
    // });
    // Reset form
    setSelectedBloodType("");
    setQuantity("");
    setReason("");
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Available Blood Types</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Blood Type</TableHead>
                  <TableHead>Available Units</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((blood) => (
                  <TableRow key={blood.blood_type}>
                    <TableCell>{blood.blood_type}</TableCell>
                    <TableCell>{blood.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Request Blood</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Select
                  value={selectedBloodType}
                  onValueChange={setSelectedBloodType}
                >
                  <SelectTrigger id="bloodType">
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodTypes.map((blood) => (
                      <SelectItem key={blood.type} value={blood.type}>
                        {blood.type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity (units)</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Request</Label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
