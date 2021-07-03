import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPro from "element-pro-components";
import "element-pro-components/lib/styles/index.css";

createApp(App).use(store).use(router).use(ElementPro).mount("#app");
