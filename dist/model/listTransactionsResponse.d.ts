import { Transaction } from './transaction';
export declare class ListTransactionsResponse {
    'errors'?: Array<Error>;
    'transactions'?: Array<Transaction>;
    'cursor'?: string;
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
