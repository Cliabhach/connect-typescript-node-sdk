"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListEmployeesRequest {
    static getAttributeTypeMap() {
        return V1ListEmployeesRequest.attributeTypeMap;
    }
}
V1ListEmployeesRequest.discriminator = undefined;
V1ListEmployeesRequest.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "string"
    },
    {
        "name": "beginUpdatedAt",
        "baseName": "begin_updated_at",
        "type": "string"
    },
    {
        "name": "endUpdatedAt",
        "baseName": "end_updated_at",
        "type": "string"
    },
    {
        "name": "beginCreatedAt",
        "baseName": "begin_created_at",
        "type": "string"
    },
    {
        "name": "endCreatedAt",
        "baseName": "end_created_at",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "externalId",
        "baseName": "external_id",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "batchToken",
        "baseName": "batch_token",
        "type": "string"
    }
];
exports.V1ListEmployeesRequest = V1ListEmployeesRequest;
//# sourceMappingURL=v1ListEmployeesRequest.js.map