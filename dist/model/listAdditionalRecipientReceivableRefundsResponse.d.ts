import { AdditionalRecipientReceivableRefund } from './additionalRecipientReceivableRefund';
export declare class ListAdditionalRecipientReceivableRefundsResponse {
    'errors'?: Array<Error>;
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
