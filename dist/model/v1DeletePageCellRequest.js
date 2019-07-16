"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1DeletePageCellRequest {
    static getAttributeTypeMap() {
        return V1DeletePageCellRequest.attributeTypeMap;
    }
}
V1DeletePageCellRequest.discriminator = undefined;
V1DeletePageCellRequest.attributeTypeMap = [
    {
        "name": "row",
        "baseName": "row",
        "type": "string"
    },
    {
        "name": "column",
        "baseName": "column",
        "type": "string"
    }
];
exports.V1DeletePageCellRequest = V1DeletePageCellRequest;
//# sourceMappingURL=v1DeletePageCellRequest.js.map