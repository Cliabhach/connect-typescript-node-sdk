export declare class CreateOrderRequestTax {
    'catalogObjectId'?: string;
    'name'?: string;
    'type'?: string;
    'percentage'?: string;
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
