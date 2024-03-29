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

import { Address } from './address';
import { V1MerchantLocationDetails } from './v1MerchantLocationDetails';
import { V1PhoneNumber } from './v1PhoneNumber';

/**
* Defines the fields that are included in the response body of a request to the **RetrieveBusiness** endpoint.
*/
export class V1Merchant {
    /**
    * The merchant account\'s unique identifier.
    */
    'id'?: string;
    /**
    * The name associated with the merchant account.
    */
    'name'?: string;
    /**
    * The email address associated with the merchant account.
    */
    'email'?: string;
    /**
    * Indicates whether the merchant account corresponds to a single-location account (LOCATION) or a business account (BUSINESS). This value is almost always LOCATION. See [V1MerchantAccountType](#type-v1merchantaccounttype) for possible values
    */
    'accountType'?: string;
    /**
    * Capabilities that are enabled for the merchant\'s Square account. Capabilities that are not listed in this array are not enabled for the account.
    */
    'accountCapabilities'?: Array<string>;
    /**
    * The country associated with the merchant account, in ISO 3166-1-alpha-2 format.
    */
    'countryCode'?: string;
    /**
    * The language associated with the merchant account, in BCP 47 format.
    */
    'languageCode'?: string;
    /**
    * The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD.
    */
    'currencyCode'?: string;
    /**
    * The name of the merchant\'s business.
    */
    'businessName'?: string;
    'businessAddress'?: Address;
    'businessPhone'?: V1PhoneNumber;
    /**
    * The type of business operated by the merchant. See [V1MerchantBusinessType](#type-v1merchantbusinesstype) for possible values
    */
    'businessType'?: string;
    'shippingAddress'?: Address;
    'locationDetails'?: V1MerchantLocationDetails;
    /**
    * The URL of the merchant\'s online store.
    */
    'marketUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "string"
        },
        {
            "name": "accountCapabilities",
            "baseName": "account_capabilities",
            "type": "Array<string>"
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string"
        },
        {
            "name": "languageCode",
            "baseName": "language_code",
            "type": "string"
        },
        {
            "name": "currencyCode",
            "baseName": "currency_code",
            "type": "string"
        },
        {
            "name": "businessName",
            "baseName": "business_name",
            "type": "string"
        },
        {
            "name": "businessAddress",
            "baseName": "business_address",
            "type": "Address"
        },
        {
            "name": "businessPhone",
            "baseName": "business_phone",
            "type": "V1PhoneNumber"
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "Address"
        },
        {
            "name": "locationDetails",
            "baseName": "location_details",
            "type": "V1MerchantLocationDetails"
        },
        {
            "name": "marketUrl",
            "baseName": "market_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1Merchant.attributeTypeMap;
    }
}

