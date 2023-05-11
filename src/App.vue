<template>
  <div id="app">
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>

import defaultLayout from './components/layouts/defaultLayout.vue';

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// initializeApp({
//   apiKey: 'AIzaSyDnUnMDWKzwZDwmsAW8GLRZWh-NnBCfOyE',
//   authDomain: 'notify-published-article.firebaseapp.com',
//   projectId: 'notify-published-article',
//   storageBucket: 'notify-published-article.appspot.com',
//   messagingSenderId: '512464396708',
//   appId: '1:512464396708:web:74459f89311217d57ee131',
//   measurementId: 'G-DZ4ECC1PK2',
// });

/** 2nd APP SDK */ /** Not working */
// initializeApp({
//   apiKey: "AIzaSyD6s0TfDb5W4By-8ZhtdWkbvtWRH6DEXks",
//   authDomain: "master-copy-b.firebaseapp.com",
//   projectId: "master-copy-b",
//   storageBucket: "master-copy-b.appspot.com",
//   messagingSenderId: "950575523044",
//   appId: "1:950z575523044:web:39d3908e000a50bd3bb8f1",
//   measurementId: "G-6B6CPJCGV8"
// });

initializeApp({
    apiKey: "AIzaSyBALLqluGb8CIADGWcb6fEeMbU716El4ms",
    authDomain: "master-copy-b-3f20b.firebaseapp.com",
    projectId: "master-copy-b-3f20b",
    storageBucket: "master-copy-b-3f20b.appspot.com",
    messagingSenderId: "1097000045314",
    appId: "1:1097000045314:web:11a4c1afc03c488455901b",
    measurementId: "G-75CF4CB4S1"
});

const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});
getToken(messaging, {
  // vapidKey:'BDMEgcQTlcenbOHnvcROey5Z01-j7xlp8K4VdkIECn1-K4LmnWVPKxv8CM73_cJmKziFvdYDDbskTS34DD_8RBE',

  /** 2nd App VAPID KEY */
  // vapidKey:'BEITip_8N2yJtZ0V_VkWAx32aSGf9o-9TT_UiXAJoSMPzTOcOTUzVvgeIoiXSfdgKJKb045SK8gTp9YDpKdfV7k', /** Not working */

  /** 3rd App */
  vapidKey: 'BCYJDhVGh-GUfOuRA6LPSSBBJsK1g4fqk9W5oFB1fVmYklkZml61CvCX_VzpAGAYFuVFrAyUe9Lbf0TTq1yKlVQ',
})
  .then((currentToken) => {
    if (currentToken) {
      console.log('Token is: ' + currentToken);
    } else {
      console.log(
        'No registration token available. Request permission to generate one.'
      );
    }
  })
  .catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });

export default {
  name: 'App',
  computed: {
    layout() {
        return "defaultLayout"
    }
  },
  components: {
    defaultLayout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
