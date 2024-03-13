import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import InfoCards from "./components/infoCards/InfoCards";
import SearchBar from "./components/searchBar/SearchBar"
import FrontPageSections from "./components/frontPageSections/FronPageSections"
import Categories from "./components/categories/Categories"
import Bloggers from "./components/bloggers/Bloggers"

const titlesList=["Trending Post","Featured Post","Newly Uploaded"];

export default function Home() {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      {titlesList.map((element,index)=>{
        return <FrontPageSections key={index} title={element}/>;
      })}
      <Categories/>
      <Bloggers/>
    
    </>
  );
}
