import Header from "./Components/Header/Header";
import "./App.css";
import Container from '@mui/material/Container';
import { Routes,Route} from "react-router";
import { BrowserRouter } from "react-router-dom";
import Trending from "./Components/Pages/Trending";
import Movies from "./Components/Pages/Movies"
import TVSeries from "./Components/Pages/TVSeries"
import Search from "./Components/Pages/Search"
import Error404 from "./Components/Pages/Error404";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div className="app">
    <Container>
      <Routes>
        <Route path='/' element={<Trending />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/tvseries' element={<TVSeries />}/>
        <Route path='/search' element={<Search />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
