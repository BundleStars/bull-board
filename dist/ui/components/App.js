"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const Header_1 = require("./Header/Header");
const useStore_1 = require("../hooks/useStore");
const Menu_1 = require("./Menu/Menu");
const QueuePage_1 = require("./QueuePage/QueuePage");
const RedisStats_1 = require("./RedisStats/RedisStats");
const App = ({ basePath, api }) => {
    var _a, _b, _c, _d, _e;
    const { state, actions, selectedStatuses } = useStore_1.useStore(api);
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: basePath },
        react_1.default.createElement(Header_1.Header, null, ((_a = state.data) === null || _a === void 0 ? void 0 : _a.stats) && react_1.default.createElement(RedisStats_1.RedisStats, { stats: (_b = state.data) === null || _b === void 0 ? void 0 : _b.stats })),
        react_1.default.createElement("main", null,
            react_1.default.createElement("div", null, state.loading ? ('Loading...') : (react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/queue/:name", render: ({ match: { params } }) => {
                        var _a;
                        const queue = (_a = state.data) === null || _a === void 0 ? void 0 : _a.queues.find((q) => q.name === params.name);
                        return (react_1.default.createElement(QueuePage_1.QueuePage, { queue: queue, actions: actions, selectedStatus: selectedStatuses }));
                    } }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" }, !!state.data &&
                    Array.isArray((_c = state.data) === null || _c === void 0 ? void 0 : _c.queues) &&
                    state.data.queues.length > 0 && (react_1.default.createElement(react_router_dom_1.Redirect, { to: `/queue/${(_d = state.data) === null || _d === void 0 ? void 0 : _d.queues[0].name}` }))))))),
        react_1.default.createElement(Menu_1.Menu, { queues: (_e = state.data) === null || _e === void 0 ? void 0 : _e.queues }),
        react_1.default.createElement(react_toastify_1.ToastContainer, null)));
};
exports.App = App;
//# sourceMappingURL=App.js.map