import LoginPage from "../components/pages/LoginPage.vue";
import TasksPage from "../components/pages/TasksPage.vue";
import RegisterPage from "../components/pages/RegisterPage.vue";
import SummaryPage from "../components/pages/SummaryPage.vue";
import NotFoundErrorPage from "../components/pages/errors/NotFoundErrorPage.vue";
import HomePage from "../components/pages/HomePage.vue";

const routes = [
    {
      path: "/",
      component: HomePage,
      name: "home",
    },
    {
      path: "/tasks",
      component: TasksPage,
      name: "tasks",
      meta: {
        auth: true,
      },
    },
    {
      path: "/summary",
      component: SummaryPage,
      name: "summary",
      meta: {
        auth: true,
      },
    },
    {
      path: "/login",
      component: LoginPage,
      name: "login",
      meta: {
        guest: true,
      },
    },
    {
      path: "/register",
      component: RegisterPage,
      name: "register",
      meta: {
        guest: true,
      },
    },
    {
      path: "/:notFound(.*)",
      name: "error.404",
      component: NotFoundErrorPage,
    },
  ];
  

export default routes