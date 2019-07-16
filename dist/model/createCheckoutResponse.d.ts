import { Checkout } from './checkout';
import { SquareError } from './squareError';
export declare class CreateCheckoutResponse {
    'checkout'?: Checkout;
    'errors'?: Array<SquareError>;
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
