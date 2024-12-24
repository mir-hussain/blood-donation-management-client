import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="relative bg-red-600 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/placeholder.svg?height=600&width=1600"
          alt="Blood donation"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Save Lives: Donate Blood Today
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Your donation can make a difference. Join our community of life-savers
          and help those in need.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/donate">Donate Now</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/request">Request Blood</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
