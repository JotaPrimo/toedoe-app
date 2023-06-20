import LoginPage from "../components/pages/LoginPage.vue";
import TasksPage from "../components/pages/TasksPage.vue";
import RegisterPage from "../components/pages/RegisterPage.vue";

const routes = [
    {
        path: '/tasks',
        name: 'tasks',
        component: TasksPage,
    },

    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },

    {
        path: '/register',
        name: 'register',
        component: RegisterPage,
    },

]

export default routes