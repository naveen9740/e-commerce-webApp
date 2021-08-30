import React from "react";
import { useLocation } from "react-router-dom";

let PageNotFound = () => {
    let { pathname } = useLocation()
    return <div>
        <h2>Sorry ,PageNotFound {pathname}</h2>
    </div>
}
export default PageNotFound