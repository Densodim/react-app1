import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const getFetch = async () => {
      try {
        const body = await fetch(url).then((res) => {
          //  console.log(res);
          if (!res.ok) {
            throw new Error(
              `Could not fetch ${url}, status: ${res.status}, text: ${res.statusText}`
            ); //проверка на ошибку
          }
          return res.json();
        }); //получаем данные с сервера промис
        // const body = await result.json(); //получаем данные в формате json
        setData(body); //записываем данные в стейт
      } catch (e) {
        // console.dir(e.message);
        setError(e.message); //записываем ошибку
      } finally {
        setLoading(false); //заканчиваем загрузку
      }
    };
    getFetch();
  }, []);

  return [data, isLoading, error]; //возвращаем данные;
};

export default useFetch;
