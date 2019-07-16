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
* Filter by current Order `state`.
*/
export class SearchOrdersStateFilter {
    /**
    * States to filter for. See [OrderState](#type-orderstate) for possible values
    */
    'states': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "states",
            "baseName": "states",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return SearchOrdersStateFilter.attributeTypeMap;
    }
}

