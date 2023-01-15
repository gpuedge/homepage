import ANNIE from "~/assets/1647559287559.jpeg";
import IVAN from "~/assets/1652316097723.jpeg";
import HENRY from "~/assets/IMG_1906.png";
import LinkedIn from "~/assets/linkedin.png";
import WeChat from "~/assets/wechat.png";

const Article = () => {
  return (
    <div className="article_section web-align">
      <div className="heading">Meet our Team</div>
      <div className="card-container team-card">
        <div className="card-wrapper">
          <img style={{ borderRadius: "10%" }} width={260} src={ANNIE} alt="" />
          <div>
            <p>Annie - Marketing</p>
            <span>Meet her in Krakow</span>
            <br />
            <a
              href="httdivs://www.linkedin.com/in/anna-polishchuk-b671401b7"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} width="25px" alt="" />
            </a>
          </div>
        </div>
        <div className="card-wrapper">
          <img style={{ borderRadius: "10%" }} width={260} src={IVAN} alt="" />
          <div>
            <p> Ivan - Tech</p>
            <span>Meet him in Toronto</span>
            <br />
            <a
              href="https://www.linkedin.com/in/ivan-svirid/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} width="25px" alt="" />
            </a>
          </div>
        </div>
        <div className="card-wrapper">
          <img style={{ borderRadius: "10%" }} width={260} src={HENRY} alt="" />
          <div>
            <p> Henry - Operations</p>
            <span> Meet him in Hefei</span>
            <br />
            <a
              href="weixin://dl/chat?henryduolaimifa"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WeChat} width="25px" alt="" />
            </a>
          </div>
        </div>
      </div>
      {/*<div className="view-article">
        <br/>
        <br/>
        <span>View all team</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="22"
          width="22"
          className="pos-rel vm44Arrow"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
        </svg>
      </div>*/}
    </div>
  );
};

export default Article;
