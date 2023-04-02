import Link from "next/link"
import Image from "next/image"
import SearchInput from "./SearchInput"

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar = ({ setQuery }: Props) => {
  return (
    <nav className="sticky top-0 z-40 py-4 shadow-sm bg-violet-900 bg-opacity-90">
      <div className="container flex items-center justify-between">
        <Link href="/">
            <Image width="100" height="35" src="/rmdb-logo.svg" alt="Aryzone Logo"/>
        </Link>
        {setQuery ? (
          <div className="relative flex items-center">
            <SearchInput setQuery={setQuery}/>
          </div>
        ): null}
      </div>
    </nav>
  )
}

export default NavBar
