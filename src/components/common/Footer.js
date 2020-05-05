import React from "react";
import "../../assets/css/common/footer.scss";
import githubIcon from "../../assets/img/github.png";
import facebookIcon from "../../assets/img/facebook.png";

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
          {this.state.icons.map((icon) => (
            <a href={icon.url}>
              <img className="footer-icon" src={icon.imgPath} />
            </a>
          ))}
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2020 CAU-LION 8th Admin</p>
        </div>
      </div>
    );
  }
}

export default Footer;
