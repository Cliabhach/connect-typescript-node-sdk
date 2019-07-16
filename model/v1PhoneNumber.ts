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
* Represents a phone number.
*/
export class V1PhoneNumber {
    /**
    * The phone number\'s international calling code. For US phone numbers, this value is +1.
    */
    'callingCode': string;
    /**
    * The phone number.
    */
    'number': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "callingCode",
            "baseName": "calling_code",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PhoneNumber.attributeTypeMap;
    }
}
