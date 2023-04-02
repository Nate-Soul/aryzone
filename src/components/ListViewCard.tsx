import Thumb from "./Thumb"

type Props = {
    imgUrl: string;
    title: string;
    subtitle?: string;
};

const ListViewCard = ({ imgUrl, title, subtitle }: Props) => {
  return (
    // <figure className="relative p-3 m-3 shadow rounded-lg">
    //   <Thumb imgUrl={imgUrl} />
    //   <figcaption className="absolute w-full bottom-0 px-4 py-2 rounded-b-lg bg-violet-800">
    //     <h2 className="text-white text-center text-xl truncate">{title}</h2>
    //     {subtitle ? <p className="text-xs truncate">{subtitle}</p> : null}
    //   </figcaption>
    // </figure>
    <div className="h-80">
      <figure className="relative h-full">
        <Thumb imgUrl={imgUrl}/>
        <figcaption className="absolute w-full bottom-0 px-4 py-2 rounded-b-lg bg-violet-900 text-white text-center">
          <h2 className="text-xl truncate">{title}</h2>
          {subtitle ? <p className="text-xs truncate">{subtitle}</p> : null}
        </figcaption>                
      </figure>
    </div>
  )
}

export default ListViewCard
