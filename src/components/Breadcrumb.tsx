import Link from "next/link";

type Props = {
  title: String;

}

const Breadcrumb = ({title}: Props) => {
  return (
    <nav className="bg-violet-900">
      <div className="container">
        <ul className="flex items-center m-auto p-4 text-white text-lg">
          <Link className="hover:opacity-80 cursor-pointer duration-300" href="/">
            Home
          </Link>
          <span className="hover:opacity-80 cursor-pointer duration-300 px-2 font-bold truncate">
            {title}
          </span>
        </ul>
      </div>      
    </nav>
  )
}

export default Breadcrumb
