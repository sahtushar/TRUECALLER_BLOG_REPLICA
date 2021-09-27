import "../styles.css";
import Logo from "../images/truecaller.svg";
import { useEffect, useState } from "react";
import { getPost } from "../services/apipoints";
import { timeSince } from "../services/utils";
import Loader from "../images/loader.svg";

export default function Post({ match }) {
  const {
    params: { slug }
  } = match;

  console.log(slug);
  const [postdata, setpostdata] = useState({});
  const [authordata, setauthordata] = useState({});
  const [loading, setLoading] = useState(false);
  const getPostService = async () => {
    setLoading(true);
    const post = await getPost({ slug });
    setauthordata(post.author);
    setpostdata(post);
    setLoading(false);
  };

  useEffect(() => {
    getPostService();
  }, []);
  return (
    <>
      {!loading && (
        <div className="postsection">
          <div>
            <div>
              <img src={Logo} width="140px" style={{ margin: "10px" }} />
            </div>
            <div className="postImage">
              <img src={postdata?.featured_image} className="postImageCss" />
            </div>
          </div>
          <div className="postsectionWrapper">
            <div className="postsectiondetails">
              <div className="posttitle">
                <span style={{ fontSize: "34px", fontWeight: "bold" }}>
                  {postdata.title}
                </span>
              </div>
              <div className="authorsection">
                <div className="authorsectionimage">
                  <img
                    src={authordata.avatar_URL}
                    style={{ "border-radius": "50px" }}
                    alt="avatar"
                  />
                </div>
                <div className="authorsectioninfo">
                  <span>{authordata.name}</span>
                  <span style={{ fontSize: "12px", color: "grey" }}>
                    {timeSince(postdata?.date)}
                  </span>
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postdata?.content }}></div>
          </div>
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
