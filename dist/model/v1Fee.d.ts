export declare class V1Fee {
    'id'?: string;
    'name'?: string;
    'rate'?: string;
    'calculationPhase'?: string;
    'adjustmentType'?: string;
    'appliesToCustomAmounts'?: boolean;
    'enabled'?: boolean;
    'inclusionType'?: string;
    'type'?: string;
    'v2Id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
