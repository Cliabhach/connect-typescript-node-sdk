"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Page {
    static getAttributeTypeMap() {
        return V1Page.attributeTypeMap;
    }
}
V1Page.discriminator = undefined;
V1Page.attributeTypeMap = [
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
        "name": "pageIndex",
        "baseName": "page_index",
        "type": "number"
    },
    {
        "name": "cells",
        "baseName": "cells",
        "type": "Array<V1PageCell>"
    }
];
exports.V1Page = V1Page;
//# sourceMappingURL=v1Page.js.map