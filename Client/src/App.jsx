import { Routes, Route } from "react-router-dom";
import "./App.css";
import '../index.css'
import publicRouterUser from "./routers/routerUser";
import publicRouterAdmin from "./routers/routerAdmin";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./routers/protectedRoute";
const App = () => {

  return (
    <>
      <div className="App">
        <ToastContainer />
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
                <ProtectedRoute>
                  <route.component />
                </ProtectedRoute>

              }
            />
          ))}
        </Routes>

      </div>
    </>
  );
}

export default App;
