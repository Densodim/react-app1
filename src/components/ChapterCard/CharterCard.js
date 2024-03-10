import { useState } from "react";
import style from "./CharterCard.module.scss";
import cn from "classnames";

import Text from "../Text";
import PropsType from "prop-types";

import { ReactComponent as Like } from "../../components/ChapterCard/assets/heart.svg";
import Biography from "../pages/Biography/Biography";
import Button from "../../components/Button/Button";

const CharterCard = ({
  id,
  name,
  src,
  humanName,
  description,
  onClickLike,
  isLike,
  onReadBio,
}) => {
  // console.log('isLike', isLike);
  const [like, setLike] = useState(false);
  const handleClick = () => {
    onClickLike && onClickLike(id);
  };
  const handleReadBio = () => {
    onReadBio && onReadBio(id);
  };

  return (
    <>
      <div className={style.root}>
        <img className={style.cardImage} src={src} alt={name} />
        <div className={style.cardDetails}>
          <Text level={2} className={style.cardName}>
            {name}
          </Text>
          <Text level={4} className={style.cardHumanName}>
            {humanName}
          </Text>
          <Text level={5} className={style.cardDescription}>
            {description}
          </Text>
        </div>
        <div className={style.cardMeta}>
          <div
            onClick={handleClick}
            className={cn(style.like, {
              [style.active]: isLike,
            })}
          >
            <Like />
          </div>
          <div className={style.readBio}>
            <a href="#" onClick={handleReadBio}>
              Read Bio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
CharterCard.defaultProps = {
  isLike: false,
};

CharterCard.propsType = {
  id: PropsType.number,
  name: PropsType.string,
  src: PropsType.string,
  humanName: PropsType.string,
  description: PropsType.string,
  isLike: PropsType.bool,
  onClickLike: PropsType.func,
  onReadBio: PropsType.func,
};

export default CharterCard;
