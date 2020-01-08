import axios from "axios";
import { push } from 'connected-react-router';
import {ErrorToast} from "./components/toasts"

let http = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

http.interceptors.request.use(
    function (config) {
        const token = localStorage.token ? localStorage.token : "";
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.common["X-Requested-With"] = "XMLHttpRequest";
        config.headers.post["Content-Type"] = "application/json";
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

http.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 400) {
            try {
                const errormsg = error.response.data;
                try {
                    errormsg.msg.errors.forEach(element => {
                        ErrorToast(element);
                    });
                } catch (e) {
                    if (errormsg.msg) {
                        ErrorToast(errormsg.msg);
                    } else {
                        ErrorToast("Page not found");
                    }
                }
            } catch (e) {
                ErrorToast("Request failed with an error code of 400");
            }
        } else if (error.response.status === 401) {
            try {
                if (error.response.data.status_code === "token_expired") {
                    localStorage.token = error.response.data.token;
                    error.config.headers.Authorization = `Bearer ${
                        error.response.data.token
                        }`;
                    return axios.request(error.config);
                } else if (
                    error.response.data.status_code === "password_reset" ||
                    error.response.data.status_code === "otp_not_verified"
                ) {
                    return Promise.reject(error);
                } else {
                    localStorage.clear();
                    push("/");
                    return;
                }
            } catch (e) {
                console.log(e.message);
            }
        }
        return Promise.reject(error);
    }
);

export default http;