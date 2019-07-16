"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogObjectBatch {
    static getAttributeTypeMap() {
        return CatalogObjectBatch.attributeTypeMap;
    }
}
CatalogObjectBatch.discriminator = undefined;
CatalogObjectBatch.attributeTypeMap = [
    {
        "name": "objects",
        "baseName": "objects",
        "type": "Array<CatalogObject>"
    }
];
exports.CatalogObjectBatch = CatalogObjectBatch;
//# sourceMappingURL=catalogObjectBatch.js.map