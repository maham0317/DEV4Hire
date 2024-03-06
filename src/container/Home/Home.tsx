import React, { useEffect } from "react";

import ContentArea from "../../components/Home/ContentArea";
import Navbar from "../../components/Header/Navbar";
import NavbarButtons from "../../components/Header/NavbarButtons";

import PopUp from "../../components/Home/PopUp";
import { useDispatch } from "react-redux";
import { getAllAwards } from "../../store/award/award";
import { useAppSelector } from "../../hooks/appSelector";
import { awardSelector } from "../../store/award";
import { useAppDispatch } from "../../hooks/appDispatch";
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
