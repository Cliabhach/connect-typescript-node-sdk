import { Address } from './address';
import { Refund } from './refund';
import { Tender } from './tender';
export declare class Transaction {
    'id'?: string;
    'locationId'?: string;
    'createdAt'?: string;
    'tenders'?: Array<Tender>;
    'refunds'?: Array<Refund>;
    'referenceId'?: string;
    'product'?: string;
    'clientId'?: string;
    'shippingAddress'?: Address;
    'orderId'?: string;
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
