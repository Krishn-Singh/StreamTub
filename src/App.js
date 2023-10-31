import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
        {
          path:'/',
          element:<MainContainer />
        },
        {
          path:'watch',
          element:<WatchVideo />
        }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
