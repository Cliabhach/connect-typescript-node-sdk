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
* Represents a particular customer\'s preferences.
*/
export class CustomerPreferences {
    /**
    * The customer has unsubscribed from receiving marketing campaign emails.
    */
    'emailUnsubscribed'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "emailUnsubscribed",
            "baseName": "email_unsubscribed",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CustomerPreferences.attributeTypeMap;
    }
}

