interface IProps {
  children: React.ReactNode;
}

export default function container({ children }: IProps) {
  return <div className="max-w-7xl mx-auto px-2 w-full">{children}</div>;
}
