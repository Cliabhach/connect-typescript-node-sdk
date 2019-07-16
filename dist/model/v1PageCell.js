"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1PageCell {
    static getAttributeTypeMap() {
        return V1PageCell.attributeTypeMap;
    }
}
V1PageCell.discriminator = undefined;
V1PageCell.attributeTypeMap = [
    {
        "name": "pageId",
        "baseName": "page_id",
        "type": "string"
    },
    {
        "name": "row",
        "baseName": "row",
        "type": "number"
    },
    {
        "name": "column",
        "baseName": "column",
        "type": "number"
    },
    {
        "name": "objectType",
        "baseName": "object_type",
        "type": "string"
    },
    {
        "name": "objectId",
        "baseName": "object_id",
        "type": "string"
    },
    {
        "name": "placeholderType",
        "baseName": "placeholder_type",
        "type": "string"
    }
];
exports.V1PageCell = V1PageCell;
//# sourceMappingURL=v1PageCell.js.map