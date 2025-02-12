import React, { Component, useState } from "react";
import style from './Characters.module.scss';
import Text from '../../Text';
import CharterCard from "../../ChapterCard/CharterCard";

import {useSelector, useDispatch} from 'react-redux'; //useSelector and useDispatch from react-redux
import { cardSelector, like } from "../../../store/charterSlice";

const CHARACTER = [
    {
      id: 1011334,
      name: "Spider-Man",
      description:
        "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
      thumbnail: {
        path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b",
      },
      humanName: "Peter Parker",
      isLike: false,
    },
    {
      id: 1021331,
      name: "Doctor Strange",
      description:
        "As Earth’s Sorcerer Supreme, Doctor Strange wields arcane spells and mystical artifacts to defend the planet against malevolent threats.",
      thumbnail: {
        path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fdoctor-strange.png?alt=media&token=299d8900-328f-4b0d-9116-aa9e0308a4b6",
      },
      humanName: "Stephen Strange",
      isLike: false,
    },
    {
      id: 1167381,
      name: "Captain America",
      description:
        "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
      thumbnail: {
        path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-america.png?alt=media&token=80c42b19-614d-46fa-9c83-8ab4ff218495",
      },
      humanName: "Steve Rogers",
      isLike: false,
    },
    {
      id: 1127131,
      name: "Iron Man",
      description:
        "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
      thumbnail: {
        path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Firon-man.png?alt=media&token=e9a4443f-0dbc-4f49-aef9-7f8e7b261fab",
      },
      humanName: "Tony Stark",
      isLike: false,
    },
    {
      id: 1113431,
      name: "Hulk",
      description:
        "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
      thumbnail: {
        path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fhulk.png?alt=media&token=5ae03f4c-e513-4b3c-bae2-c82e6d6add8a",
      },
      humanName: "Bruce Banner",
      isLike: false,
    },
    {
      id: 1010536,
      name: "Capitan Marvel",
      description:
        "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
      thumbnail: {
        path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-marvel.png?alt=media&token=fb83366e-4902-4541-a732-2efbb55147e5",
      },
      humanName: "Carol Danvers",
      isLike: false,
    },
  ];

const Characters = () => {
    const [chapter, setChapter] = useState(CHARACTER);

    const chapterIdSelector = useSelector(cardSelector); // селектор получения карточек персонажей  
    const dispatch = useDispatch(); // диспатч получения карточек персонажей

    // console.log('chapter', chapter);
    const handleLikeCklick = (id) => {
      console.log('like function', id);

      dispatch(like(id)); // диспатч получения карточек персонажей
  
      // setChapter((prevState) => {
      //   const copyChapter = chapter.map((item) => {
      //     if (id === item.id) {
      //       return {
      //         ...item,
      //         isLike: !item.isLike,
      //       };
      //     }
      //     return item;
      //   });
  
      //   return copyChapter;
      // });
    };
  
   
    return (
        <>
            <div className={style.cardWrap}>
              {chapter.map((item) => (
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
}

export default Characters;