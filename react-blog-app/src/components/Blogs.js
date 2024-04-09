import blogs from "../data/blogs";
import { Link } from "react-router-dom";
import "./Blogs.css";
import { useState, useEffect } from "react";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlogs, setFilterBlogs] = useState([]);
  useEffect(() => {
    const result = blogs.filter((item) => item.title.includes(search));
    setFilterBlogs(result);
    // eslint-disable-next-line
  }, [search]);
  return (
    <div className="blog-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาบทความ"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article>
        {filterBlogs.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}...</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
