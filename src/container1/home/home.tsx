import Navbar from "../../components1/header/navbar";
import NavbarButtons from "../../components1/header/navbar-buttons";
import PopUp from "../../components1/home/pop-up";
import { getAllAwards } from "../../store1/award/award";
import { useAppDispatch } from "../../hooks/appDispatch";
import ContentArea from "../../components1/home/content-area";

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
