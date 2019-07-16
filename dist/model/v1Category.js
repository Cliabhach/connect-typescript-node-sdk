"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Category {
    static getAttributeTypeMap() {
        return V1Category.attributeTypeMap;
    }
}
V1Category.discriminator = undefined;
V1Category.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "v2Id",
        "baseName": "v2_id",
        "type": "string"
    }
];
exports.V1Category = V1Category;
//# sourceMappingURL=v1Category.js.map