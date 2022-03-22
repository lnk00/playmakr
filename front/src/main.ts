import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router.plugin';
import './assets/styles/normalize.scss';
import './assets/styles/fonts.scss';
import './assets/styles/base.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
