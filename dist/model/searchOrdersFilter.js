"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchOrdersFilter {
    static getAttributeTypeMap() {
        return SearchOrdersFilter.attributeTypeMap;
    }
}
SearchOrdersFilter.discriminator = undefined;
SearchOrdersFilter.attributeTypeMap = [
    {
        "name": "stateFilter",
        "baseName": "state_filter",
        "type": "SearchOrdersStateFilter"
    },
    {
        "name": "dateTimeFilter",
        "baseName": "date_time_filter",
        "type": "SearchOrdersDateTimeFilter"
    },
    {
        "name": "fulfillmentFilter",
        "baseName": "fulfillment_filter",
        "type": "SearchOrdersFulfillmentFilter"
    },
    {
        "name": "sourceFilter",
        "baseName": "source_filter",
        "type": "SearchOrdersSourceFilter"
    },
    {
        "name": "customerFilter",
        "baseName": "customer_filter",
        "type": "SearchOrdersCustomerFilter"
    }
];
exports.SearchOrdersFilter = SearchOrdersFilter;
//# sourceMappingURL=searchOrdersFilter.js.map