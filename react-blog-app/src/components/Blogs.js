import blogs from "../data/blogs";
import { Link } from "react-router-dom";
import "./Blogs.css";

export default function Blogs() {
  return (
    <div className="blog-container">
      <article>
        {blogs.map((item) => (
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
