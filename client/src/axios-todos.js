import axios from "axios";


const instance = axios.create({
    baseURL: "https://todo-app.adaptable.app/todo"
})


export default instance;