import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Pagenation from "./Pagenation";
export default function App() {
  const [data, setData] = useState([]);
  const [newdata, setNewData] = useState([]);
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  useEffect(() => {
    calldata();
  }, []);

  function calldata() {
    axios.get("http://localhost:3059/api").then((res) => {
      setData(res.data.data);
      console.log(res.data);
    });
  }

  function filterdata(name, value) {
    let d = data.filter((el) => {
      if (el[name] == value) {
        return el;
      }
    });

    setNewData(d);
  }

  const Indexoflast = page * limit;
  const IndexofFirst = Indexoflast - limit;
  const Current = data?.slice(IndexofFirst, Indexoflast);

  return (
    <div className="App">
      <Navbar />
      <section className="container">
        <div className="container_right">
          <h1>Venturing where no one has gone before</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            nobis nesciunt ut repellendus dolorem placeat.
          </p>
        </div>
        <div className="container_left">
          <img
            src="https://sxcontent9668.azureedge.us/cms-assets/assets/Star5_9_Star5_9_DSC_2829_desktop_1e6d60597e.jpg"
            alt="img"
            srcset=""
          />
        </div>
      </section>
      <section className="filter_section">
        <h1 className="heading">Search form</h1>
        <Filter filter={filter} setFilter={setFilter} func={filterdata} />
        {newdata?.map((el) => {
          return <Card data={el} />;
        })}
      </section>
      <section>
        <h1 className="heading">All Capsules</h1>

        <div className="card_grid">
          {Current?.map((el) => {
            return <Card data={el} />;
          })}
        </div>
        <Pagenation
          Total={data?.length}
          currentPage={page}
          limit={limit}
          setPage={setPage}
        />
      </section>
    </div>
  );
}
