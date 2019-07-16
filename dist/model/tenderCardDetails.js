"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TenderCardDetails {
    static getAttributeTypeMap() {
        return TenderCardDetails.attributeTypeMap;
    }
}
TenderCardDetails.discriminator = undefined;
TenderCardDetails.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "card",
        "baseName": "card",
        "type": "Card"
    },
    {
        "name": "entryMethod",
        "baseName": "entry_method",
        "type": "string"
    }
];
exports.TenderCardDetails = TenderCardDetails;
//# sourceMappingURL=tenderCardDetails.js.map