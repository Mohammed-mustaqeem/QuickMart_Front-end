import axios from "axios";

/// Product API
const api= axios.create({
    baseURL: "https://fakestoreapi.com"
})

export let getProductsData = ()=>{
    return api.get("products")
}

export let getProductById = (id)=>{
    return api.get(`products/${id}`)
}

/// Users API
const Main_Api = axios.create({
    baseURL:"http://localhost:5000"
})

export let Login_User = (loginInfo)=>{
    return Main_Api.post('user/login',loginInfo)
}

export let Signup_User = (signup)=>{
    return Main_Api.post('user/signup',signup)
}