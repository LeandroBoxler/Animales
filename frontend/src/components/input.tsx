interface InputProps{
    label?:string
    type:string
}

export const Input = ({label,type}:InputProps) => {
  return (
    <div>
    <label htmlFor="">  {label} </label>
    <input type={type} />                
    </div>
  )
}
