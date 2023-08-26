import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <p class="copyright__content">
        © 2023,{" "}
        <a href="/" title="">
          ali and abdullah
        </a>
        . All rights reserved.
      </p>
      <div className="icons">
        <a href="https://www.instagram.com/alli_zaghloul/" target="blank" title="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/ali.zaghloul.393/" target="blank"  title="Facebook">
          <FacebookIcon />
        </a>
        <a href="https://github.com/ali22905" target="blank" title="GitHub">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
