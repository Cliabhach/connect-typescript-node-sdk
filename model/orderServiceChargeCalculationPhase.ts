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
* Represents a phase in the process of calculating order totals. Service charges will be applied after the phase indicated.  [Read more about how order totals are calculated.](/orders-api/how-it-works#how-totals-are-calculated)
*/
export enum OrderServiceChargeCalculationPhase {
    SUBTOTALPHASE = <any> 'SUBTOTAL_PHASE',
    TOTALPHASE = <any> 'TOTAL_PHASE'
}