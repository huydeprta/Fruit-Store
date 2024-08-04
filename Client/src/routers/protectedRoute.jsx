import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserProvider } from "../hooks/UserContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserProvider);
    if (!user) {
        return <div>Notfound</div>;
    }
    if (user?.admin === false) {
        return <Navigate to="/NotFound" />;
    }

    return children;
};

export default ProtectedRoute;
