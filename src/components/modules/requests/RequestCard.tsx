import { Button } from "@/components/ui/button";

export default function RequestCard() {
  return (
    <div className="bg-white p-4 rounded-lg border shadow  hover:shadow-lg transition-all">
      <h1 className="text-2xl font-semibold mb-3"> John Doe </h1>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xl mb-5">Blood type: O- </p>
          <p>Units needed: 3 Bags </p>
          <p>Location: Dhanmondi 15 </p>
          <p>Date: 29-12-2024 </p>
        </div>
        <div>
          <Button>Donate</Button>
        </div>
      </div>
    </div>
  );
}
