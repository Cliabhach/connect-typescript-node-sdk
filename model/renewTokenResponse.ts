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
export class RenewTokenResponse {
    /**
    * The renewed access token. This value might be different from the `access_token` you provided in your request. You provide this token in a header with every request to Connect API endpoints. See [Request and response headers](https://docs.connect.squareup.com/api/connect/v2/#requestandresponseheaders) for the format of this header.
    */
    'accessToken'?: string;
    /**
    * This value is always _bearer_.
    */
    'tokenType'?: string;
    /**
    * The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
    */
    'expiresAt'?: string;
    /**
    * The ID of the authorizing merchant\'s business.
    */
    'merchantId'?: string;
    /**
    * __LEGACY FIELD__. The ID of the merchant subscription associated with the authorization. Only present if the merchant signed up for a subscription during authorization.
    */
    'subscriptionId'?: string;
    /**
    * __LEGACY FIELD__. The ID of the subscription plan the merchant signed up for. Only present if the merchant signed up for a subscription during authorization.
    */
    'planId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string"
        },
        {
            "name": "tokenType",
            "baseName": "token_type",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchant_id",
            "type": "string"
        },
        {
            "name": "subscriptionId",
            "baseName": "subscription_id",
            "type": "string"
        },
        {
            "name": "planId",
            "baseName": "plan_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RenewTokenResponse.attributeTypeMap;
    }
}
