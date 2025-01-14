import { useSelector } from "react-redux";
import CommonTemplate from "../../common/CommonTemplate";
import Hero from "../../components/organisms/hero/Hero";

const HomePage = () => {
  const hero = useSelector((state) => state.heroReducer.heroProps);

  return (
    <CommonTemplate>
      <Hero {...hero} />
    </CommonTemplate>
  );
};

export default HomePage;
