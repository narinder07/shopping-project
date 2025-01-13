const Logo = ({ shoppingLogo, alt }) => {
  return (
    <a href="/">
      <img
        style={{ height: "100px", width: "100px" }}
        src={shoppingLogo}
        alt={alt}
      />
    </a>
  );
};

export default Logo;
