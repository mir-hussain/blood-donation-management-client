interface IProps {
  children: React.ReactNode;
}

export default function Container({ children }: IProps) {
  return <div className="container mx-auto px-2 w-full">{children}</div>;
}
