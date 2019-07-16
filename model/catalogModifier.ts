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

import { Money } from './money';

/**
* A modifier in the Catalog object model.
*/
export class CatalogModifier {
    /**
    * The modifier\'s name. Searchable. This field has max length of 255 Unicode code points.
    */
    'name'?: string;
    'priceMoney'?: Money;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "priceMoney",
            "baseName": "price_money",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return CatalogModifier.attributeTypeMap;
    }
}
