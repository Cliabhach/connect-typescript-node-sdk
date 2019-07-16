export declare class CatalogTax {
    'name'?: string;
    'calculationPhase'?: string;
    'inclusionType'?: string;
    'percentage'?: string;
    'appliesToCustomAmounts'?: boolean;
    'enabled'?: boolean;
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
