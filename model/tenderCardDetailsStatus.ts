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
* Indicates the card transaction\'s current status.
*/
export enum TenderCardDetailsStatus {
    AUTHORIZED = <any> 'AUTHORIZED',
    CAPTURED = <any> 'CAPTURED',
    VOIDED = <any> 'VOIDED',
    FAILED = <any> 'FAILED'
}