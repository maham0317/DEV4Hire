import Navbar from "../../components/Header/Navbar";
import NavbarButtons from "../../components/Header/NavbarButtons";
import PopUp from "../../components/Home/PopUp";
import { getAllAwards } from "../../store/award/award";
import { useAppDispatch } from "../../hooks/appDispatch";
import ContentArea from "../../components/Home/ContentArea";

const Home = () => {
  // const { awardData } = useAppSelector(awardSelector);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(getAllAwards()).then((result) => {
      console.log(result.payload);
    });
  };

  return (
    <div>
      <Navbar />
      <NavbarButtons context="home" />
      <button
        style={{ background: "black", color: "white" }}
        onClick={handleClick}
      >
        Get All Awards
      </button>

      <ContentArea />
      <PopUp />
    </div>
  );
};

export default Home;
