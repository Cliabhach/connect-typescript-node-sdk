"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListTimecardEventsResponse {
    static getAttributeTypeMap() {
        return V1ListTimecardEventsResponse.attributeTypeMap;
    }
}
V1ListTimecardEventsResponse.discriminator = undefined;
V1ListTimecardEventsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1TimecardEvent>"
    }
];
exports.V1ListTimecardEventsResponse = V1ListTimecardEventsResponse;
//# sourceMappingURL=v1ListTimecardEventsResponse.js.map