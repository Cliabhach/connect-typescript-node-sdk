"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListLocationsResponse {
    static getAttributeTypeMap() {
        return ListLocationsResponse.attributeTypeMap;
    }
}
ListLocationsResponse.discriminator = undefined;
ListLocationsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "locations",
        "baseName": "locations",
        "type": "Array<Location>"
    }
];
exports.ListLocationsResponse = ListLocationsResponse;
//# sourceMappingURL=listLocationsResponse.js.map