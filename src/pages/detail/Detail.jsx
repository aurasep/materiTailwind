import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailResto } from "../../store/action/detailRestoAction";

const Detail = () => {
  const product = useSelector((state) => state.detailResto.resto);
  const dispatchReducer = useDispatch();
  const { id } = useParams();

  const fetchData = async () => {
    try {
  // const [product, setProduct] = useState();
  // const ambilProduct = async () => {
    const response = await axios.get(
      `https://restaurant-api.dicoding.dev/detail/${id}`
    );
    dispatchReducer(detailResto(response.data.restaurant));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //   const data = await response.data;
  //   setProduct(data);
  // };


  useEffect(() => {
    fetchData();
  }, []);

  console.log(product)

  return (
    <center>
    <div className="min-h-screen bg-gradient-to-r dark:bg-black dark:text-white gap-2">
      <img
        src={`https://restaurant-api.dicoding.dev/images/small/${product?.restaurant?.pictureId}`}
        alt=""
      />
      <h1 className="text-2xl font-bold text-black dark:text-white mb-2">{product?.restaurant?.name}</h1>
      <h4 className="text-md text-gray-700 dark:text-gray-300">{product?.restaurant?.description}</h4>
    </div>
    </center>
  );
};

export default Detail;
