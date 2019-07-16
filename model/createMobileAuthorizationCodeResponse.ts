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
* Defines the fields that are included in the response body of a request to the CreateMobileAuthorizationCode endpoint.
*/
export class CreateMobileAuthorizationCodeResponse {
    /**
    * Generated authorization code that connects a mobile application instance to a Square account.
    */
    'authorizationCode'?: string;
    /**
    * The timestamp when `authorization_code` expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, e.g., \"2016-09-04T23:59:33.123Z\".
    */
    'expiresAt'?: string;
    'error'?: Error;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorizationCode",
            "baseName": "authorization_code",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "Error"
        }    ];

    static getAttributeTypeMap() {
        return CreateMobileAuthorizationCodeResponse.attributeTypeMap;
    }
}

