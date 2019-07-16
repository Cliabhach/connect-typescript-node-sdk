import { Address } from './address';
import { V1Money } from './v1Money';
import { V1OrderHistoryEntry } from './v1OrderHistoryEntry';
import { V1Tender } from './v1Tender';
export declare class V1Order {
    'errors'?: Array<Error>;
    'id'?: string;
    'buyerEmail'?: string;
    'recipientName'?: string;
    'recipientPhoneNumber'?: string;
    'state'?: string;
    'shippingAddress'?: Address;
    'subtotalMoney'?: V1Money;
    'totalShippingMoney'?: V1Money;
    'totalTaxMoney'?: V1Money;
    'totalPriceMoney'?: V1Money;
    'totalDiscountMoney'?: V1Money;
    'createdAt'?: string;
    'updatedAt'?: string;
    'expiresAt'?: string;
    'paymentId'?: string;
    'buyerNote'?: string;
    'completedNote'?: string;
    'refundedNote'?: string;
    'canceledNote'?: string;
    'tender'?: V1Tender;
    'orderHistory'?: Array<V1OrderHistoryEntry>;
    'promoCode'?: string;
    'btcReceiveAddress'?: string;
    'btcPriceSatoshi'?: number;
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
