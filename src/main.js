import { createApp } from "vue";
import { createPinia } from "pinia";
import App from './App.vue';
import router from "./router";


// sweet alert
import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  window.Toast = Toast; 

// sweet alert

const app = createApp(App);
<<<<<<< HEAD
app.use(createPinia()); // configurando pinia
app.mount('#app');
=======
app.use(createPinia());
app.use(router)
app.mount("#app");
>>>>>>> ac1ae06a2a4b4b32c39f1e928654a66f8ad62f6e
