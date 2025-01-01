import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { bloodTypes } from "@/constants/bloodTypes";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { toast } from "sonner";

interface IProps {
  requestId: number;
}

export function DonationModal({ requestId }: IProps) {
  const user = useAppSelector(selectCurrentUser);
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const donationData = {
      ...data,
      user_id: user?.id,
      donation_date: format(data.donation_date, "yyyy-mm-dd"),
      request_id: requestId,
    };

    console.log(donationData);

    // const res = await createDonation(donationData).unwrap();

    // if (res.success) {
    //   toast.success("Donation recorded successfully");
    //   form.reset();
    // }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Donate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Record New Donation</DialogTitle>
          <DialogDescription>
            Fill in the details below to record a new donation.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="blood_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blood Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Blood Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {bloodTypes.map((bloodType) => (
                              <SelectItem key={bloodType} value={bloodType}>
                                {bloodType}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="donation_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel> Request Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity_donated"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity Donated (in units)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter quantity donated"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full mt-4">
                Record Donation
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
