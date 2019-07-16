"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SourceApplication {
    static getAttributeTypeMap() {
        return SourceApplication.attributeTypeMap;
    }
}
SourceApplication.discriminator = undefined;
SourceApplication.attributeTypeMap = [
    {
        "name": "product",
        "baseName": "product",
        "type": "string"
    },
    {
        "name": "applicationId",
        "baseName": "application_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SourceApplication = SourceApplication;
//# sourceMappingURL=sourceApplication.js.map