"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListTimecardsResponse {
    static getAttributeTypeMap() {
        return V1ListTimecardsResponse.attributeTypeMap;
    }
}
V1ListTimecardsResponse.discriminator = undefined;
V1ListTimecardsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Timecard>"
    }
];
exports.V1ListTimecardsResponse = V1ListTimecardsResponse;
//# sourceMappingURL=v1ListTimecardsResponse.js.map