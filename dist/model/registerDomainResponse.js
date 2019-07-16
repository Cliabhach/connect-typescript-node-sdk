"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterDomainResponse {
    static getAttributeTypeMap() {
        return RegisterDomainResponse.attributeTypeMap;
    }
}
RegisterDomainResponse.discriminator = undefined;
RegisterDomainResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
exports.RegisterDomainResponse = RegisterDomainResponse;
//# sourceMappingURL=registerDomainResponse.js.map