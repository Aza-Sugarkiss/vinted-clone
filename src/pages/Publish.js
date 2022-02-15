import "./publish.css";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      if (title && price && picture) {
        const formData = new FormData();
        formData.append("picture", picture);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("condition", condition);
        formData.append("city", city);
        formData.append("price", price);

        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data._id) {
          navigate(`/offer/${response.data._id}`);
        }
        setData(response.data);
        setIsLoading(false);
      } else {
        setErrorMessage("Les champs Photo, Titre et Prix sont obligatoires");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return token ? (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div style={{ height: 45, width: 180, border: "1px solid black" }}>
            <label htmlFor="file">
              <span>+</span> <span>Ajouter une photo</span>
            </label>
          </div>
          <input
            style={{ display: "none" }}
            id="file"
            // multiple={true}
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
              setPreview(URL.createObjectURL(event.target.files[0]));
            }}
          />
        </div>
        {preview && <img src={preview} alt="" style={{ width: 200 }} />}
        <br />
        <div className="upload-01">
          <div>
            <p>Titre</p>
            <input
              type="text"
              placeholder="ex: Chemise Sésane verte "
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <p>Description</p>
            <textarea
              tname=""
              rows="10"
              placeholder="ex: Porté quelques fois, taille correctement"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>
        <br />
        <div className="upload-02">
          <div>
            <p>Marque</p>
            <input
              type="text"
              placeholder="ex: Zara "
              onChange={(event) => setBrand(event.target.value)}
            />
          </div>
          <div>
            <p>Taille</p>
            <input
              type="text"
              placeholder="ex: L / 40 / 12"
              onChange={(event) => setSize(event.target.value)}
            />
          </div>
          <div>
            <p>Couleur</p>
            <input
              type="text"
              placeholder="ex: Fushia"
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
          <div>
            <p>Etat</p>
            <input
              type="text"
              placeholder="ex: Neuf avec étiquette"
              onChange={(event) => setCondition(event.target.value)}
            />
          </div>
          <div>
            <p>Lieu</p>
            <input
              type="text"
              placeholder="ex: Paris"
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
        </div>
        <br />
        <div className="upload-03">
          <div>
            <p>Prix</p>
            <input
              type="number"
              placeholder="ex: 0,00€"
              onChange={(event) => setPrice(event.target.value)}
            />
            <div className="upload-checkbox">
              <input type="checkbox" />
              <span>Je suis intéressé(e) par les échanges</span>
            </div>
          </div>
        </div>
        <br />
        <input type="submit" />
        {errorMessage}
      </form>
      {isLoading ? (
        <div>Image en cours de chargement...</div>
      ) : (
        data && <img src={data.secure_url} alt="" />
      )}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
