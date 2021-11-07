import { useState } from "react";
import Button from "../Button/Button";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = ({ mode }) => {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const addLikes = () => setLikes(likes + 1);
  const addShares = () => setShares(shares + 1);
  const renderLikes = () => {
    if (!likes) return;
    return likes === 1 ? (
      <span>{`${likes} Like`}</span>
    ) : (
      <span>{`${likes} Likes`}</span>
    );
  };
  const renderShares = () => {
    if (!shares) return;
    return shares === 1 ? (
      <span>{`${shares} Share`}</span>
    ) : (
      <span>{`${shares} Shares`}</span>
    );
  };
  return (
    <div className="card">
      <div className="card__image" mode={mode} />
      <div className="card__status">
        {renderLikes()}
        {renderShares()}
      </div>
      <div className="card__buttons">
        <Button text="Like" icon={faThumbsUp} onClick={addLikes} />
        <Button text="Share" icon={faShare} onClick={addShares} />
      </div>
    </div>
  );
};

export default Card;
