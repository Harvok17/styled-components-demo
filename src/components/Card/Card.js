import { useState } from "react";
import { Wrapper, StatusWrapper, ButtonsWrapper, Image } from "./Card.styles";
import Button from "../Button/Button";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";
// import "./Card.css";

const Card = ({ mode }) => {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const addLikes = () => setLikes(likes + 1);
  const addShares = () => setShares(shares + 1);
  const renderLikes = () => {
    if (!likes) return <span></span>;
    return likes === 1 ? (
      <span>{`${likes} Like`}</span>
    ) : (
      <span>{`${likes} Likes`}</span>
    );
  };
  const renderShares = () => {
    if (!shares) return <span></span>;
    return shares === 1 ? (
      <span>{`${shares} Share`}</span>
    ) : (
      <span>{`${shares} Shares`}</span>
    );
  };
  return (
    <Wrapper>
      <Image mode={mode} />
      <StatusWrapper>
        {renderLikes()}
        {renderShares()}
      </StatusWrapper>
      <ButtonsWrapper>
        <Button text="Like" icon={faThumbsUp} onClick={addLikes} />
        <Button text="Share" icon={faShare} onClick={addShares} />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Card;
