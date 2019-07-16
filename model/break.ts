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
* A record of an employee\'s break during a shift.
*/
export class Break {
    /**
    * UUID for this object
    */
    'id'?: string;
    /**
    * RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated.
    */
    'startAt': string;
    /**
    * RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated. The `end_at` minute is not counted when the break length is calculated. For example, a break from `00:00` to `00:11`  is considered a 10 minute break (midnight to 10 minutes after midnight).
    */
    'endAt'?: string;
    /**
    * The `BreakType` this `Break` was templated on.
    */
    'breakTypeId': string;
    /**
    * A human-readable name.
    */
    'name': string;
    /**
    * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of the break.
    */
    'expectedDuration': string;
    /**
    * Whether this break counts towards time worked for compensation purposes.
    */
    'isPaid': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "string"
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "string"
        },
        {
            "name": "breakTypeId",
            "baseName": "break_type_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "expectedDuration",
            "baseName": "expected_duration",
            "type": "string"
        },
        {
            "name": "isPaid",
            "baseName": "is_paid",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Break.attributeTypeMap;
    }
}
