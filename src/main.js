import { createApp } from 'vue'
import App from './App.vue'
// import { createRouter, createWebHistory } from 'vue-router'

// import { createRouter } from './router/router.js'

import { initializeApp } from 'firebase/app';

// initializeApp({
//     apiKey: 'AIzaSyDnUnMDWKzwZDwmsAW8GLRZWh-NnBCfOyE',
//     authDomain: 'notify-published-article.firebaseapp.com',
//     projectId: 'notify-published-article',
//     storageBucket: 'notify-published-article.appspot.com',
//     messagingSenderId: '512464396708',
//     appId: '1:512464396708:web:74459f89311217d57ee131',
//     measurementId: 'G-DZ4ECC1PK2',
// });


/** 2nd App SDK */

// initializeApp({
//     apiKey: "AIzaSyD6s0TfDb5W4By-8ZhtdWkbvtWRH6DEXks",
//     authDomain: "master-copy-b.firebaseapp.com",
//     projectId: "master-copy-b",
//     storageBucket: "master-copy-b.appspot.com",
//     messagingSenderId: "950575523044",
//     appId: "1:950575523044:web:39d3908e000a50bd3bb8f1",
//     measurementId: "G-6B6CPJCGV8"
// });

/** 3rd App */

initializeApp({
    apiKey: "AIzaSyBALLqluGb8CIADGWcb6fEeMbU716El4ms",
    authDomain: "master-copy-b-3f20b.firebaseapp.com",
    projectId: "master-copy-b-3f20b",
    storageBucket: "master-copy-b-3f20b.appspot.com",
    messagingSenderId: "1097000045314",
    appId: "1:1097000045314:web:11a4c1afc03c488455901b",
    measurementId: "G-75CF4CB4S1"
});


// const router = createRouter({
//     history: createWebHistory(),
//     /** Football LiveCentre */
//     routes: [
//         {
//             path: '/live/football/matches/:type/:date',
//             name: 'football_listing',
//             component: () =>
//             import(
//                 /* webpackChunkName: 'fb-matches' */
//                 /* webpackMode: "lazy" */

//                 '@/components/Football/Livecenter/match-listing'
//             ),
//         },
//     ]
// });
createApp(App).mount('#app')
