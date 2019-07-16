export declare class CatalogProductSet {
    'name'?: string;
    'productIdsAny'?: Array<string>;
    'productIdsAll'?: Array<string>;
    'quantityExact'?: number;
    'quantityMin'?: number;
    'quantityMax'?: number;
    'allProducts'?: boolean;
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
