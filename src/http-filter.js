import axios from "axios";
import router from "./router";

// this is the login url 
const loginUrlPrefix = "http://tonyxx.idf.cc:8090/ssorest/service/oauth/authorize?response_type=token&client_id=clientapp&state=Lk9hVVNydWVQRlA4WTZDfmtKU0Y4ODVNMUxFaGl1OHcxLUt3N2prVFk4R0RU&scope=openid&redirect_uri=";
// the base url of your backennd. 
const backendBaseUrl = "http://tonyxx.idf.cc:10095/testappapi/api";

axios.interceptors.response.use(function(response){
    return response;
},function(error){
    const errorLink = "/error?type=";
    let errorType = "2";
    if (error.message=='Network Error'){
        errorType = "1";
    } else if (error.response.status == 401){
        window.location.href=loginUrlPrefix+encodeURIComponent(window.location.href);
    } else {
        errorType = error.response.status;
    } 
    router.push(errorLink+errorType);
});

axios.interceptors.request.use(function(config){
    const jwt = localStorage.getItem("jwt");
    if (jwt){
        config.headers['Authorization'] = jwt;
    }
    return config;
});

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'text/plain';
axios.defaults.baseURL = backendBaseUrl;

export default axios;