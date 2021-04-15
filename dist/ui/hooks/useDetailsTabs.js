"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDetailsTabs = void 0;
const react_1 = require("react");
const constants_1 = require("../components/constants");
const regularItems = ['Data', 'Options', 'Logs'];
function useDetailsTabs(currentStatus) {
    const [tabs, updateTabs] = react_1.useState([]);
    const [selectedTabIdx, setSelectedTabIdx] = react_1.useState(0);
    const selectedTab = tabs[selectedTabIdx];
    react_1.useEffect(() => {
        updateTabs(currentStatus === constants_1.STATUSES.failed
            ? ['Error', ...regularItems]
            : [...regularItems]);
    }, [currentStatus]);
    return {
        tabs: tabs.map((title, index) => ({
            title,
            isActive: title === selectedTab,
            selectTab: () => setSelectedTabIdx(index),
        })),
        selectedTab,
    };
}
exports.useDetailsTabs = useDetailsTabs;
//# sourceMappingURL=useDetailsTabs.js.map