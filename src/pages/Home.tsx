import Hero from "@/components/modules/home/Hero";
import RecentAdditions from "@/components/modules/home/RecentAddition";
import RecentRequests from "@/components/modules/home/RecentRequests";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <RecentRequests />
        <RecentAdditions />
      </div>
    </div>
  );
}
