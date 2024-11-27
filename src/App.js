import './App.css';
import ProgressBar from './progressbar/ProgressBar';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./Home/HomePage";
import GridLights from "./GridLights/GridLights";
import Timer from "./Timer/Timer";

function App() {
   const router = createBrowserRouter([
        { path: "/", element: <HomePage /> },
       {
       path: '/progressBar', element: <ProgressBar/>
       }, {
           path: '/GridBox', element: <GridLights/>
       }, {
           path: '/Timer', element: <Timer/>
       }
]);
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
