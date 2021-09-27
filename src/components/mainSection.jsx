import "../styles.css";
import Card from "./card";
import { useEffect, useState } from "react";
import { getListView, getCategories } from "../services/apipoints.js";
import Pagination from "react-js-pagination";
import Loader from "../images/loader.svg";

export default function MainSection() {
  const [number] = useState(20);
  const [page, setpage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState();
  const [category, setcategory] = useState("");
  const [totalitems, setTotalitems] = useState("");
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    setLoading(true);
    const response = await getListView({ number, page });
    if (totalitems === "") {
      setTotalitems(response.found);
    }
    const { categories } = await getCategories();
    setCategories(categories);
    console.log(response);
    setPosts(response.posts);
    console.log(posts);
    setLoading(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeCategory = (e) => {
    setcategory(e.target.value);
  };

  const getPostbyCategory = async () => {
    setLoading(true);
    const { posts } = await getListView({ number, page, category });
    setLoading(false);
    console.log(posts);
    setPosts(posts);
  };

  useEffect(() => {
    getList();
  }, [page]);

  useEffect(() => {
    if (category) {
      getPostbyCategory();
    }
  }, [category]);

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setpage(pageNumber);
  }

  return (
    <>
      {!loading && (
        <div className="mainSection">
          <div className="mainSectionHeaders">
            <div>
              <span className="mainSectionHeader">Latest Articles</span>
            </div>
            <div>
              <select
                key="select"
                style={{ marginTop: "30px" }}
                onChange={changeCategory}
              >
                {categories?.map((item) => {
                  return <option value={item.slug}>{item.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="cardssection">
            {posts.map((item) => {
              return <Card data={item} />;
            })}
          </div>
          <Pagination
            activePage={page}
            itemsCountPerPage={20}
            totalItemsCount={totalitems}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      )}
      {loading && (
        <div className="loader">
          <img src={Loader} width="200px" alt="loader" />
        </div>
      )}
    </>
  );
}
