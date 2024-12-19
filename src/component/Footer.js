import Pagelink from "./Pagelink";
import Icon from "./Icon";
import { pageLinks, socialLinks } from "../data";
const Footer = () => {
  const whiteColor={
    color:"white",
    fontSize:"20px"
  }
  return (
    <footer className="footer section">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return <Pagelink  {...link} key={link.id} whiteColor={whiteColor} />;
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <Icon {...link} key={link.id} />;
        })}
      </ul>
      <p className="copyright">copyright © Backroads travel tours company<span>{new Date().getFullYear()}</span>. all rights reserved</p>
    </footer>
  );
};
export default Footer;
