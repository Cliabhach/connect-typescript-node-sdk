import { Device } from './device';
import { V1CashDrawerEvent } from './v1CashDrawerEvent';
import { V1Money } from './v1Money';
export declare class V1CashDrawerShift {
    'id'?: string;
    'eventType'?: string;
    'openedAt'?: string;
    'endedAt'?: string;
    'closedAt'?: string;
    'employeeIds'?: Array<string>;
    'openingEmployeeId'?: string;
    'endingEmployeeId'?: string;
    'closingEmployeeId'?: string;
    'description'?: string;
    'startingCashMoney'?: V1Money;
    'cashPaymentMoney'?: V1Money;
    'cashRefundsMoney'?: V1Money;
    'cashPaidInMoney'?: V1Money;
    'cashPaidOutMoney'?: V1Money;
    'expectedCashMoney'?: V1Money;
    'closedCashMoney'?: V1Money;
    'device'?: Device;
    'events'?: Array<V1CashDrawerEvent>;
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
