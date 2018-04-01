import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router';
import { routes } from './routes';
import firebase from 'firebase'
import lodash from 'lodash'

Vue.use(VueRouter);
Vue.use(axios);
Vue.use(lodash);

axios.defaults.baseURL = 'https://projetogb-16c2d.firebaseio.com'

const router = new VueRouter({
  mode: 'history',
  routes
});

var config = {
  apiKey: 'AIzaSyAp7nJZbk7JH79hKCPurXSaBsXmjeJxITg',
  authDomain: 'projetogb-16c2d.firebaseapp.com',
  databaseURL: 'https://projetogb-16c2d.firebaseio.com',
  projectId: 'projetogb-16c2d',
  storageBucket: 'projetogb-16c2d.appspot.com',
  messagingSenderId: '400373730750'
};

firebase.initializeApp(config)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
