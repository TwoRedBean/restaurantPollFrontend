import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddRestaurant = () => {
  let navigate = useNavigate();

  const [restaurant, setRestaurant] = useState({
    restaurantName: "",
  });

  const { restaurantName } = restaurant;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:8080/restaurants/restaurant",
      restaurant
    );
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Restaurant</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="restaurantName" className="form-label">
                Restaurant Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter restaurant name"
                name="restaurantName"
                value={restaurantName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/vote">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
