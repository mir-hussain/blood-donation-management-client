import { cn } from "@/lib/utils";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IProps) {
  return (
    <div className={cn("container mx-auto px-2 w-full", className)}>
      {children}
    </div>
  );
}
