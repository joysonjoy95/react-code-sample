import React from "react";
import { toast } from 'react-toastify';
import { Error } from "@material-ui/icons";
import "./errortoast.css";

const ErrorToast = (data) => {
    toast(<span><Error className="mr-3" />{data}</span>, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'bg-danger text-light p-3 toast-height'
    });
}

export default ErrorToast;