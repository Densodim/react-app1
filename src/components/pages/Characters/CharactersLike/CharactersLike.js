import React from "react";
import style from "./CharactersLike.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { bioSelector, filterSelector } from "../../../../store/cardSlice";
import CharterCard from "../../../ChapterCard/CharterCard";
import { cardSelector, like } from "../../../../store/charterSlice";

const CharactersLike = () => {
  const card = useSelector(filterSelector);
  const chapterIdSelector = useSelector(cardSelector);
  const dispatch = useDispatch();

  console.log("card", card);

  const handleLikeFilter = () => {};

  const handleLikeCklick = (id) => {
    console.log("like function", id);
    dispatch(like(id));
  }

  return (
    <>
      <div className={style.filter}>
        Filter
        <div onClick={handleLikeFilter} className={style.filterLike}>
          Like active
        </div>
      </div>
      <div className={style.cardWrap}>
        {card.map((item) => (
          <div key={item.id}>
            <CharterCard
              id={item.id}
              name={item.name}
              src={item.thumbnail.path}
              humanName={item.humanName}
              description={item.description}
              onClickLike={handleLikeCklick}
              isLike={chapterIdSelector[item.id]}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CharactersLike;
