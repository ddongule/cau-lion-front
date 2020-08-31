import React from "react";
import "./footer.scss";
import githubIcon from "../../../assets/img/github.png";
import facebookIcon from "../../../assets/img/facebook.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {
          name: "GitHub",
          imgPath: githubIcon,
          url: "https://github.com/ddongule/cau-lion-front",
        },
        {
          name: "Facebook",
          imgPath: facebookIcon,
          url: "https://www.facebook.com/LikelionCAU",
        },
      ],
    };
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-icons">
          {this.state.icons.map((icon, i) => (
            <a href={icon.url} key={i}>
              <img className="footer-icon" src={icon.imgPath} alt="" />
            </a>
          ))}
        </div>
        <div className="inquire">
          <p>문의) bbeternal@likelion.org</p>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2020 CAU-LION 8th Admin</p>
        </div>
      </div>
    );
  }
}

export default Footer;
