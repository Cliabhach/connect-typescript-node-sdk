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
* Sets the sort order of search results.
*/
export class ShiftSort {
    /**
    * The field to sort on. See [ShiftSortField](#type-shiftsortfield) for possible values
    */
    'field'?: string;
    /**
    * The order in which results are returned. Defaults to DESC. See [SortOrder](#type-sortorder) for possible values
    */
    'order'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ShiftSort.attributeTypeMap;
    }
}

