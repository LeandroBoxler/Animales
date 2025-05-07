interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const PageCard = ({ children, className }: Props) => {
  return (
    <main className={`bg-white p-4 rounded-lg shadow-lg m-6 ${className}`}>
      {children}
    </main>
  );
};
