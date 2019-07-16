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
export class CatalogQueryItemsForModifierList {
    /**
    * A set of [CatalogModifierList](#type-catalogmodifierlist) IDs to be used to find associated [CatalogItem](#type-catalogitem)s.
    */
    'modifierListIds': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modifierListIds",
            "baseName": "modifier_list_ids",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CatalogQueryItemsForModifierList.attributeTypeMap;
    }
}
