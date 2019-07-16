import { Money } from './money';
import { OrderFulfillment } from './orderFulfillment';
import { OrderLineItem } from './orderLineItem';
import { OrderLineItemDiscount } from './orderLineItemDiscount';
import { OrderLineItemTax } from './orderLineItemTax';
import { OrderMoneyAmounts } from './orderMoneyAmounts';
import { OrderReturn } from './orderReturn';
import { OrderRoundingAdjustment } from './orderRoundingAdjustment';
import { OrderServiceCharge } from './orderServiceCharge';
import { OrderSource } from './orderSource';
import { Refund } from './refund';
import { Tender } from './tender';
export declare class Order {
    'id'?: string;
    'locationId': string;
    'referenceId'?: string;
    'source'?: OrderSource;
    'customerId'?: string;
    'lineItems'?: Array<OrderLineItem>;
    'taxes'?: Array<OrderLineItemTax>;
    'discounts'?: Array<OrderLineItemDiscount>;
    'serviceCharges'?: Array<OrderServiceCharge>;
    'fulfillments'?: Array<OrderFulfillment>;
    'returns'?: Array<OrderReturn>;
    'returnAmounts'?: OrderMoneyAmounts;
    'netAmounts'?: OrderMoneyAmounts;
    'roundingAdjustment'?: OrderRoundingAdjustment;
    'tenders'?: Array<Tender>;
    'refunds'?: Array<Refund>;
    'createdAt'?: string;
    'updatedAt'?: string;
    'closedAt'?: string;
    'state'?: string;
    'totalMoney'?: Money;
    'totalTaxMoney'?: Money;
    'totalDiscountMoney'?: Money;
    'totalServiceChargeMoney'?: Money;
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
