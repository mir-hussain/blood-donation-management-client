import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  bloodGroup: string;
  role: "Admin" | "User" | "Receptionist";
};

const initialUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    bloodGroup: "A+",
    role: "Admin",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    bloodGroup: "B-",
    role: "User",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    bloodGroup: "O+",
    role: "Receptionist",
  },
  {
    id: "4",
    name: "Bob Williams",
    email: "bob@example.com",
    bloodGroup: "AB+",
    role: "User",
  },
];

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleRoleChange = (userId: string, newRole: User["role"]) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">User Management</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Blood Group</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.bloodGroup}</TableCell>
                <TableCell>
                  <Select
                    defaultValue={user.role}
                    onValueChange={(value) =>
                      handleRoleChange(user.id, value as User["role"])
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="User">User</SelectItem>
                      <SelectItem value="Receptionist">Receptionist</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDeleteUser(user.id)}
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
