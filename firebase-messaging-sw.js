importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCzi1uEzYiFl6wvFkeB54FD68ZMIwvmMkU",
  authDomain: "fenda-app.firebaseapp.com",
  projectId: "fenda-app",
  storageBucket: "fenda-app.firebasestorage.app",
  messagingSenderId: "769298437437",
  appId: "1:769298437437:web:e929fc8315654a5cefe154"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || "FENDA";
  const options = {
    body: payload.notification?.body || "Novo aviso da banda.",
    icon: "/logo-fenda.png",
    badge: "/logo-fenda.png"
  };

  self.registration.showNotification(title, options);
});
