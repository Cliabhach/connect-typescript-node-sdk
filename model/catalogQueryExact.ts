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
export class CatalogQueryExact {
    /**
    * The name of the attribute to be searched.
    */
    'attributeName': string;
    /**
    * The desired value of the search attribute.
    */
    'attributeValue': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributeName",
            "baseName": "attribute_name",
            "type": "string"
        },
        {
            "name": "attributeValue",
            "baseName": "attribute_value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CatalogQueryExact.attributeTypeMap;
    }
}

