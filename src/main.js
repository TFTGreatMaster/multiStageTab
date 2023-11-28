import Antd, { message } from "ant-design-vue";
import { createApp } from "vue";

// import "ant-design-vue/dist/ant.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$message = message;

app.use(router);
app.use(Antd);

app.mount("#app");
