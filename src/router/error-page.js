import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Text from "../components/Text";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header/>
        <div id="error-page">
          <Text level={3}>Tакой страницы нет. Oops! </Text>
            
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      
    </>
  );
}
