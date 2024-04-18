import style from "./Main.module.scss";
import Text from "../../Text";
import CharterCard from "../../ChapterCard/CharterCard";
import { useEffect, useState } from "react";
import Biography from "../Biography/Biography";
import useFetch from "../../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { cardDataSelector, cardErrorSelector, cardIsLoadingSelector, cardSelector, fetchCharacterThunk, fetchUser } from "../../../store/charterSlice";

const Main = () => {
    
    const [chapterID, setChapterID] = useState(null); //setChapterID from cardSlice reducer

    const data = useSelector(cardDataSelector); //data from cardSlice reducer
    const isLoading = useSelector(cardIsLoadingSelector); //isLoading from cardSlice reducer
    const error = useSelector(cardErrorSelector); //error from cardSlice reducer

    const characterIdSelector = useSelector(cardSelector);
    const dispatch = useDispatch(); //dispatch from cardSlice reducer

    useEffect(() => {
        // dispatch(fetchCharacterThunk()); //fetchCharacterThunk from cardSlice reducer
        dispatch(fetchUser());  //fetchUser from cardSlice reducer
    }, []);

    // const [data, isLoading, error] = useFetch('http://localhost:4000/characters'); //useFetch from hooks



    const handleLikeCklick = (id) => {
    };
    const handleReadBioClick = (id) => {
        setChapterID(id);
    };

    return (
        <>
            <Text level={2}> Запросы к БД + Redax</Text>
            {chapterID !== null ? (
                <Biography id={chapterID} onBackClick={() => setChapterID(null)} />
            ) : (
                <>
                    <section>

                        <div className={style.cardWrap}>
                            {
                                isLoading && <Text level={3}>Loading...</Text> //проверка на загрузку
                            }
                            {
                                error && <Text level={3}>{error}</Text> //проверка на ошибку
                            }
                            {data !== null && ( //проверка на наличие данных
                                data.map((item) => (
                                    <div key={item.id}>
                                        <CharterCard
                                            id={item.id}
                                            name={item.name}
                                            src={item.path}
                                            humanName={item.humanName}
                                            description={item.description}
                                            onClickLike={handleLikeCklick}
                                            onReadBio={handleReadBioClick}
                                            isLike={item.id} 
                                            />
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default Main;
