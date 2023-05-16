import './App.css';
import RootLayout from "./layouts/RootLayout";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Login from './concurso/Login';








const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

        <Route path='login' element={<Login />}/>



    </Route>
))

function App() {
  return (
          <RouterProvider router={router}></RouterProvider>
  );
}

export default App;