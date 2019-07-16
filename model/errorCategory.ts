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
* Indicates which high-level category of error has occurred during a request to the Connect API.
*/
export enum ErrorCategory {
    APIERROR = <any> 'API_ERROR',
    AUTHENTICATIONERROR = <any> 'AUTHENTICATION_ERROR',
    INVALIDREQUESTERROR = <any> 'INVALID_REQUEST_ERROR',
    RATELIMITERROR = <any> 'RATE_LIMIT_ERROR',
    PAYMENTMETHODERROR = <any> 'PAYMENT_METHOD_ERROR',
    REFUNDERROR = <any> 'REFUND_ERROR'
}
