"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importDefault(require("react"));
const Menu_module_css_1 = __importDefault(require("./Menu.module.css"));
const react_router_dom_1 = require("react-router-dom");
const Menu = ({ queues }) => (react_1.default.createElement("aside", { className: Menu_module_css_1.default.aside },
    react_1.default.createElement("div", null, "QUEUES"),
    react_1.default.createElement("nav", null, !!queues && (react_1.default.createElement("ul", { className: Menu_module_css_1.default.menu }, queues.map((queue, i) => (react_1.default.createElement("li", { key: i },
        react_1.default.createElement(react_router_dom_1.NavLink, { to: `/queue/${queue.name}`, activeClassName: Menu_module_css_1.default.active, title: queue.name },
            react_1.default.createElement("div", null, queue.name),
            react_1.default.createElement("div", { className: Menu_module_css_1.default.jobCounts },
                !!queue.counts.active && (react_1.default.createElement("span", { className: Menu_module_css_1.default.jobCountActive, title: "Active Jobs" }, queue.counts.active)),
                !!queue.counts.waiting && (react_1.default.createElement("span", { className: Menu_module_css_1.default.jobCountWaiting, title: "Waiting Jobs" }, queue.counts.waiting)),
                !!queue.counts.completed && (react_1.default.createElement("span", { className: Menu_module_css_1.default.jobCountCompleted, title: "Completed Jobs" }, queue.counts.completed)),
                !!queue.counts.failed && (react_1.default.createElement("span", { className: Menu_module_css_1.default.jobCountFailed, title: "Failed Jobs" }, queue.counts.failed)),
                !!queue.counts.delayed && (react_1.default.createElement("span", { className: Menu_module_css_1.default.jobCountDelayed, title: "Delayed Jobs" }, queue.counts.delayed)),
                !!queue.counts.paused && (react_1.default.createElement("span", { className: Menu_module_css_1.default.jobCountPaused, title: "Paused Jobs" }, queue.counts.paused)))))))))),
    react_1.default.createElement("div", { className: Menu_module_css_1.default.appVersion }, process.env.APP_VERSION)));
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map