export declare class V1PaymentItemDetail {
    'categoryName'?: string;
    'sku'?: string;
    'itemId'?: string;
    'itemVariationId'?: string;
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
