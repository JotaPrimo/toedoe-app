import LoginPage from "../components/pages/LoginPage.vue";
import TasksPage from "../components/pages/TasksPage.vue";
import RegisterPage from "../components/pages/RegisterPage.vue";
import SummaryPage from "../components/pages/SummaryPage.vue";
import NotFoundErrorPage from "../components/pages/errors/NotFoundErrorPage.vue";

const routes = [
    {
        path: '/tasks',
        name: 'tasks',
        component: TasksPage,
        meta: {
            auth: true
        }
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
        meta: {
            auth: true
        }
    },

    {
        path: "/:notFound(.*)",
        name: 'error.404',
        component: NotFoundErrorPage,
    },

]

export default routes