require("./bootstrap");

window.Vue = require("vue").default;
import Vue from "vue";
import VueRouter from "vue-router";
// import { routes } from "./routes";


// Vue.use(VueRouter);

Vue.component(
    "content-component",
    require("./components/content.vue").default
);

// const router = new VueRouter({
//     mode: "history",
//     routes: routes
// });

const app = new Vue({
    el: "#app",
    // router: router
});
