interface InputProps {
  label?: string;
  type: string;
  className?: string;
  placeHolder?: string;
}

export const Input = ({ label, type, className, placeHolder }: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor=""> {label} </label>
      <input
        id="password"
        type={type}
        className="mt-2 p-2 w-full border border-gray-300 rounded-md text-black"
        placeholder={placeHolder}
      />
    </div>
  );
};
