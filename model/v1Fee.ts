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
* V1Fee
*/
export class V1Fee {
    /**
    * The fee\'s unique ID.
    */
    'id'?: string;
    /**
    * The fee\'s name.
    */
    'name'?: string;
    /**
    * The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
    */
    'rate'?: string;
    /**
    * Forthcoming See [V1FeeCalculationPhase](#type-v1feecalculationphase) for possible values
    */
    'calculationPhase'?: string;
    /**
    * The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees. See [V1FeeAdjustmentType](#type-v1feeadjustmenttype) for possible values
    */
    'adjustmentType'?: string;
    /**
    * If true, the fee applies to custom amounts entered into Square Register that are not associated with a particular item.
    */
    'appliesToCustomAmounts'?: boolean;
    /**
    * If true, the fee is applied to all appropriate items. If false, the fee is not applied at all.
    */
    'enabled'?: boolean;
    /**
    * Whether the fee is ADDITIVE or INCLUSIVE. See [V1FeeInclusionType](#type-v1feeinclusiontype) for possible values
    */
    'inclusionType'?: string;
    /**
    * In countries with multiple classifications for sales taxes, indicates which classification the fee falls under. Currently relevant only to Canadian merchants. See [V1FeeType](#type-v1feetype) for possible values
    */
    'type'?: string;
    /**
    * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
    */
    'v2Id'?: string;

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
            "name": "rate",
            "baseName": "rate",
            "type": "string"
        },
        {
            "name": "calculationPhase",
            "baseName": "calculation_phase",
            "type": "string"
        },
        {
            "name": "adjustmentType",
            "baseName": "adjustment_type",
            "type": "string"
        },
        {
            "name": "appliesToCustomAmounts",
            "baseName": "applies_to_custom_amounts",
            "type": "boolean"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "inclusionType",
            "baseName": "inclusion_type",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "v2Id",
            "baseName": "v2_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1Fee.attributeTypeMap;
    }
}

