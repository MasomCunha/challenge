import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import {
    BrowserRouter,
} from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Routes() {

    const isLogged = useAppSelector((state) => state.auth.isLogged)

    return (
        <BrowserRouter>{
            isLogged ? <PrivateRoutes /> : <PublicRoutes />
        }
        </BrowserRouter>
    )

}