"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerGroupInfo {
    static getAttributeTypeMap() {
        return CustomerGroupInfo.attributeTypeMap;
    }
}
CustomerGroupInfo.discriminator = undefined;
CustomerGroupInfo.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.CustomerGroupInfo = CustomerGroupInfo;
//# sourceMappingURL=customerGroupInfo.js.map