
type Props = {
    text: string;
    className?: string;
}

const Pills = ({ className, text }:  Props) => {
  return (
    <div className={`bg-text-800 text-white text-sm font-bold px-2 py-1 m-2 rounded-full inline-flex ${className}`}>
      {text}
    </div>
  )
}

export default Pills
