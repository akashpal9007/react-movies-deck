import "./Header.css";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({path}) => {
    let nav = useNavigate();
    return(
    <>       
        <nav className="navbar">
            <span onClick={()=>window.scroll(0,0)} className="logo">MoviesDeck</span>

            <Button className="movies" onClick={()=>{nav("/movies")}}>
            <MovieIcon />
            Movies
            </Button>

            <Button className="trending" onClick={()=>{nav("/")}}>
            <WhatshotIcon />Trending
            </Button>

            <Button className="tvseries"  onClick={()=>{nav("/tvseries")}}>
            <TvIcon />TVSeries
            </Button>

            <Button className="search" onClick={()=>{nav("/search")}}>
            <SearchIcon />Search
            </Button>
        </nav>
    </>
    )
}

export default Header
