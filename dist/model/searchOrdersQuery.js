"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchOrdersQuery {
    static getAttributeTypeMap() {
        return SearchOrdersQuery.attributeTypeMap;
    }
}
SearchOrdersQuery.discriminator = undefined;
SearchOrdersQuery.attributeTypeMap = [
    {
        "name": "filter",
        "baseName": "filter",
        "type": "SearchOrdersFilter"
    },
    {
        "name": "sort",
        "baseName": "sort",
        "type": "SearchOrdersSort"
    }
];
exports.SearchOrdersQuery = SearchOrdersQuery;
//# sourceMappingURL=searchOrdersQuery.js.map