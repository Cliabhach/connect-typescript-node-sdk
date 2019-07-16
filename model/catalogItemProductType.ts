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
* The type of a [CatalogItem](#type-catalogitem). Connect V2 only allows the creation of `REGULAR` items.
*/
export enum CatalogItemProductType {
    REGULAR = <any> 'REGULAR',
    GIFTCARD = <any> 'GIFT_CARD',
    APPOINTMENTSSERVICE = <any> 'APPOINTMENTS_SERVICE',
    RETAILITEM = <any> 'RETAIL_ITEM',
    RESTAURANTITEM = <any> 'RESTAURANT_ITEM'
}