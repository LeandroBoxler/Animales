interface Props {
  name: string;
  className?: string;
}

export const ButtomSubmit = ({ name, className }: Props) => {
  return (
    <div className={className}>
      <button className="rounded bg-blue-300 p-2 mt-3 w-full"> {name} </button>
    </div>
  );
};
