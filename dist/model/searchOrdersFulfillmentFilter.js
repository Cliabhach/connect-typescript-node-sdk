"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchOrdersFulfillmentFilter {
    static getAttributeTypeMap() {
        return SearchOrdersFulfillmentFilter.attributeTypeMap;
    }
}
SearchOrdersFulfillmentFilter.discriminator = undefined;
SearchOrdersFulfillmentFilter.attributeTypeMap = [
    {
        "name": "fulfillmentTypes",
        "baseName": "fulfillment_types",
        "type": "Array<string>"
    },
    {
        "name": "fulfillmentStates",
        "baseName": "fulfillment_states",
        "type": "Array<string>"
    }
];
exports.SearchOrdersFulfillmentFilter = SearchOrdersFulfillmentFilter;
//# sourceMappingURL=searchOrdersFulfillmentFilter.js.map