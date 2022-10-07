import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function routes() {

    const isAuth: boolean = false;

    return (
        isAuth ? <PrivateRoutes /> : <PublicRoutes />
    )

}