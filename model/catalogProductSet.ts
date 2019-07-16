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
* Represents a collection of catalog objects for the purpose of applying a [PricingRule](#type-pricingrule). Including a catalog object will include all of its subtypes. For example, including a category in a product set will include all of its items and associated item variations in the product set. Including an item in a product set will also include its item variations.
*/
export class CatalogProductSet {
    /**
    *  User-defined name for the product set. For example, \"Clearance Items\" or \"Winter Sale Items\".
    */
    'name'?: string;
    /**
    * Unique IDs for any [CatalogObjects](#type-catalogobject)s to include in this product set. Any number of these catalog objects can be in an order for a pricing rule to apply.  This can be used with `product_ids_all` in a parent [CatalogProductSet](#type-catalogproductset) to match groups of products for a bulk discount, such as a discount for an entree and side combo.  Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.  Max: 500 catalog object IDs.
    */
    'productIdsAny'?: Array<string>;
    /**
    * Unique IDs for [CatalogObjects](#type-catalogobject) to include in this product set. All objects in this set must be included in an order for a pricing rule to apply.  Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.  Max: 500 catalog object IDs.
    */
    'productIdsAll'?: Array<string>;
    /**
    * If set, there must be exactly this many items from `products_any` or `products_all` in the cart for the discount to apply.  Cannot be combined with either `quantity_min` or `quantity_max`.
    */
    'quantityExact'?: number;
    /**
    * If set, there must be at least this many items from `products_any` or `products_all` in a cart for the discount to apply. See `quantity_exact`. Defaults to 0 if `quantity_exact`, `quantity_min` and `quantity_max` are all unspecified.
    */
    'quantityMin'?: number;
    /**
    * If set, the pricing rule will apply to a maximum of this many items from `products_any` or `products_all`.
    */
    'quantityMax'?: number;
    /**
    * If set to `true`, the product set will include every item in the catalog.  Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
    */
    'allProducts'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "productIdsAny",
            "baseName": "product_ids_any",
            "type": "Array<string>"
        },
        {
            "name": "productIdsAll",
            "baseName": "product_ids_all",
            "type": "Array<string>"
        },
        {
            "name": "quantityExact",
            "baseName": "quantity_exact",
            "type": "number"
        },
        {
            "name": "quantityMin",
            "baseName": "quantity_min",
            "type": "number"
        },
        {
            "name": "quantityMax",
            "baseName": "quantity_max",
            "type": "number"
        },
        {
            "name": "allProducts",
            "baseName": "all_products",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CatalogProductSet.attributeTypeMap;
    }
}

