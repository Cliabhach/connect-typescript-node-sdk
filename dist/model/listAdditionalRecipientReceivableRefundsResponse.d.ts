import { AdditionalRecipientReceivableRefund } from './additionalRecipientReceivableRefund';
import { SquareError } from './squareError';
export declare class ListAdditionalRecipientReceivableRefundsResponse {
    'errors'?: Array<SquareError>;
    'receivableRefunds'?: Array<AdditionalRecipientReceivableRefund>;
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
