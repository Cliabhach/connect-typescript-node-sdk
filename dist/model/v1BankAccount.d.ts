export declare class V1BankAccount {
    'id'?: string;
    'merchantId'?: string;
    'bankName'?: string;
    'name'?: string;
    'routingNumber'?: string;
    'accountNumberSuffix'?: string;
    'currencyCode'?: string;
    'type'?: string;
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
