"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListCustomersRequest {
    static getAttributeTypeMap() {
        return ListCustomersRequest.attributeTypeMap;
    }
}
ListCustomersRequest.discriminator = undefined;
ListCustomersRequest.attributeTypeMap = [
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
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
exports.ListCustomersRequest = ListCustomersRequest;
//# sourceMappingURL=listCustomersRequest.js.map