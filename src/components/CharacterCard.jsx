import { Link } from "react-router-dom";
import "../scss/layout/CharacterCard.scss";

function CharacterCard({ characterData }) {
  //console.log(characterData);
  return (
    <div className="container-card">
      <li className="title-list">
        <Link className="link-card" to={`/character/${characterData.id}`}>
          <img
            className="img-card"
            src={characterData.photo}
            alt={characterData.name}
          />
          <h4 className="name-card">{characterData.name}</h4>
          <p className="name-specie">{characterData.specie}</p>
        </Link>
      </li>
    </div>
  );
}

export default CharacterCard;
