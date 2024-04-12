import React, { Component, useContext, useEffect, useState } from "react";

import style from "./App.module.scss";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text";
import CharterCard from "./components/ChapterCard/CharterCard";
import Biography from "./components/pages/Biography/Biography";
import Layout from "./components/Layout/Layout";
import Root from "./router/root";
import { useLocation } from "react-router-dom";
import Counter from "./components/useState";
import CounterReducer from "./components/useReducer";
import InitRef, { ShowName } from "./components/useRef";
import { AuthContext } from "./contex/authContex";

import {useSelector} from 'react-redux';
import { counterValueSelector } from "./store/counterSlice";

import { useDispatch } from 'react-redux';
import { cardSelector, like } from "./store/charterSlice";
import { bioSelector } from "./store/cardSlice";



// const CHARACTER = [
//   {
//     id: 1011334,
//     name: "Spider-Man",
//     description:
//       "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
//     thumbnail: {
//       path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b",
//     },
//     humanName: "Peter Parker",
//     isLike: false,
//   },
//   {
//     id: 1021331,
//     name: "Doctor Strange",
//     description:
//       "As Earth’s Sorcerer Supreme, Doctor Strange wields arcane spells and mystical artifacts to defend the planet against malevolent threats.",
//     thumbnail: {
//       path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fdoctor-strange.png?alt=media&token=299d8900-328f-4b0d-9116-aa9e0308a4b6",
//     },
//     humanName: "Stephen Strange",
//     isLike: false,
//   },
//   {
//     id: 1167381,
//     name: "Captain America",
//     description:
//       "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
//     thumbnail: {
//       path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-america.png?alt=media&token=80c42b19-614d-46fa-9c83-8ab4ff218495",
//     },
//     humanName: "Steve Rogers",
//     isLike: false,
//   },
//   {
//     id: 1127131,
//     name: "Iron Man",
//     description:
//       "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
//     thumbnail: {
//       path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Firon-man.png?alt=media&token=e9a4443f-0dbc-4f49-aef9-7f8e7b261fab",
//     },
//     humanName: "Tony Stark",
//     isLike: false,
//   },
//   {
//     id: 1113431,
//     name: "Hulk",
//     description:
//       "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
//     thumbnail: {
//       path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fhulk.png?alt=media&token=5ae03f4c-e513-4b3c-bae2-c82e6d6add8a",
//     },
//     humanName: "Bruce Banner",
//     isLike: false,
//   },
//   {
//     id: 1010536,
//     name: "Capitan Marvel",
//     description:
//       "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
//     thumbnail: {
//       path: "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-marvel.png?alt=media&token=fb83366e-4902-4541-a732-2efbb55147e5",
//     },
//     humanName: "Carol Danvers",
//     isLike: false,
//   },
// ];
function App() {
  // const [chapter, setChapter] = useState(CHARACTER); //setChapter from cardSlice reducer
  const [chapterID, setChapterID] = useState(null);  //setChapterID from cardSlice reducer

  const counterValue = useSelector(counterValueSelector);//counterValueSelector from counterSlice reducer

  const chapterIdSelector = useSelector(cardSelector); //cardSelector from charterSlice reducer

  // console.log('chapterIdSelector', chapterIdSelector);

  const dispatch = useDispatch(); // dispatch increment and decrement action from counterSlice reducer

  const {CHARACTER} = useSelector(bioSelector); //bioSelector from cardSlice reducer

  // console.log('CHARACTER', CHARACTER);

  const contex = useContext(AuthContext);

  // console.log('contex', contex);
  
  useEffect(() => {
    if(location.hash){
      const el = document.getElementById(location.hash.slice(1)); // Get the element with id
      window.addEventListener('load', () => {    // When the page is loaded
        el.scrollIntoView({
          block: 'center',  // Start scrolling from the top
           behavior: 'smooth' }); // Scroll to the element smoothly
      }, { once: true }); // Run only once
      
    }else{
      window.scrollTo(0, 0); 
    }
  }, [location.pathname, location.hash]); 
  // console.log('chapter', chapter);
  function handleLikeCklick(id) {
    // console.log('like function', id);

    dispatch(like(id)); // Like action from counterSlice reducer 

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
  }

  const handleReadBioClick = (id) => {
    setChapterID(id);
  };

  return (
    <>
      <Root />
      <Slider />
      {/* <Counter /> 
      <CounterReducer />
      <InitRef />
      <ShowName /> */}
      {chapterID !== null ? (
        <Biography id={chapterID} onBackClick={() => setChapterID(null)} />
      ) : (
        <>
          <section>
            <div className={style.cardTitle}>
              <Text level={1} backline>
                <span>Заголовок, но только сверху </span>
              </Text>
              <Text
                level={1}
                // element={div}
                className={style.App}
                strong={true}
                italic={true}
                disabled={true}
              >
                <span>Заголовок, но только снизу value:{counterValue}</span>
              </Text>
            </div>

            <div className={style.cardWrap}>
              {CHARACTER.map((item) => (
                <div key={item.id}>
                  <CharterCard
                    id={item.id}
                    name={item.name}
                    src={item.thumbnail.path}
                    humanName={item.humanName}
                    description={item.description}
                    onClickLike={handleLikeCklick}
                    onReadBio={handleReadBioClick}
                    isLike={chapterIdSelector[item.id]}
                  />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}

// class App extends Component {
//   render() {
//     // const [chapter, setChapter] = useState(false);
//     // console.log('chapter', chapter);
//     const handleLikeCklick = (id)=>{
//       console.log('like function', id);
//     }
//     return (
//       <>
//         <Header />
//         <Slider />
//         <div className={style.cardTitle}>
//           <Text level={1} backline>
//             <span>Заголовок, но только сверху</span>
//           </Text>
//           <Text
//             level={1}
//             // element={div}
//             className={style.App}
//             strong={true}
//             italic={true}
//             disabled={true}
//           >
//             <span>Заголовок, но только снизу</span>
//           </Text>
//         </div>
//         <div className={style.cardWrap}>
//           {CHARACTER.map((item) => (
//             <div key={item.id}>
//             <CharterCard
//             id={item.id}
//             name={item.name}
//             src={item.thumbnail.path}
//             humanName={item.humanName}
//             description={item.description}
//             onClickLike={handleLikeCklick}

//             />
//           </div>
//           ))}
//         </div>
//         <Footer />
//       </>
//     );
//   }
// }

export default App;
