"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchOrdersCustomerFilter {
    static getAttributeTypeMap() {
        return SearchOrdersCustomerFilter.attributeTypeMap;
    }
}
SearchOrdersCustomerFilter.discriminator = undefined;
SearchOrdersCustomerFilter.attributeTypeMap = [
    {
        "name": "customerIds",
        "baseName": "customer_ids",
        "type": "Array<string>"
    }
];
exports.SearchOrdersCustomerFilter = SearchOrdersCustomerFilter;
//# sourceMappingURL=searchOrdersCustomerFilter.js.map