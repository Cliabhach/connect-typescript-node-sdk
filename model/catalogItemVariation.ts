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

import { ItemVariationLocationOverrides } from './itemVariationLocationOverrides';
import { Money } from './money';

/**
* An item variation (i.e., product) in the Catalog object model. Each item may have a maximum of 250 item variations.
*/
export class CatalogItemVariation {
    /**
    * The ID of the [CatalogItem](#type-catalogitem) associated with this item variation. Searchable.
    */
    'itemId'?: string;
    /**
    * The item variation\'s name. Searchable. This field has max length of 255 Unicode code points.
    */
    'name'?: string;
    /**
    * The item variation\'s SKU, if any. Searchable.
    */
    'sku'?: string;
    /**
    * The item variation\'s UPC, if any. Searchable in the Connect API. This field is only exposed in the Connect API. It is not exposed in Square\'s Dashboard, Square Point of Sale app or Retail Point of Sale app.
    */
    'upc'?: string;
    /**
    * The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal for each item variation within a parent [CatalogItem](#type-catalogitem) is set according to the item variations\'s position. On reads, the value is not guaranteed to be sequential or unique.
    */
    'ordinal'?: number;
    /**
    * Indicates whether the item variation\'s price is fixed or determined at the time of sale. See [CatalogPricingType](#type-catalogpricingtype) for possible values
    */
    'pricingType'?: string;
    'priceMoney'?: Money;
    /**
    * Per-[location](#type-location) price and inventory overrides.
    */
    'locationOverrides'?: Array<ItemVariationLocationOverrides>;
    /**
    * If `true`, inventory tracking is active for the variation.
    */
    'trackInventory'?: boolean;
    /**
    * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for possible values
    */
    'inventoryAlertType'?: string;
    /**
    * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.  This value is always an integer.
    */
    'inventoryAlertThreshold'?: number;
    /**
    * Arbitrary user metadata to associate with the item variation. Cannot exceed 255 characters. Searchable.
    */
    'userData'?: string;
    /**
    * If the [CatalogItem](#type-catalogitem) that owns this item variation is of type `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For example, a 30 minute appointment would have the value `1800000`, which is equal to 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
    */
    'serviceDuration'?: number;
    /**
    * ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity sold of this item variation. If left unset, the item will be sold in whole quantities.
    */
    'measurementUnitId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemId",
            "baseName": "item_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string"
        },
        {
            "name": "upc",
            "baseName": "upc",
            "type": "string"
        },
        {
            "name": "ordinal",
            "baseName": "ordinal",
            "type": "number"
        },
        {
            "name": "pricingType",
            "baseName": "pricing_type",
            "type": "string"
        },
        {
            "name": "priceMoney",
            "baseName": "price_money",
            "type": "Money"
        },
        {
            "name": "locationOverrides",
            "baseName": "location_overrides",
            "type": "Array<ItemVariationLocationOverrides>"
        },
        {
            "name": "trackInventory",
            "baseName": "track_inventory",
            "type": "boolean"
        },
        {
            "name": "inventoryAlertType",
            "baseName": "inventory_alert_type",
            "type": "string"
        },
        {
            "name": "inventoryAlertThreshold",
            "baseName": "inventory_alert_threshold",
            "type": "number"
        },
        {
            "name": "userData",
            "baseName": "user_data",
            "type": "string"
        },
        {
            "name": "serviceDuration",
            "baseName": "service_duration",
            "type": "number"
        },
        {
            "name": "measurementUnitId",
            "baseName": "measurement_unit_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CatalogItemVariation.attributeTypeMap;
    }
}
