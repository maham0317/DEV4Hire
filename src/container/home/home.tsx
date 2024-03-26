import NavbarButtons from "@/components/header/navbar-buttons";
import { getAllAwards } from "@/store/award/award";
import { useAppDispatch } from "@/hooks/appDispatch";
import ContentArea from "@/components/home/content-area";
import PopUp from "@/components/home/pop-up";

const Home = () => {
  // const { awardData } = useAppSelector(awardSelector);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(getAllAwards()).then((result) => {
      console.log(result.payload);
    });
  };

  return (
    <div className="w-full">
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
