import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AppTest from "./AppTest";
import "./index.css";
import Biography from "./components/pages/Biography/Biography";
import Layout from "./components/Layout/Layout";

import ErrorPage from "./router/error-page";
import Contact from "./router/contact";
import Header from "./components/Header";
import Contacts from "./components/pages/Contacts/Contacts";
import About from "./components/pages/About/About";
import Characters from "./components/pages/Characters/Characters";
import Login from "./components/LoginForm/Login";
import { AuthProvider, RequireAuth } from "./contex/authContex";

import { store } from "./store";
import { Provider } from "react-redux";
import CharactersLike from "./components/pages/Characters/CharactersLike/CharactersLike";

// const router = createBrowserRouter(
//   createRoutesFromElements(

//       <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
//         <Route path="/" element={<App />} />
//         <Route path="bios/:id" element={<Biography/>}/>
//         <Route path="contacts/:contactId" element={<Contact />} />
//       </Route>

//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <RequireAuth>
            <App />
          </RequireAuth>
        ),
      },
      { path: "bios/:id", element: <Biography /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      { path: "contacts", element: <Contacts /> },
      { path: "about", element: <About /> },
      {
        path: "characters/",
        element: <Characters />,
      },
      { path: "characters/:id", element: <Biography /> },
      { path: "like", element: <CharactersLike /> }
    ],
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
);
