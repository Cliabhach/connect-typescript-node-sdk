import { V1Money } from './v1Money';
export declare class V1CashDrawerEvent {
    'id'?: string;
    'employeeId'?: string;
    'eventType'?: string;
    'eventMoney'?: V1Money;
    'createdAt'?: string;
    'description'?: string;
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
