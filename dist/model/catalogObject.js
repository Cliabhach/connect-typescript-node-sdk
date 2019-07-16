"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogObject {
    static getAttributeTypeMap() {
        return CatalogObject.attributeTypeMap;
    }
}
CatalogObject.discriminator = undefined;
CatalogObject.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    },
    {
        "name": "isDeleted",
        "baseName": "is_deleted",
        "type": "boolean"
    },
    {
        "name": "catalogV1Ids",
        "baseName": "catalog_v1_ids",
        "type": "Array<CatalogV1Id>"
    },
    {
        "name": "presentAtAllLocations",
        "baseName": "present_at_all_locations",
        "type": "boolean"
    },
    {
        "name": "presentAtLocationIds",
        "baseName": "present_at_location_ids",
        "type": "Array<string>"
    },
    {
        "name": "absentAtLocationIds",
        "baseName": "absent_at_location_ids",
        "type": "Array<string>"
    },
    {
        "name": "imageId",
        "baseName": "image_id",
        "type": "string"
    },
    {
        "name": "itemData",
        "baseName": "item_data",
        "type": "CatalogItem"
    },
    {
        "name": "categoryData",
        "baseName": "category_data",
        "type": "CatalogCategory"
    },
    {
        "name": "itemVariationData",
        "baseName": "item_variation_data",
        "type": "CatalogItemVariation"
    },
    {
        "name": "taxData",
        "baseName": "tax_data",
        "type": "CatalogTax"
    },
    {
        "name": "discountData",
        "baseName": "discount_data",
        "type": "CatalogDiscount"
    },
    {
        "name": "modifierListData",
        "baseName": "modifier_list_data",
        "type": "CatalogModifierList"
    },
    {
        "name": "modifierData",
        "baseName": "modifier_data",
        "type": "CatalogModifier"
    },
    {
        "name": "timePeriodData",
        "baseName": "time_period_data",
        "type": "CatalogTimePeriod"
    },
    {
        "name": "productSetData",
        "baseName": "product_set_data",
        "type": "CatalogProductSet"
    },
    {
        "name": "pricingRuleData",
        "baseName": "pricing_rule_data",
        "type": "CatalogPricingRule"
    },
    {
        "name": "imageData",
        "baseName": "image_data",
        "type": "CatalogImage"
    },
    {
        "name": "measurementUnitData",
        "baseName": "measurement_unit_data",
        "type": "CatalogMeasurementUnit"
    }
];
exports.CatalogObject = CatalogObject;
//# sourceMappingURL=catalogObject.js.map