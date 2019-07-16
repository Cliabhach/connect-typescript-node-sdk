export declare class CatalogPricingRule {
    'name'?: string;
    'timePeriodIds'?: Array<string>;
    'discountId'?: string;
    'matchProductsId'?: string;
    'applyProductsId'?: string;
    'excludeProductsId'?: string;
    'validFromDate'?: string;
    'validFromLocalTime'?: string;
    'validUntilDate'?: string;
    'validUntilLocalTime'?: string;
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
