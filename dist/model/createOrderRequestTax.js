"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateOrderRequestTax {
    static getAttributeTypeMap() {
        return CreateOrderRequestTax.attributeTypeMap;
    }
}
CreateOrderRequestTax.discriminator = undefined;
CreateOrderRequestTax.attributeTypeMap = [
    {
        "name": "catalogObjectId",
        "baseName": "catalog_object_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "string"
    }
];
exports.CreateOrderRequestTax = CreateOrderRequestTax;
//# sourceMappingURL=createOrderRequestTax.js.map