import "./Hero.css";

const Hero = ({ label }) => {
  return (
    <section className="hero-bg-img">
      <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <h1 className="text-white display-2">{label}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
