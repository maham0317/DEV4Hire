import React, { useEffect } from "react";

import ContentArea from "./ContentArea";
import Navbar from "../Header/Navbar";
import NavbarButtons from "../Header/NavbarButtons";

import PopUp from "./PopUp";
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
