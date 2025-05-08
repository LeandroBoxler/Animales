interface Props {
  children: React.ReactNode;
  className?: string;
}

export const PageMain = ({ children, className }: Props) => {
  return <main className={`bg-gray-300 p-8 ${className}`}>{children}</main>;
};
