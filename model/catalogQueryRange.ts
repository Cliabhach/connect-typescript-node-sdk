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
export class CatalogQueryRange {
    /**
    * The name of the attribute to be searched.
    */
    'attributeName': string;
    /**
    * The desired minimum value for the search attribute (inclusive).
    */
    'attributeMinValue'?: number;
    /**
    * The desired maximum value for the search attribute (inclusive).
    */
    'attributeMaxValue'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributeName",
            "baseName": "attribute_name",
            "type": "string"
        },
        {
            "name": "attributeMinValue",
            "baseName": "attribute_min_value",
            "type": "number"
        },
        {
            "name": "attributeMaxValue",
            "baseName": "attribute_max_value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CatalogQueryRange.attributeTypeMap;
    }
}
