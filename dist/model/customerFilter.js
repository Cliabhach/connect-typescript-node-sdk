"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerFilter {
    static getAttributeTypeMap() {
        return CustomerFilter.attributeTypeMap;
    }
}
CustomerFilter.discriminator = undefined;
CustomerFilter.attributeTypeMap = [
    {
        "name": "creationSource",
        "baseName": "creation_source",
        "type": "CustomerCreationSourceFilter"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "TimeRange"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "TimeRange"
    }
];
exports.CustomerFilter = CustomerFilter;
//# sourceMappingURL=customerFilter.js.map