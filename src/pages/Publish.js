import "./publish.css";
import axios from "axios";
import { useState } from "react";

const Publish = () => {
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const data = new FormData();
      data.append("username", username);
      data.append("picture", picture);
      const response = await axios.post("http://localhost:3000/publish", data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          multiple={true}
          type="file"
          onChange={(event) => setPicture(event.target.files[0])}
        />
        <br />
        <input type="submit" />
      </form>
      {isLoading ? (
        <div>Image en cours de chargement...</div>
      ) : (
        data && <img src={data.secure_url} alt="" />
      )}
    </div>
  );
};

export default Publish;
