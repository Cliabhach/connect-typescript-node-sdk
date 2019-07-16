"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchOrdersDateTimeFilter {
    static getAttributeTypeMap() {
        return SearchOrdersDateTimeFilter.attributeTypeMap;
    }
}
SearchOrdersDateTimeFilter.discriminator = undefined;
SearchOrdersDateTimeFilter.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "TimeRange"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "TimeRange"
    },
    {
        "name": "closedAt",
        "baseName": "closed_at",
        "type": "TimeRange"
    }
];
exports.SearchOrdersDateTimeFilter = SearchOrdersDateTimeFilter;
//# sourceMappingURL=searchOrdersDateTimeFilter.js.map