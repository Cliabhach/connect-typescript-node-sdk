import { Shift } from './shift';
export declare class GetShiftResponse {
    'shift'?: Shift;
    'errors'?: Array<Error>;
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
