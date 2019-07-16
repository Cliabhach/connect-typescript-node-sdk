import { V1CashDrawerShift } from './v1CashDrawerShift';
export declare class V1ListCashDrawerShiftsResponse {
    'items'?: Array<V1CashDrawerShift>;
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
