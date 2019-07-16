"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterDomainRequest {
    static getAttributeTypeMap() {
        return RegisterDomainRequest.attributeTypeMap;
    }
}
RegisterDomainRequest.discriminator = undefined;
RegisterDomainRequest.attributeTypeMap = [
    {
        "name": "domainName",
        "baseName": "domain_name",
        "type": "string"
    }
];
exports.RegisterDomainRequest = RegisterDomainRequest;
//# sourceMappingURL=registerDomainRequest.js.map