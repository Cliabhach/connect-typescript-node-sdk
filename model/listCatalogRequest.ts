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
export class ListCatalogRequest {
    /**
    * The pagination cursor returned in the previous response. Leave unset for an initial request. See [Pagination](/basics/api101/pagination) for more information.
    */
    'cursor'?: string;
    /**
    * An optional case-insensitive, comma-separated list of object types to retrieve, for example `ITEM,ITEM_VARIATION,CATEGORY,IMAGE`.  The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype) enumeration, namely `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`, `MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.
    */
    'types'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListCatalogRequest.attributeTypeMap;
    }
}

