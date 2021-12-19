import "./Header.css";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Header = ({path}) => {
    return(
    <>       
        <nav className="navbar">
            <span onClick={()=>window.scroll(0,0)} className="logo">Name</span>

            <Button className="movies">
            <Link to={"/movies"}>
            <MovieIcon />Movies
            </Link>
            </Button>

            <Button className="trending">
            <Link to={"/"}>
            <WhatshotIcon />Trending
            </Link>
            </Button>
            <Button className="tvseries">
            <Link to={"/tvseries"}>
            <TvIcon />TVSeries
            </Link>
            </Button>
            <Button className="search">
            <Link to={"/search"}>
            <SearchIcon />Search
            </Link>
            </Button>
        </nav>
    </>
    )
}

export default Header
