"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogPricingRule {
    static getAttributeTypeMap() {
        return CatalogPricingRule.attributeTypeMap;
    }
}
CatalogPricingRule.discriminator = undefined;
CatalogPricingRule.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "timePeriodIds",
        "baseName": "time_period_ids",
        "type": "Array<string>"
    },
    {
        "name": "discountId",
        "baseName": "discount_id",
        "type": "string"
    },
    {
        "name": "matchProductsId",
        "baseName": "match_products_id",
        "type": "string"
    },
    {
        "name": "applyProductsId",
        "baseName": "apply_products_id",
        "type": "string"
    },
    {
        "name": "excludeProductsId",
        "baseName": "exclude_products_id",
        "type": "string"
    },
    {
        "name": "validFromDate",
        "baseName": "valid_from_date",
        "type": "string"
    },
    {
        "name": "validFromLocalTime",
        "baseName": "valid_from_local_time",
        "type": "string"
    },
    {
        "name": "validUntilDate",
        "baseName": "valid_until_date",
        "type": "string"
    },
    {
        "name": "validUntilLocalTime",
        "baseName": "valid_until_local_time",
        "type": "string"
    }
];
exports.CatalogPricingRule = CatalogPricingRule;
//# sourceMappingURL=catalogPricingRule.js.map