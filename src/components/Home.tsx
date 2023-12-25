import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    const result = await axios.get("http://localhost:8080/restaurants");
    setRestaurants(result.data);
  };

  const deleteRestaurant = async (id) => {
    await axios.delete(`http://localhost:8080/restaurants/restaurant/${id}`);
    loadRestaurants();
  };

  const selectRandomRestaurant = async () => {
    const result = await axios.get(
      `http://localhost:8080/restaurants/restaurant`
    );
    setRandomRestaurant(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <tbody>
            <tr>
              <td>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => selectRandomRestaurant()}
                >
                  Select a random restaurant
                </button>
              </td>
              <td>
                <h1>{randomRestaurant.restaurantName}</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Restaurant Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{restaurant.restaurantName}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteRestaurant(restaurant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
