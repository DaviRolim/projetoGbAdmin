import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router';
import { routes } from './routes';
import firebase from 'firebase'


Vue.use(VueRouter);
Vue.use(axios);

axios.defaults.baseURL = 'https://projetogb-16c2d.firebaseio.com'

const router = new VueRouter({
  mode: 'history',
  routes
});

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
