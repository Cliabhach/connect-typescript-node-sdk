"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogInfoResponseLimits {
    static getAttributeTypeMap() {
        return CatalogInfoResponseLimits.attributeTypeMap;
    }
}
CatalogInfoResponseLimits.discriminator = undefined;
CatalogInfoResponseLimits.attributeTypeMap = [
    {
        "name": "batchUpsertMaxObjectsPerBatch",
        "baseName": "batch_upsert_max_objects_per_batch",
        "type": "number"
    },
    {
        "name": "batchUpsertMaxTotalObjects",
        "baseName": "batch_upsert_max_total_objects",
        "type": "number"
    },
    {
        "name": "batchRetrieveMaxObjectIds",
        "baseName": "batch_retrieve_max_object_ids",
        "type": "number"
    },
    {
        "name": "searchMaxPageLimit",
        "baseName": "search_max_page_limit",
        "type": "number"
    },
    {
        "name": "batchDeleteMaxObjectIds",
        "baseName": "batch_delete_max_object_ids",
        "type": "number"
    },
    {
        "name": "updateItemTaxesMaxItemIds",
        "baseName": "update_item_taxes_max_item_ids",
        "type": "number"
    },
    {
        "name": "updateItemTaxesMaxTaxesToEnable",
        "baseName": "update_item_taxes_max_taxes_to_enable",
        "type": "number"
    },
    {
        "name": "updateItemTaxesMaxTaxesToDisable",
        "baseName": "update_item_taxes_max_taxes_to_disable",
        "type": "number"
    },
    {
        "name": "updateItemModifierListsMaxItemIds",
        "baseName": "update_item_modifier_lists_max_item_ids",
        "type": "number"
    },
    {
        "name": "updateItemModifierListsMaxModifierListsToEnable",
        "baseName": "update_item_modifier_lists_max_modifier_lists_to_enable",
        "type": "number"
    },
    {
        "name": "updateItemModifierListsMaxModifierListsToDisable",
        "baseName": "update_item_modifier_lists_max_modifier_lists_to_disable",
        "type": "number"
    }
];
exports.CatalogInfoResponseLimits = CatalogInfoResponseLimits;
//# sourceMappingURL=catalogInfoResponseLimits.js.map