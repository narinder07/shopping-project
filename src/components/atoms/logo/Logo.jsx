const Logo = ({ shoppingLogo, alt }) => {
  return (
    <a href="/">
      <img
        style={{ height: "90px", width: "90px" }}
        src={shoppingLogo}
        alt={alt}
      />
    </a>
  );
};

export default Logo;
