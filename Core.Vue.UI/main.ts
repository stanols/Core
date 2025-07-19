import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faThList, faTasks, faComment } from '@fortawesome/free-solid-svg-icons';
import App from './app/App.vue';
import router from './app/router/router';

library.add(faThList, faTasks, faComment);

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
