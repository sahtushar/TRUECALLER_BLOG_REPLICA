import "../styles.css";
import Logo from "../images/truecaller.svg";

export default function Header() {
  return (
    <div>
      <div>
        <img src={Logo} width="140px" style={{ margin: "10px" }} />
      </div>
      <div className="backgroundImage">
        {/* <img src={Man} className="backgroundImagecss" /> */}
        <div className="headertext">The Truecaller Blog</div>
      </div>
    </div>
  );
}
