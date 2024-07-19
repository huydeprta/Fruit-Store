import { Routes, Route } from "react-router-dom";
import "./App.css";
import '../index.css'
import publicRouterUser from "./routers/routerUser";
import publicRouterAdmin from "./routers/routerAdmin";
const App = () => {

  return (
    <>
      <div className="App">
        <Routes>
          {publicRouterUser.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
          ))}
        </Routes>
        <Routes>
          {publicRouterAdmin.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
