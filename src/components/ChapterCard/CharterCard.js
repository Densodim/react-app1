import { useState } from "react";
import style from "./CharterCard.module.scss";
import cn from "classnames";

import Text from "../Text";
import PropsType from "prop-types";


import { ReactComponent as Like } from "../../components/ChapterCard/assets/heart.svg";

const CharterCard = ({ id, name, src, humanName, description, onClickLike, isLike }) => {
  
  // console.log('isLike', isLike);
  const[like, setLike] = useState(false);
  const handleClick = () => {
    onClickLike(id);
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
            <a href="#">Читать биографию</a>
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
};

export default CharterCard;
