import "../styles.css";
import Circle from "../images/circle.svg";
import { timeSince } from "../services/utils";
import { useHistory } from "react-router-dom";

export default function Card({ data }) {
  const { date, title, slug, categories } = data;
  const category = () => {
    let result = [];
    Object.keys(categories).map((item) => {
      result.push(
        <div className="category">
          <img src={Circle} width="8px" alt="circle" />
          <span className="categorytext">{item}</span>
        </div>
      );
    });

    return result;
  };
  const { post_thumbnail } = data;
  const { URL } = post_thumbnail || {};
  const agotext = timeSince(date);
  const history = useHistory();

  const moveToPost = () => {
    history.push(`/post/${slug}`);
  };

  return (
    <div className="cardWrapper" onClick={moveToPost} key={slug}>
      <div className="categorySection">{category()}</div>

      <div className="postimage">
        <img
          src={URL}
          width="100%"
          height="100%"
          alt="postimage"
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
      </div>

      <div className="postTitle">
        <span className="postTitletext">{title}</span>
        <span className="postTitleduration">{agotext}</span>
      </div>
    </div>
  );
}
