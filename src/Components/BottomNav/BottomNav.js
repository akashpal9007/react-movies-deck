import { BottomNavigation } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BottomNavigationAction } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: "0",
        backgroundColor: "#2d313a",
        zIndex: 100,
        ['@media (min-width:1000px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
          }
    },
});

const BottomNav = () => {
    const classes = useStyles();
    let navigate = useNavigate();

    return (
    <BottomNavigation
    showLabels
        className={classes.root}
        >
    <BottomNavigationAction style={{color:"white"}} label="Trending" onClick={()=>{navigate("/")}} icon={<WhatshotIcon />} />
    <BottomNavigationAction style={{color:"white"}} label="Movies" onClick={()=>{navigate("/movies")}} icon={<MovieIcon />} />
    <BottomNavigationAction style={{color:"white"}} label="TvSeries" onClick={()=>{navigate("/tvseries")}} icon={<TvIcon />} />
    <BottomNavigationAction style={{color:"white"}} label="Search" onClick={()=>{navigate("/search")}} icon={<SearchIcon />} />
    </BottomNavigation>
    )
}

export default BottomNav

