import './assets/main.css'

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
app.use(createPinia());
app.use(router)
app.mount("#app");
