import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import routes from "./routes";

export default createRouter({
    routes,
    history: createWebHistory()
})
