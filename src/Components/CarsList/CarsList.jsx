import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCars } from "../../services/operations";
import CarItem from "../CarItem/CarItem";

const CarsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return <CarItem />;
};

export default CarsList;
