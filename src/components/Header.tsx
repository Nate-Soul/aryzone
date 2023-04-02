import NavBar from "./NavBar"


type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({setQuery}: Props) => {
  return (
    <header>
      <NavBar setQuery={setQuery}/>
    </header>
  )
}

export default Header
