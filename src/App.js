import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Home from "./Home"
import Feed from "./Feed"
import Project from "./Project"
import Search from "./Search"
// import Profile from "./Profile"


function App() {

  const [users, setUsers] = useState([]);
  const [stockImages, setStockImages] = useState([]);
  const [feedImages, setFeedImages] = useState([]);
  // const [search, setSearch] = useState(true);

  // use mockaroo api when proj is ready 
  // https://my.api.mockaroo.com/users1025221258.json?key=e1ac8d70
  // https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=20&idStarts=1001")
    .then((res) => res.json())
    .then((data) => {
    setUsers(data);
    console.log(data);
      });
    }, []);

    useEffect(() => {
      fetch("https://picsum.photos/v2/list?page=2&limit=1")
      .then((res) => res.json())
      .then((data) => {
        setStockImages(data);
      console.log(data);
        });
      }, []);

      useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=2&limit=100")
        .then((res) => res.json())
        .then((data) => {
          setFeedImages(data);
        console.log(data);
          });
        }, []);


       
  return (
    <div className="navbar sticky">
    <nav className="links">
        <Link className="HomeLink" to="/">
          Home
        </Link>

        <Link className="FeedLink" to="/Feed">
         Feed
        </Link>

        <Link className="ProjectsLink" to="/Projects">
          Projects
        </Link>
        <Search />
      </nav>
      <Routes>
        <Route path="/" element={<Home users={users} stockImages={stockImages}/> } />
         <Route path="/Feed" element={<Feed feedImages={feedImages}/>} />
        <Route path="/Projects" element={<Project />} />
        {/* <Route path="nav" element={null} />
        <Route path="nav" element={null} /> */}
      </Routes>
    </div>
  );
}

export default App;
/* <Home users={users} stockImages={stockImages}/> */
