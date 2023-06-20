import LoginPage from "../components/pages/LoginPage.vue";
import TasksPage from "../components/pages/TasksPage.vue";
import RegisterPage from "../components/pages/RegisterPage.vue";
import SummaryPage from "../components/pages/SummaryPage.vue";

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

    {
        path: '/summary',
        name: 'summary',
        component: SummaryPage,
    },

]

export default routes