/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * The version of the OpenAPI document: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* 
*/
export class CatalogInfoResponseLimits {
    /**
    * The maximum number of objects that may appear within a single batch in a `/v2/catalog/batch-upsert` request.
    */
    'batchUpsertMaxObjectsPerBatch'?: number;
    /**
    * The maximum number of objects that may appear across all batches in a `/v2/catalog/batch-upsert` request.
    */
    'batchUpsertMaxTotalObjects'?: number;
    /**
    * The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve` request.
    */
    'batchRetrieveMaxObjectIds'?: number;
    /**
    * The maximum number of results that may be returned in a page of a `/v2/catalog/search` response.
    */
    'searchMaxPageLimit'?: number;
    /**
    * The maximum number of object IDs that may be included in a single `/v2/catalog/batch-delete` request.
    */
    'batchDeleteMaxObjectIds'?: number;
    /**
    * The maximum number of item IDs that may be included in a single `/v2/catalog/update-item-taxes` request.
    */
    'updateItemTaxesMaxItemIds'?: number;
    /**
    * The maximum number of tax IDs to be enabled that may be included in a single `/v2/catalog/update-item-taxes` request.
    */
    'updateItemTaxesMaxTaxesToEnable'?: number;
    /**
    * The maximum number of tax IDs to be disabled that may be included in a single `/v2/catalog/update-item-taxes` request.
    */
    'updateItemTaxesMaxTaxesToDisable'?: number;
    /**
    * The maximum number of item IDs that may be included in a single `/v2/catalog/update-item-modifier-lists` request.
    */
    'updateItemModifierListsMaxItemIds'?: number;
    /**
    * The maximum number of modifier list IDs to be enabled that may be included in a single `/v2/catalog/update-item-modifier-lists` request.
    */
    'updateItemModifierListsMaxModifierListsToEnable'?: number;
    /**
    * The maximum number of modifier list IDs to be disabled that may be included in a single `/v2/catalog/update-item-modifier-lists` request.
    */
    'updateItemModifierListsMaxModifierListsToDisable'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return CatalogInfoResponseLimits.attributeTypeMap;
    }
}

