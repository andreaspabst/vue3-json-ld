// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import JsonLdPlugin from './plugins/JsonLdPlugin.ts';

const app = createApp(App);
app.use(JsonLdPlugin)
app.mount('#app');