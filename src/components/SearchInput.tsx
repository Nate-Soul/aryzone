import Image from "next/image"
import { useRef, useState } from "react"


type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const TIME = 300; //ms

const SearchInput = ({setQuery}: Props) => {

    const [searchText, setSearchText] = useState("");
    const timer = useRef<NodeJS.Timeout>();

    const handleSearchField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        clearTimeout(timer.current);
        setSearchText(value);

        timer.current = setTimeout(() => {
          setQuery(value);
        }, TIME);
    }
  return (
    <>
      <input className="py-2 px-4 md:w-96 rounded-full text-md bg-white text-black-300 border-2 border-transparent focus:outline-none focus:border-blue-500" type="search" name="search_input" id="searchInput" value={searchText} onChange={handleSearchField} placeholder="Search for a movie"/>
      <div className="absolute right-4 top-3">
        <Image src="/tmdb-logo.svg" width="30" height="32" alt="themoviedb logo"/>
      </div>
    </>
  )
}

export default SearchInput
