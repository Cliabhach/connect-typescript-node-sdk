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
export class RevokeTokenRequest {
    /**
    * Your application\'s ID, available from the [application dashboard](https://connect.squareup.com/apps).
    */
    'clientId'?: string;
    /**
    * The access token of the merchant whose token you want to revoke. Do not provide a value for merchant_id if you provide this parameter.
    */
    'accessToken'?: string;
    /**
    * The ID of the merchant whose token you want to revoke. Do not provide a value for access_token if you provide this parameter.
    */
    'merchantId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientId",
            "baseName": "client_id",
            "type": "string"
        },
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchant_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RevokeTokenRequest.attributeTypeMap;
    }
}

