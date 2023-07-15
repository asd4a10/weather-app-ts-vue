import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./configs/router";
import vuetify from "./configs/vuetify";

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount("#app");
