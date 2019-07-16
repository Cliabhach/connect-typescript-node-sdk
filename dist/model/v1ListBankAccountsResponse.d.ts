import { V1BankAccount } from './v1BankAccount';
export declare class V1ListBankAccountsResponse {
    'items'?: Array<V1BankAccount>;
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
