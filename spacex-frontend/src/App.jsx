import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Card from "./component/Card";
import Popup from "./component/Popup";
import Pagenation from "./component/Pagenation";
export default function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [newdata, setNewData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [active, setActive] = useState(false);
  useEffect(() => {
    calldata();
  }, []);

  function calldata() {
    axios.get("https://spacex-demo.onrender.com/api").then((res) => {
      setData(res.data.data);
      console.log(res.data);
    });
  }

  function filterdata(name, value) {
    // eslint-disable-next-line array-callback-return
    let d = data.filter((el) => {
      // eslint-disable-next-line eqeqeq
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
        <Filter newdata={newdata} setNewData={setNewData} func={filterdata} />
        {newdata?.map((el, i) => {
          return <Card data={el} key={i} />;
        })}
      </section>
      <section className="allcards">
        <div className="card_box">
          <h1 className="heading">All Capsules</h1>
          {active ? (
            <Popup active={active} setActive={setActive} id={id} />
          ) : (
            ""
          )}
          <div className="card_grid">
            {Current?.map((el, i) => {
              return (
                <Card data={el} setActive={setActive} setId={setId} key={i} />
              );
            })}
          </div>
          <Pagenation
            Total={data?.length}
            currentPage={page}
            limit={limit}
            setPage={setPage}
          />
        </div>
      </section>
    </div>
  );
}
