import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Routes() {

    const isLogged = useAppSelector((state) => state.auth.isLogged)

    return (
        isLogged ? <PrivateRoutes /> : <PublicRoutes />
    )

}