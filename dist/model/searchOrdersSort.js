"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchOrdersSort {
    static getAttributeTypeMap() {
        return SearchOrdersSort.attributeTypeMap;
    }
}
SearchOrdersSort.discriminator = undefined;
SearchOrdersSort.attributeTypeMap = [
    {
        "name": "sortField",
        "baseName": "sort_field",
        "type": "string"
    },
    {
        "name": "sortOrder",
        "baseName": "sort_order",
        "type": "string"
    }
];
exports.SearchOrdersSort = SearchOrdersSort;
//# sourceMappingURL=searchOrdersSort.js.map