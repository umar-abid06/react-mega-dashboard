import React from "react";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

const Cabins = () => {
  useEffect(() => {
    const data = getCabins();
    console.log(data);
  }, []);

  return <div>Cabins</div>;
};

export default Cabins;
