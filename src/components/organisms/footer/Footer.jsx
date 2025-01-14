import "./Footer.css";

const Footer = ({ shoppingLogo, alt, href, copyRight }) => {
  return (
    <footer>
      <div className="col-lg-12 text-center footer-bg">
        <a href={href}>
          <img
            style={{ height: "100px", width: "100px", objectFit: "cover" }}
            src={shoppingLogo}
            alt={alt}
          />
        </a>
        <p>{copyRight}</p>
      </div>
    </footer>
  );
};

export default Footer;
