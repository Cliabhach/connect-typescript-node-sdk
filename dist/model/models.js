"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./additionalRecipient"));
__export(require("./additionalRecipientReceivable"));
__export(require("./additionalRecipientReceivableRefund"));
__export(require("./address"));
__export(require("./batchChangeInventoryRequest"));
__export(require("./batchChangeInventoryResponse"));
__export(require("./batchDeleteCatalogObjectsRequest"));
__export(require("./batchDeleteCatalogObjectsResponse"));
__export(require("./batchRetrieveCatalogObjectsRequest"));
__export(require("./batchRetrieveCatalogObjectsResponse"));
__export(require("./batchRetrieveInventoryChangesRequest"));
__export(require("./batchRetrieveInventoryChangesResponse"));
__export(require("./batchRetrieveInventoryCountsRequest"));
__export(require("./batchRetrieveInventoryCountsResponse"));
__export(require("./batchRetrieveOrdersRequest"));
__export(require("./batchRetrieveOrdersResponse"));
__export(require("./batchUpsertCatalogObjectsRequest"));
__export(require("./batchUpsertCatalogObjectsResponse"));
__export(require("./break"));
__export(require("./breakType"));
__export(require("./businessHours"));
__export(require("./businessHoursPeriod"));
__export(require("./captureTransactionResponse"));
__export(require("./card"));
__export(require("./cardBrand"));
__export(require("./catalogCategory"));
__export(require("./catalogDiscount"));
__export(require("./catalogDiscountType"));
__export(require("./catalogIdMapping"));
__export(require("./catalogImage"));
__export(require("./catalogInfoResponse"));
__export(require("./catalogInfoResponseLimits"));
__export(require("./catalogItem"));
__export(require("./catalogItemModifierListInfo"));
__export(require("./catalogItemProductType"));
__export(require("./catalogItemVariation"));
__export(require("./catalogMeasurementUnit"));
__export(require("./catalogModifier"));
__export(require("./catalogModifierList"));
__export(require("./catalogModifierListSelectionType"));
__export(require("./catalogModifierOverride"));
__export(require("./catalogObject"));
__export(require("./catalogObjectBatch"));
__export(require("./catalogObjectType"));
__export(require("./catalogPricingRule"));
__export(require("./catalogPricingType"));
__export(require("./catalogProductSet"));
__export(require("./catalogQuery"));
__export(require("./catalogQueryExact"));
__export(require("./catalogQueryItemsForModifierList"));
__export(require("./catalogQueryItemsForTax"));
__export(require("./catalogQueryPrefix"));
__export(require("./catalogQueryRange"));
__export(require("./catalogQuerySortedAttribute"));
__export(require("./catalogQueryText"));
__export(require("./catalogTax"));
__export(require("./catalogTimePeriod"));
__export(require("./catalogV1Id"));
__export(require("./chargeRequest"));
__export(require("./chargeRequestAdditionalRecipient"));
__export(require("./chargeResponse"));
__export(require("./checkout"));
__export(require("./coordinates"));
__export(require("./country"));
__export(require("./createBreakTypeRequest"));
__export(require("./createBreakTypeResponse"));
__export(require("./createCheckoutRequest"));
__export(require("./createCheckoutResponse"));
__export(require("./createCustomerCardRequest"));
__export(require("./createCustomerCardResponse"));
__export(require("./createCustomerRequest"));
__export(require("./createCustomerResponse"));
__export(require("./createMobileAuthorizationCodeRequest"));
__export(require("./createMobileAuthorizationCodeResponse"));
__export(require("./createOrderRequest"));
__export(require("./createOrderRequestDiscount"));
__export(require("./createOrderRequestLineItem"));
__export(require("./createOrderRequestModifier"));
__export(require("./createOrderRequestTax"));
__export(require("./createOrderResponse"));
__export(require("./createRefundRequest"));
__export(require("./createRefundResponse"));
__export(require("./createShiftRequest"));
__export(require("./createShiftResponse"));
__export(require("./currency"));
__export(require("./customer"));
__export(require("./customerCreationSource"));
__export(require("./customerCreationSourceFilter"));
__export(require("./customerFilter"));
__export(require("./customerGroupInfo"));
__export(require("./customerInclusionExclusion"));
__export(require("./customerPreferences"));
__export(require("./customerQuery"));
__export(require("./customerSort"));
__export(require("./customerSortField"));
__export(require("./dateRange"));
__export(require("./dayOfWeek"));
__export(require("./deleteBreakTypeResponse"));
__export(require("./deleteCatalogObjectResponse"));
__export(require("./deleteCustomerCardResponse"));
__export(require("./deleteCustomerResponse"));
__export(require("./deleteShiftResponse"));
__export(require("./device"));
__export(require("./employee"));
__export(require("./employeeStatus"));
__export(require("./employeeWage"));
__export(require("./errorCategory"));
__export(require("./errorCode"));
__export(require("./getBreakTypeResponse"));
__export(require("./getEmployeeWageResponse"));
__export(require("./getShiftResponse"));
__export(require("./inventoryAdjustment"));
__export(require("./inventoryAlertType"));
__export(require("./inventoryChange"));
__export(require("./inventoryChangeType"));
__export(require("./inventoryCount"));
__export(require("./inventoryPhysicalCount"));
__export(require("./inventoryState"));
__export(require("./inventoryTransfer"));
__export(require("./itemVariationLocationOverrides"));
__export(require("./listAdditionalRecipientReceivableRefundsRequest"));
__export(require("./listAdditionalRecipientReceivableRefundsResponse"));
__export(require("./listAdditionalRecipientReceivablesRequest"));
__export(require("./listAdditionalRecipientReceivablesResponse"));
__export(require("./listBreakTypesRequest"));
__export(require("./listBreakTypesResponse"));
__export(require("./listCatalogRequest"));
__export(require("./listCatalogResponse"));
__export(require("./listCustomersRequest"));
__export(require("./listCustomersResponse"));
__export(require("./listEmployeeWagesRequest"));
__export(require("./listEmployeeWagesResponse"));
__export(require("./listEmployeesRequest"));
__export(require("./listEmployeesResponse"));
__export(require("./listLocationsResponse"));
__export(require("./listRefundsRequest"));
__export(require("./listRefundsResponse"));
__export(require("./listTransactionsRequest"));
__export(require("./listTransactionsResponse"));
__export(require("./listWorkweekConfigsRequest"));
__export(require("./listWorkweekConfigsResponse"));
__export(require("./location"));
__export(require("./locationCapability"));
__export(require("./locationStatus"));
__export(require("./locationType"));
__export(require("./measurementUnit"));
__export(require("./measurementUnitArea"));
__export(require("./measurementUnitCustom"));
__export(require("./measurementUnitGeneric"));
__export(require("./measurementUnitLength"));
__export(require("./measurementUnitVolume"));
__export(require("./measurementUnitWeight"));
__export(require("./modelError"));
__export(require("./money"));
__export(require("./obtainTokenRequest"));
__export(require("./obtainTokenResponse"));
__export(require("./order"));
__export(require("./orderEntry"));
__export(require("./orderFulfillment"));
__export(require("./orderFulfillmentPickupDetails"));
__export(require("./orderFulfillmentPickupDetailsScheduleType"));
__export(require("./orderFulfillmentRecipient"));
__export(require("./orderFulfillmentState"));
__export(require("./orderFulfillmentType"));
__export(require("./orderLineItem"));
__export(require("./orderLineItemDiscount"));
__export(require("./orderLineItemDiscountScope"));
__export(require("./orderLineItemDiscountType"));
__export(require("./orderLineItemModifier"));
__export(require("./orderLineItemTax"));
__export(require("./orderLineItemTaxScope"));
__export(require("./orderLineItemTaxType"));
__export(require("./orderMoneyAmounts"));
__export(require("./orderQuantityUnit"));
__export(require("./orderReturn"));
__export(require("./orderReturnDiscount"));
__export(require("./orderReturnLineItem"));
__export(require("./orderReturnLineItemModifier"));
__export(require("./orderReturnServiceCharge"));
__export(require("./orderReturnTax"));
__export(require("./orderRoundingAdjustment"));
__export(require("./orderServiceCharge"));
__export(require("./orderServiceChargeCalculationPhase"));
__export(require("./orderSource"));
__export(require("./orderState"));
__export(require("./product"));
__export(require("./refund"));
__export(require("./refundStatus"));
__export(require("./registerDomainRequest"));
__export(require("./registerDomainResponse"));
__export(require("./registerDomainResponseStatus"));
__export(require("./renewTokenRequest"));
__export(require("./renewTokenResponse"));
__export(require("./retrieveCatalogObjectRequest"));
__export(require("./retrieveCatalogObjectResponse"));
__export(require("./retrieveCustomerResponse"));
__export(require("./retrieveEmployeeResponse"));
__export(require("./retrieveInventoryAdjustmentResponse"));
__export(require("./retrieveInventoryChangesRequest"));
__export(require("./retrieveInventoryChangesResponse"));
__export(require("./retrieveInventoryCountRequest"));
__export(require("./retrieveInventoryCountResponse"));
__export(require("./retrieveInventoryPhysicalCountResponse"));
__export(require("./retrieveTransactionResponse"));
__export(require("./revokeTokenRequest"));
__export(require("./revokeTokenResponse"));
__export(require("./searchCatalogObjectsRequest"));
__export(require("./searchCatalogObjectsResponse"));
__export(require("./searchCustomersRequest"));
__export(require("./searchCustomersResponse"));
__export(require("./searchOrdersCustomerFilter"));
__export(require("./searchOrdersDateTimeFilter"));
__export(require("./searchOrdersFilter"));
__export(require("./searchOrdersFulfillmentFilter"));
__export(require("./searchOrdersQuery"));
__export(require("./searchOrdersRequest"));
__export(require("./searchOrdersResponse"));
__export(require("./searchOrdersSort"));
__export(require("./searchOrdersSortField"));
__export(require("./searchOrdersSourceFilter"));
__export(require("./searchOrdersStateFilter"));
__export(require("./searchShiftsRequest"));
__export(require("./searchShiftsResponse"));
__export(require("./shift"));
__export(require("./shiftFilter"));
__export(require("./shiftFilterStatus"));
__export(require("./shiftQuery"));
__export(require("./shiftSort"));
__export(require("./shiftSortField"));
__export(require("./shiftStatus"));
__export(require("./shiftWage"));
__export(require("./shiftWorkday"));
__export(require("./shiftWorkdayMatcher"));
__export(require("./sortOrder"));
__export(require("./sourceApplication"));
__export(require("./standardUnitDescription"));
__export(require("./standardUnitDescriptionGroup"));
__export(require("./taxCalculationPhase"));
__export(require("./taxInclusionType"));
__export(require("./tender"));
__export(require("./tenderCardDetails"));
__export(require("./tenderCardDetailsEntryMethod"));
__export(require("./tenderCardDetailsStatus"));
__export(require("./tenderCashDetails"));
__export(require("./tenderType"));
__export(require("./timeRange"));
__export(require("./transaction"));
__export(require("./transactionProduct"));
__export(require("./updateBreakTypeRequest"));
__export(require("./updateBreakTypeResponse"));
__export(require("./updateCustomerRequest"));
__export(require("./updateCustomerResponse"));
__export(require("./updateItemModifierListsRequest"));
__export(require("./updateItemModifierListsResponse"));
__export(require("./updateItemTaxesRequest"));
__export(require("./updateItemTaxesResponse"));
__export(require("./updateShiftRequest"));
__export(require("./updateShiftResponse"));
__export(require("./updateWorkweekConfigRequest"));
__export(require("./updateWorkweekConfigResponse"));
__export(require("./upsertCatalogObjectRequest"));
__export(require("./upsertCatalogObjectResponse"));
__export(require("./v1AdjustInventoryRequest"));
__export(require("./v1AdjustInventoryRequestAdjustmentType"));
__export(require("./v1BankAccount"));
__export(require("./v1BankAccountType"));
__export(require("./v1CashDrawerEvent"));
__export(require("./v1CashDrawerEventEventType"));
__export(require("./v1CashDrawerShift"));
__export(require("./v1CashDrawerShiftEventType"));
__export(require("./v1Category"));
__export(require("./v1CreateCategoryRequest"));
__export(require("./v1CreateDiscountRequest"));
__export(require("./v1CreateEmployeeRoleRequest"));
__export(require("./v1CreateFeeRequest"));
__export(require("./v1CreateItemRequest"));
__export(require("./v1CreateModifierListRequest"));
__export(require("./v1CreateModifierOptionRequest"));
__export(require("./v1CreatePageRequest"));
__export(require("./v1CreateRefundRequest"));
__export(require("./v1CreateRefundRequestType"));
__export(require("./v1CreateVariationRequest"));
__export(require("./v1DeletePageCellRequest"));
__export(require("./v1Discount"));
__export(require("./v1DiscountColor"));
__export(require("./v1DiscountDiscountType"));
__export(require("./v1Employee"));
__export(require("./v1EmployeeRole"));
__export(require("./v1EmployeeRolePermissions"));
__export(require("./v1EmployeeStatus"));
__export(require("./v1Fee"));
__export(require("./v1FeeAdjustmentType"));
__export(require("./v1FeeCalculationPhase"));
__export(require("./v1FeeInclusionType"));
__export(require("./v1FeeType"));
__export(require("./v1InventoryEntry"));
__export(require("./v1Item"));
__export(require("./v1ItemColor"));
__export(require("./v1ItemImage"));
__export(require("./v1ItemType"));
__export(require("./v1ItemVisibility"));
__export(require("./v1ListBankAccountsResponse"));
__export(require("./v1ListCashDrawerShiftsRequest"));
__export(require("./v1ListCashDrawerShiftsResponse"));
__export(require("./v1ListCategoriesResponse"));
__export(require("./v1ListDiscountsResponse"));
__export(require("./v1ListEmployeeRolesRequest"));
__export(require("./v1ListEmployeeRolesResponse"));
__export(require("./v1ListEmployeesRequest"));
__export(require("./v1ListEmployeesRequestStatus"));
__export(require("./v1ListEmployeesResponse"));
__export(require("./v1ListFeesResponse"));
__export(require("./v1ListInventoryRequest"));
__export(require("./v1ListInventoryResponse"));
__export(require("./v1ListItemsRequest"));
__export(require("./v1ListItemsResponse"));
__export(require("./v1ListLocationsResponse"));
__export(require("./v1ListModifierListsResponse"));
__export(require("./v1ListOrdersRequest"));
__export(require("./v1ListOrdersResponse"));
__export(require("./v1ListPagesResponse"));
__export(require("./v1ListPaymentsRequest"));
__export(require("./v1ListPaymentsResponse"));
__export(require("./v1ListRefundsRequest"));
__export(require("./v1ListRefundsResponse"));
__export(require("./v1ListSettlementsRequest"));
__export(require("./v1ListSettlementsRequestStatus"));
__export(require("./v1ListSettlementsResponse"));
__export(require("./v1ListTimecardEventsResponse"));
__export(require("./v1ListTimecardsRequest"));
__export(require("./v1ListTimecardsResponse"));
__export(require("./v1Merchant"));
__export(require("./v1MerchantAccountType"));
__export(require("./v1MerchantBusinessType"));
__export(require("./v1MerchantLocationDetails"));
__export(require("./v1ModifierList"));
__export(require("./v1ModifierListSelectionType"));
__export(require("./v1ModifierOption"));
__export(require("./v1Money"));
__export(require("./v1Order"));
__export(require("./v1OrderHistoryEntry"));
__export(require("./v1OrderHistoryEntryAction"));
__export(require("./v1OrderState"));
__export(require("./v1Page"));
__export(require("./v1PageCell"));
__export(require("./v1PageCellObjectType"));
__export(require("./v1PageCellPlaceholderType"));
__export(require("./v1Payment"));
__export(require("./v1PaymentDiscount"));
__export(require("./v1PaymentItemDetail"));
__export(require("./v1PaymentItemization"));
__export(require("./v1PaymentItemizationItemizationType"));
__export(require("./v1PaymentModifier"));
__export(require("./v1PaymentSurcharge"));
__export(require("./v1PaymentSurchargeType"));
__export(require("./v1PaymentTax"));
__export(require("./v1PaymentTaxInclusionType"));
__export(require("./v1PhoneNumber"));
__export(require("./v1Refund"));
__export(require("./v1RefundType"));
__export(require("./v1Settlement"));
__export(require("./v1SettlementEntry"));
__export(require("./v1SettlementEntryType"));
__export(require("./v1SettlementStatus"));
__export(require("./v1Tender"));
__export(require("./v1TenderCardBrand"));
__export(require("./v1TenderEntryMethod"));
__export(require("./v1TenderType"));
__export(require("./v1Timecard"));
__export(require("./v1TimecardEvent"));
__export(require("./v1TimecardEventEventType"));
__export(require("./v1UpdateCategoryRequest"));
__export(require("./v1UpdateDiscountRequest"));
__export(require("./v1UpdateEmployeeRequest"));
__export(require("./v1UpdateEmployeeRoleRequest"));
__export(require("./v1UpdateFeeRequest"));
__export(require("./v1UpdateItemRequest"));
__export(require("./v1UpdateModifierListRequest"));
__export(require("./v1UpdateModifierListRequestSelectionType"));
__export(require("./v1UpdateModifierOptionRequest"));
__export(require("./v1UpdateOrderRequest"));
__export(require("./v1UpdateOrderRequestAction"));
__export(require("./v1UpdatePageCellRequest"));
__export(require("./v1UpdatePageRequest"));
__export(require("./v1UpdateTimecardRequest"));
__export(require("./v1UpdateVariationRequest"));
__export(require("./v1Variation"));
__export(require("./v1VariationInventoryAlertType"));
__export(require("./v1VariationPricingType"));
__export(require("./voidTransactionResponse"));
__export(require("./webhookEvents"));
__export(require("./weekday"));
__export(require("./workweekConfig"));
const additionalRecipient_1 = require("./additionalRecipient");
const additionalRecipientReceivable_1 = require("./additionalRecipientReceivable");
const additionalRecipientReceivableRefund_1 = require("./additionalRecipientReceivableRefund");
const address_1 = require("./address");
const batchChangeInventoryRequest_1 = require("./batchChangeInventoryRequest");
const batchChangeInventoryResponse_1 = require("./batchChangeInventoryResponse");
const batchDeleteCatalogObjectsRequest_1 = require("./batchDeleteCatalogObjectsRequest");
const batchDeleteCatalogObjectsResponse_1 = require("./batchDeleteCatalogObjectsResponse");
const batchRetrieveCatalogObjectsRequest_1 = require("./batchRetrieveCatalogObjectsRequest");
const batchRetrieveCatalogObjectsResponse_1 = require("./batchRetrieveCatalogObjectsResponse");
const batchRetrieveInventoryChangesRequest_1 = require("./batchRetrieveInventoryChangesRequest");
const batchRetrieveInventoryChangesResponse_1 = require("./batchRetrieveInventoryChangesResponse");
const batchRetrieveInventoryCountsRequest_1 = require("./batchRetrieveInventoryCountsRequest");
const batchRetrieveInventoryCountsResponse_1 = require("./batchRetrieveInventoryCountsResponse");
const batchRetrieveOrdersRequest_1 = require("./batchRetrieveOrdersRequest");
const batchRetrieveOrdersResponse_1 = require("./batchRetrieveOrdersResponse");
const batchUpsertCatalogObjectsRequest_1 = require("./batchUpsertCatalogObjectsRequest");
const batchUpsertCatalogObjectsResponse_1 = require("./batchUpsertCatalogObjectsResponse");
const break_1 = require("./break");
const breakType_1 = require("./breakType");
const businessHours_1 = require("./businessHours");
const businessHoursPeriod_1 = require("./businessHoursPeriod");
const captureTransactionResponse_1 = require("./captureTransactionResponse");
const card_1 = require("./card");
const cardBrand_1 = require("./cardBrand");
const catalogCategory_1 = require("./catalogCategory");
const catalogDiscount_1 = require("./catalogDiscount");
const catalogDiscountType_1 = require("./catalogDiscountType");
const catalogIdMapping_1 = require("./catalogIdMapping");
const catalogImage_1 = require("./catalogImage");
const catalogInfoResponse_1 = require("./catalogInfoResponse");
const catalogInfoResponseLimits_1 = require("./catalogInfoResponseLimits");
const catalogItem_1 = require("./catalogItem");
const catalogItemModifierListInfo_1 = require("./catalogItemModifierListInfo");
const catalogItemProductType_1 = require("./catalogItemProductType");
const catalogItemVariation_1 = require("./catalogItemVariation");
const catalogMeasurementUnit_1 = require("./catalogMeasurementUnit");
const catalogModifier_1 = require("./catalogModifier");
const catalogModifierList_1 = require("./catalogModifierList");
const catalogModifierListSelectionType_1 = require("./catalogModifierListSelectionType");
const catalogModifierOverride_1 = require("./catalogModifierOverride");
const catalogObject_1 = require("./catalogObject");
const catalogObjectBatch_1 = require("./catalogObjectBatch");
const catalogObjectType_1 = require("./catalogObjectType");
const catalogPricingRule_1 = require("./catalogPricingRule");
const catalogPricingType_1 = require("./catalogPricingType");
const catalogProductSet_1 = require("./catalogProductSet");
const catalogQuery_1 = require("./catalogQuery");
const catalogQueryExact_1 = require("./catalogQueryExact");
const catalogQueryItemsForModifierList_1 = require("./catalogQueryItemsForModifierList");
const catalogQueryItemsForTax_1 = require("./catalogQueryItemsForTax");
const catalogQueryPrefix_1 = require("./catalogQueryPrefix");
const catalogQueryRange_1 = require("./catalogQueryRange");
const catalogQuerySortedAttribute_1 = require("./catalogQuerySortedAttribute");
const catalogQueryText_1 = require("./catalogQueryText");
const catalogTax_1 = require("./catalogTax");
const catalogTimePeriod_1 = require("./catalogTimePeriod");
const catalogV1Id_1 = require("./catalogV1Id");
const chargeRequest_1 = require("./chargeRequest");
const chargeRequestAdditionalRecipient_1 = require("./chargeRequestAdditionalRecipient");
const chargeResponse_1 = require("./chargeResponse");
const checkout_1 = require("./checkout");
const coordinates_1 = require("./coordinates");
const country_1 = require("./country");
const createBreakTypeRequest_1 = require("./createBreakTypeRequest");
const createBreakTypeResponse_1 = require("./createBreakTypeResponse");
const createCheckoutRequest_1 = require("./createCheckoutRequest");
const createCheckoutResponse_1 = require("./createCheckoutResponse");
const createCustomerCardRequest_1 = require("./createCustomerCardRequest");
const createCustomerCardResponse_1 = require("./createCustomerCardResponse");
const createCustomerRequest_1 = require("./createCustomerRequest");
const createCustomerResponse_1 = require("./createCustomerResponse");
const createMobileAuthorizationCodeRequest_1 = require("./createMobileAuthorizationCodeRequest");
const createMobileAuthorizationCodeResponse_1 = require("./createMobileAuthorizationCodeResponse");
const createOrderRequest_1 = require("./createOrderRequest");
const createOrderRequestDiscount_1 = require("./createOrderRequestDiscount");
const createOrderRequestLineItem_1 = require("./createOrderRequestLineItem");
const createOrderRequestModifier_1 = require("./createOrderRequestModifier");
const createOrderRequestTax_1 = require("./createOrderRequestTax");
const createOrderResponse_1 = require("./createOrderResponse");
const createRefundRequest_1 = require("./createRefundRequest");
const createRefundResponse_1 = require("./createRefundResponse");
const createShiftRequest_1 = require("./createShiftRequest");
const createShiftResponse_1 = require("./createShiftResponse");
const currency_1 = require("./currency");
const customer_1 = require("./customer");
const customerCreationSource_1 = require("./customerCreationSource");
const customerCreationSourceFilter_1 = require("./customerCreationSourceFilter");
const customerFilter_1 = require("./customerFilter");
const customerGroupInfo_1 = require("./customerGroupInfo");
const customerInclusionExclusion_1 = require("./customerInclusionExclusion");
const customerPreferences_1 = require("./customerPreferences");
const customerQuery_1 = require("./customerQuery");
const customerSort_1 = require("./customerSort");
const customerSortField_1 = require("./customerSortField");
const dateRange_1 = require("./dateRange");
const dayOfWeek_1 = require("./dayOfWeek");
const deleteBreakTypeResponse_1 = require("./deleteBreakTypeResponse");
const deleteCatalogObjectResponse_1 = require("./deleteCatalogObjectResponse");
const deleteCustomerCardResponse_1 = require("./deleteCustomerCardResponse");
const deleteCustomerResponse_1 = require("./deleteCustomerResponse");
const deleteShiftResponse_1 = require("./deleteShiftResponse");
const device_1 = require("./device");
const employee_1 = require("./employee");
const employeeStatus_1 = require("./employeeStatus");
const employeeWage_1 = require("./employeeWage");
const errorCategory_1 = require("./errorCategory");
const errorCode_1 = require("./errorCode");
const getBreakTypeResponse_1 = require("./getBreakTypeResponse");
const getEmployeeWageResponse_1 = require("./getEmployeeWageResponse");
const getShiftResponse_1 = require("./getShiftResponse");
const inventoryAdjustment_1 = require("./inventoryAdjustment");
const inventoryAlertType_1 = require("./inventoryAlertType");
const inventoryChange_1 = require("./inventoryChange");
const inventoryChangeType_1 = require("./inventoryChangeType");
const inventoryCount_1 = require("./inventoryCount");
const inventoryPhysicalCount_1 = require("./inventoryPhysicalCount");
const inventoryState_1 = require("./inventoryState");
const inventoryTransfer_1 = require("./inventoryTransfer");
const itemVariationLocationOverrides_1 = require("./itemVariationLocationOverrides");
const listAdditionalRecipientReceivableRefundsRequest_1 = require("./listAdditionalRecipientReceivableRefundsRequest");
const listAdditionalRecipientReceivableRefundsResponse_1 = require("./listAdditionalRecipientReceivableRefundsResponse");
const listAdditionalRecipientReceivablesRequest_1 = require("./listAdditionalRecipientReceivablesRequest");
const listAdditionalRecipientReceivablesResponse_1 = require("./listAdditionalRecipientReceivablesResponse");
const listBreakTypesRequest_1 = require("./listBreakTypesRequest");
const listBreakTypesResponse_1 = require("./listBreakTypesResponse");
const listCatalogRequest_1 = require("./listCatalogRequest");
const listCatalogResponse_1 = require("./listCatalogResponse");
const listCustomersRequest_1 = require("./listCustomersRequest");
const listCustomersResponse_1 = require("./listCustomersResponse");
const listEmployeeWagesRequest_1 = require("./listEmployeeWagesRequest");
const listEmployeeWagesResponse_1 = require("./listEmployeeWagesResponse");
const listEmployeesRequest_1 = require("./listEmployeesRequest");
const listEmployeesResponse_1 = require("./listEmployeesResponse");
const listLocationsResponse_1 = require("./listLocationsResponse");
const listRefundsRequest_1 = require("./listRefundsRequest");
const listRefundsResponse_1 = require("./listRefundsResponse");
const listTransactionsRequest_1 = require("./listTransactionsRequest");
const listTransactionsResponse_1 = require("./listTransactionsResponse");
const listWorkweekConfigsRequest_1 = require("./listWorkweekConfigsRequest");
const listWorkweekConfigsResponse_1 = require("./listWorkweekConfigsResponse");
const location_1 = require("./location");
const locationCapability_1 = require("./locationCapability");
const locationStatus_1 = require("./locationStatus");
const locationType_1 = require("./locationType");
const measurementUnit_1 = require("./measurementUnit");
const measurementUnitArea_1 = require("./measurementUnitArea");
const measurementUnitCustom_1 = require("./measurementUnitCustom");
const measurementUnitGeneric_1 = require("./measurementUnitGeneric");
const measurementUnitLength_1 = require("./measurementUnitLength");
const measurementUnitVolume_1 = require("./measurementUnitVolume");
const measurementUnitWeight_1 = require("./measurementUnitWeight");
const modelError_1 = require("./modelError");
const money_1 = require("./money");
const obtainTokenRequest_1 = require("./obtainTokenRequest");
const obtainTokenResponse_1 = require("./obtainTokenResponse");
const order_1 = require("./order");
const orderEntry_1 = require("./orderEntry");
const orderFulfillment_1 = require("./orderFulfillment");
const orderFulfillmentPickupDetails_1 = require("./orderFulfillmentPickupDetails");
const orderFulfillmentPickupDetailsScheduleType_1 = require("./orderFulfillmentPickupDetailsScheduleType");
const orderFulfillmentRecipient_1 = require("./orderFulfillmentRecipient");
const orderFulfillmentState_1 = require("./orderFulfillmentState");
const orderFulfillmentType_1 = require("./orderFulfillmentType");
const orderLineItem_1 = require("./orderLineItem");
const orderLineItemDiscount_1 = require("./orderLineItemDiscount");
const orderLineItemDiscountScope_1 = require("./orderLineItemDiscountScope");
const orderLineItemDiscountType_1 = require("./orderLineItemDiscountType");
const orderLineItemModifier_1 = require("./orderLineItemModifier");
const orderLineItemTax_1 = require("./orderLineItemTax");
const orderLineItemTaxScope_1 = require("./orderLineItemTaxScope");
const orderLineItemTaxType_1 = require("./orderLineItemTaxType");
const orderMoneyAmounts_1 = require("./orderMoneyAmounts");
const orderQuantityUnit_1 = require("./orderQuantityUnit");
const orderReturn_1 = require("./orderReturn");
const orderReturnDiscount_1 = require("./orderReturnDiscount");
const orderReturnLineItem_1 = require("./orderReturnLineItem");
const orderReturnLineItemModifier_1 = require("./orderReturnLineItemModifier");
const orderReturnServiceCharge_1 = require("./orderReturnServiceCharge");
const orderReturnTax_1 = require("./orderReturnTax");
const orderRoundingAdjustment_1 = require("./orderRoundingAdjustment");
const orderServiceCharge_1 = require("./orderServiceCharge");
const orderServiceChargeCalculationPhase_1 = require("./orderServiceChargeCalculationPhase");
const orderSource_1 = require("./orderSource");
const orderState_1 = require("./orderState");
const product_1 = require("./product");
const refund_1 = require("./refund");
const refundStatus_1 = require("./refundStatus");
const registerDomainRequest_1 = require("./registerDomainRequest");
const registerDomainResponse_1 = require("./registerDomainResponse");
const registerDomainResponseStatus_1 = require("./registerDomainResponseStatus");
const renewTokenRequest_1 = require("./renewTokenRequest");
const renewTokenResponse_1 = require("./renewTokenResponse");
const retrieveCatalogObjectRequest_1 = require("./retrieveCatalogObjectRequest");
const retrieveCatalogObjectResponse_1 = require("./retrieveCatalogObjectResponse");
const retrieveCustomerResponse_1 = require("./retrieveCustomerResponse");
const retrieveEmployeeResponse_1 = require("./retrieveEmployeeResponse");
const retrieveInventoryAdjustmentResponse_1 = require("./retrieveInventoryAdjustmentResponse");
const retrieveInventoryChangesRequest_1 = require("./retrieveInventoryChangesRequest");
const retrieveInventoryChangesResponse_1 = require("./retrieveInventoryChangesResponse");
const retrieveInventoryCountRequest_1 = require("./retrieveInventoryCountRequest");
const retrieveInventoryCountResponse_1 = require("./retrieveInventoryCountResponse");
const retrieveInventoryPhysicalCountResponse_1 = require("./retrieveInventoryPhysicalCountResponse");
const retrieveTransactionResponse_1 = require("./retrieveTransactionResponse");
const revokeTokenRequest_1 = require("./revokeTokenRequest");
const revokeTokenResponse_1 = require("./revokeTokenResponse");
const searchCatalogObjectsRequest_1 = require("./searchCatalogObjectsRequest");
const searchCatalogObjectsResponse_1 = require("./searchCatalogObjectsResponse");
const searchCustomersRequest_1 = require("./searchCustomersRequest");
const searchCustomersResponse_1 = require("./searchCustomersResponse");
const searchOrdersCustomerFilter_1 = require("./searchOrdersCustomerFilter");
const searchOrdersDateTimeFilter_1 = require("./searchOrdersDateTimeFilter");
const searchOrdersFilter_1 = require("./searchOrdersFilter");
const searchOrdersFulfillmentFilter_1 = require("./searchOrdersFulfillmentFilter");
const searchOrdersQuery_1 = require("./searchOrdersQuery");
const searchOrdersRequest_1 = require("./searchOrdersRequest");
const searchOrdersResponse_1 = require("./searchOrdersResponse");
const searchOrdersSort_1 = require("./searchOrdersSort");
const searchOrdersSortField_1 = require("./searchOrdersSortField");
const searchOrdersSourceFilter_1 = require("./searchOrdersSourceFilter");
const searchOrdersStateFilter_1 = require("./searchOrdersStateFilter");
const searchShiftsRequest_1 = require("./searchShiftsRequest");
const searchShiftsResponse_1 = require("./searchShiftsResponse");
const shift_1 = require("./shift");
const shiftFilter_1 = require("./shiftFilter");
const shiftFilterStatus_1 = require("./shiftFilterStatus");
const shiftQuery_1 = require("./shiftQuery");
const shiftSort_1 = require("./shiftSort");
const shiftSortField_1 = require("./shiftSortField");
const shiftStatus_1 = require("./shiftStatus");
const shiftWage_1 = require("./shiftWage");
const shiftWorkday_1 = require("./shiftWorkday");
const shiftWorkdayMatcher_1 = require("./shiftWorkdayMatcher");
const sortOrder_1 = require("./sortOrder");
const sourceApplication_1 = require("./sourceApplication");
const standardUnitDescription_1 = require("./standardUnitDescription");
const standardUnitDescriptionGroup_1 = require("./standardUnitDescriptionGroup");
const taxCalculationPhase_1 = require("./taxCalculationPhase");
const taxInclusionType_1 = require("./taxInclusionType");
const tender_1 = require("./tender");
const tenderCardDetails_1 = require("./tenderCardDetails");
const tenderCardDetailsEntryMethod_1 = require("./tenderCardDetailsEntryMethod");
const tenderCardDetailsStatus_1 = require("./tenderCardDetailsStatus");
const tenderCashDetails_1 = require("./tenderCashDetails");
const tenderType_1 = require("./tenderType");
const timeRange_1 = require("./timeRange");
const transaction_1 = require("./transaction");
const transactionProduct_1 = require("./transactionProduct");
const updateBreakTypeRequest_1 = require("./updateBreakTypeRequest");
const updateBreakTypeResponse_1 = require("./updateBreakTypeResponse");
const updateCustomerRequest_1 = require("./updateCustomerRequest");
const updateCustomerResponse_1 = require("./updateCustomerResponse");
const updateItemModifierListsRequest_1 = require("./updateItemModifierListsRequest");
const updateItemModifierListsResponse_1 = require("./updateItemModifierListsResponse");
const updateItemTaxesRequest_1 = require("./updateItemTaxesRequest");
const updateItemTaxesResponse_1 = require("./updateItemTaxesResponse");
const updateShiftRequest_1 = require("./updateShiftRequest");
const updateShiftResponse_1 = require("./updateShiftResponse");
const updateWorkweekConfigRequest_1 = require("./updateWorkweekConfigRequest");
const updateWorkweekConfigResponse_1 = require("./updateWorkweekConfigResponse");
const upsertCatalogObjectRequest_1 = require("./upsertCatalogObjectRequest");
const upsertCatalogObjectResponse_1 = require("./upsertCatalogObjectResponse");
const v1AdjustInventoryRequest_1 = require("./v1AdjustInventoryRequest");
const v1AdjustInventoryRequestAdjustmentType_1 = require("./v1AdjustInventoryRequestAdjustmentType");
const v1BankAccount_1 = require("./v1BankAccount");
const v1BankAccountType_1 = require("./v1BankAccountType");
const v1CashDrawerEvent_1 = require("./v1CashDrawerEvent");
const v1CashDrawerEventEventType_1 = require("./v1CashDrawerEventEventType");
const v1CashDrawerShift_1 = require("./v1CashDrawerShift");
const v1CashDrawerShiftEventType_1 = require("./v1CashDrawerShiftEventType");
const v1Category_1 = require("./v1Category");
const v1CreateCategoryRequest_1 = require("./v1CreateCategoryRequest");
const v1CreateDiscountRequest_1 = require("./v1CreateDiscountRequest");
const v1CreateEmployeeRoleRequest_1 = require("./v1CreateEmployeeRoleRequest");
const v1CreateFeeRequest_1 = require("./v1CreateFeeRequest");
const v1CreateItemRequest_1 = require("./v1CreateItemRequest");
const v1CreateModifierListRequest_1 = require("./v1CreateModifierListRequest");
const v1CreateModifierOptionRequest_1 = require("./v1CreateModifierOptionRequest");
const v1CreatePageRequest_1 = require("./v1CreatePageRequest");
const v1CreateRefundRequest_1 = require("./v1CreateRefundRequest");
const v1CreateRefundRequestType_1 = require("./v1CreateRefundRequestType");
const v1CreateVariationRequest_1 = require("./v1CreateVariationRequest");
const v1DeletePageCellRequest_1 = require("./v1DeletePageCellRequest");
const v1Discount_1 = require("./v1Discount");
const v1DiscountColor_1 = require("./v1DiscountColor");
const v1DiscountDiscountType_1 = require("./v1DiscountDiscountType");
const v1Employee_1 = require("./v1Employee");
const v1EmployeeRole_1 = require("./v1EmployeeRole");
const v1EmployeeRolePermissions_1 = require("./v1EmployeeRolePermissions");
const v1EmployeeStatus_1 = require("./v1EmployeeStatus");
const v1Fee_1 = require("./v1Fee");
const v1FeeAdjustmentType_1 = require("./v1FeeAdjustmentType");
const v1FeeCalculationPhase_1 = require("./v1FeeCalculationPhase");
const v1FeeInclusionType_1 = require("./v1FeeInclusionType");
const v1FeeType_1 = require("./v1FeeType");
const v1InventoryEntry_1 = require("./v1InventoryEntry");
const v1Item_1 = require("./v1Item");
const v1ItemColor_1 = require("./v1ItemColor");
const v1ItemImage_1 = require("./v1ItemImage");
const v1ItemType_1 = require("./v1ItemType");
const v1ItemVisibility_1 = require("./v1ItemVisibility");
const v1ListBankAccountsResponse_1 = require("./v1ListBankAccountsResponse");
const v1ListCashDrawerShiftsRequest_1 = require("./v1ListCashDrawerShiftsRequest");
const v1ListCashDrawerShiftsResponse_1 = require("./v1ListCashDrawerShiftsResponse");
const v1ListCategoriesResponse_1 = require("./v1ListCategoriesResponse");
const v1ListDiscountsResponse_1 = require("./v1ListDiscountsResponse");
const v1ListEmployeeRolesRequest_1 = require("./v1ListEmployeeRolesRequest");
const v1ListEmployeeRolesResponse_1 = require("./v1ListEmployeeRolesResponse");
const v1ListEmployeesRequest_1 = require("./v1ListEmployeesRequest");
const v1ListEmployeesRequestStatus_1 = require("./v1ListEmployeesRequestStatus");
const v1ListEmployeesResponse_1 = require("./v1ListEmployeesResponse");
const v1ListFeesResponse_1 = require("./v1ListFeesResponse");
const v1ListInventoryRequest_1 = require("./v1ListInventoryRequest");
const v1ListInventoryResponse_1 = require("./v1ListInventoryResponse");
const v1ListItemsRequest_1 = require("./v1ListItemsRequest");
const v1ListItemsResponse_1 = require("./v1ListItemsResponse");
const v1ListLocationsResponse_1 = require("./v1ListLocationsResponse");
const v1ListModifierListsResponse_1 = require("./v1ListModifierListsResponse");
const v1ListOrdersRequest_1 = require("./v1ListOrdersRequest");
const v1ListOrdersResponse_1 = require("./v1ListOrdersResponse");
const v1ListPagesResponse_1 = require("./v1ListPagesResponse");
const v1ListPaymentsRequest_1 = require("./v1ListPaymentsRequest");
const v1ListPaymentsResponse_1 = require("./v1ListPaymentsResponse");
const v1ListRefundsRequest_1 = require("./v1ListRefundsRequest");
const v1ListRefundsResponse_1 = require("./v1ListRefundsResponse");
const v1ListSettlementsRequest_1 = require("./v1ListSettlementsRequest");
const v1ListSettlementsRequestStatus_1 = require("./v1ListSettlementsRequestStatus");
const v1ListSettlementsResponse_1 = require("./v1ListSettlementsResponse");
const v1ListTimecardEventsResponse_1 = require("./v1ListTimecardEventsResponse");
const v1ListTimecardsRequest_1 = require("./v1ListTimecardsRequest");
const v1ListTimecardsResponse_1 = require("./v1ListTimecardsResponse");
const v1Merchant_1 = require("./v1Merchant");
const v1MerchantAccountType_1 = require("./v1MerchantAccountType");
const v1MerchantBusinessType_1 = require("./v1MerchantBusinessType");
const v1MerchantLocationDetails_1 = require("./v1MerchantLocationDetails");
const v1ModifierList_1 = require("./v1ModifierList");
const v1ModifierListSelectionType_1 = require("./v1ModifierListSelectionType");
const v1ModifierOption_1 = require("./v1ModifierOption");
const v1Money_1 = require("./v1Money");
const v1Order_1 = require("./v1Order");
const v1OrderHistoryEntry_1 = require("./v1OrderHistoryEntry");
const v1OrderHistoryEntryAction_1 = require("./v1OrderHistoryEntryAction");
const v1OrderState_1 = require("./v1OrderState");
const v1Page_1 = require("./v1Page");
const v1PageCell_1 = require("./v1PageCell");
const v1PageCellObjectType_1 = require("./v1PageCellObjectType");
const v1PageCellPlaceholderType_1 = require("./v1PageCellPlaceholderType");
const v1Payment_1 = require("./v1Payment");
const v1PaymentDiscount_1 = require("./v1PaymentDiscount");
const v1PaymentItemDetail_1 = require("./v1PaymentItemDetail");
const v1PaymentItemization_1 = require("./v1PaymentItemization");
const v1PaymentItemizationItemizationType_1 = require("./v1PaymentItemizationItemizationType");
const v1PaymentModifier_1 = require("./v1PaymentModifier");
const v1PaymentSurcharge_1 = require("./v1PaymentSurcharge");
const v1PaymentSurchargeType_1 = require("./v1PaymentSurchargeType");
const v1PaymentTax_1 = require("./v1PaymentTax");
const v1PaymentTaxInclusionType_1 = require("./v1PaymentTaxInclusionType");
const v1PhoneNumber_1 = require("./v1PhoneNumber");
const v1Refund_1 = require("./v1Refund");
const v1RefundType_1 = require("./v1RefundType");
const v1Settlement_1 = require("./v1Settlement");
const v1SettlementEntry_1 = require("./v1SettlementEntry");
const v1SettlementEntryType_1 = require("./v1SettlementEntryType");
const v1SettlementStatus_1 = require("./v1SettlementStatus");
const v1Tender_1 = require("./v1Tender");
const v1TenderCardBrand_1 = require("./v1TenderCardBrand");
const v1TenderEntryMethod_1 = require("./v1TenderEntryMethod");
const v1TenderType_1 = require("./v1TenderType");
const v1Timecard_1 = require("./v1Timecard");
const v1TimecardEvent_1 = require("./v1TimecardEvent");
const v1TimecardEventEventType_1 = require("./v1TimecardEventEventType");
const v1UpdateCategoryRequest_1 = require("./v1UpdateCategoryRequest");
const v1UpdateDiscountRequest_1 = require("./v1UpdateDiscountRequest");
const v1UpdateEmployeeRequest_1 = require("./v1UpdateEmployeeRequest");
const v1UpdateEmployeeRoleRequest_1 = require("./v1UpdateEmployeeRoleRequest");
const v1UpdateFeeRequest_1 = require("./v1UpdateFeeRequest");
const v1UpdateItemRequest_1 = require("./v1UpdateItemRequest");
const v1UpdateModifierListRequest_1 = require("./v1UpdateModifierListRequest");
const v1UpdateModifierListRequestSelectionType_1 = require("./v1UpdateModifierListRequestSelectionType");
const v1UpdateModifierOptionRequest_1 = require("./v1UpdateModifierOptionRequest");
const v1UpdateOrderRequest_1 = require("./v1UpdateOrderRequest");
const v1UpdateOrderRequestAction_1 = require("./v1UpdateOrderRequestAction");
const v1UpdatePageCellRequest_1 = require("./v1UpdatePageCellRequest");
const v1UpdatePageRequest_1 = require("./v1UpdatePageRequest");
const v1UpdateTimecardRequest_1 = require("./v1UpdateTimecardRequest");
const v1UpdateVariationRequest_1 = require("./v1UpdateVariationRequest");
const v1Variation_1 = require("./v1Variation");
const v1VariationInventoryAlertType_1 = require("./v1VariationInventoryAlertType");
const v1VariationPricingType_1 = require("./v1VariationPricingType");
const voidTransactionResponse_1 = require("./voidTransactionResponse");
const webhookEvents_1 = require("./webhookEvents");
const weekday_1 = require("./weekday");
const workweekConfig_1 = require("./workweekConfig");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "CardBrand": cardBrand_1.CardBrand,
    "CatalogDiscountType": catalogDiscountType_1.CatalogDiscountType,
    "CatalogItemProductType": catalogItemProductType_1.CatalogItemProductType,
    "CatalogModifierListSelectionType": catalogModifierListSelectionType_1.CatalogModifierListSelectionType,
    "CatalogObjectType": catalogObjectType_1.CatalogObjectType,
    "CatalogPricingType": catalogPricingType_1.CatalogPricingType,
    "Country": country_1.Country,
    "Currency": currency_1.Currency,
    "CustomerCreationSource": customerCreationSource_1.CustomerCreationSource,
    "CustomerInclusionExclusion": customerInclusionExclusion_1.CustomerInclusionExclusion,
    "CustomerSortField": customerSortField_1.CustomerSortField,
    "DayOfWeek": dayOfWeek_1.DayOfWeek,
    "EmployeeStatus": employeeStatus_1.EmployeeStatus,
    "ErrorCategory": errorCategory_1.ErrorCategory,
    "ErrorCode": errorCode_1.ErrorCode,
    "InventoryAlertType": inventoryAlertType_1.InventoryAlertType,
    "InventoryChangeType": inventoryChangeType_1.InventoryChangeType,
    "InventoryState": inventoryState_1.InventoryState,
    "LocationCapability": locationCapability_1.LocationCapability,
    "LocationStatus": locationStatus_1.LocationStatus,
    "LocationType": locationType_1.LocationType,
    "MeasurementUnitArea": measurementUnitArea_1.MeasurementUnitArea,
    "MeasurementUnitGeneric": measurementUnitGeneric_1.MeasurementUnitGeneric,
    "MeasurementUnitLength": measurementUnitLength_1.MeasurementUnitLength,
    "MeasurementUnitVolume": measurementUnitVolume_1.MeasurementUnitVolume,
    "MeasurementUnitWeight": measurementUnitWeight_1.MeasurementUnitWeight,
    "OrderFulfillmentPickupDetailsScheduleType": orderFulfillmentPickupDetailsScheduleType_1.OrderFulfillmentPickupDetailsScheduleType,
    "OrderFulfillmentState": orderFulfillmentState_1.OrderFulfillmentState,
    "OrderFulfillmentType": orderFulfillmentType_1.OrderFulfillmentType,
    "OrderLineItemDiscountScope": orderLineItemDiscountScope_1.OrderLineItemDiscountScope,
    "OrderLineItemDiscountType": orderLineItemDiscountType_1.OrderLineItemDiscountType,
    "OrderLineItemTaxScope": orderLineItemTaxScope_1.OrderLineItemTaxScope,
    "OrderLineItemTaxType": orderLineItemTaxType_1.OrderLineItemTaxType,
    "OrderServiceChargeCalculationPhase": orderServiceChargeCalculationPhase_1.OrderServiceChargeCalculationPhase,
    "OrderState": orderState_1.OrderState,
    "Product": product_1.Product,
    "RefundStatus": refundStatus_1.RefundStatus,
    "RegisterDomainResponseStatus": registerDomainResponseStatus_1.RegisterDomainResponseStatus,
    "SearchOrdersSortField": searchOrdersSortField_1.SearchOrdersSortField,
    "ShiftFilterStatus": shiftFilterStatus_1.ShiftFilterStatus,
    "ShiftSortField": shiftSortField_1.ShiftSortField,
    "ShiftStatus": shiftStatus_1.ShiftStatus,
    "ShiftWorkdayMatcher": shiftWorkdayMatcher_1.ShiftWorkdayMatcher,
    "SortOrder": sortOrder_1.SortOrder,
    "TaxCalculationPhase": taxCalculationPhase_1.TaxCalculationPhase,
    "TaxInclusionType": taxInclusionType_1.TaxInclusionType,
    "TenderCardDetailsEntryMethod": tenderCardDetailsEntryMethod_1.TenderCardDetailsEntryMethod,
    "TenderCardDetailsStatus": tenderCardDetailsStatus_1.TenderCardDetailsStatus,
    "TenderType": tenderType_1.TenderType,
    "TransactionProduct": transactionProduct_1.TransactionProduct,
    "V1AdjustInventoryRequestAdjustmentType": v1AdjustInventoryRequestAdjustmentType_1.V1AdjustInventoryRequestAdjustmentType,
    "V1BankAccountType": v1BankAccountType_1.V1BankAccountType,
    "V1CashDrawerEventEventType": v1CashDrawerEventEventType_1.V1CashDrawerEventEventType,
    "V1CashDrawerShiftEventType": v1CashDrawerShiftEventType_1.V1CashDrawerShiftEventType,
    "V1CreateRefundRequestType": v1CreateRefundRequestType_1.V1CreateRefundRequestType,
    "V1DiscountColor": v1DiscountColor_1.V1DiscountColor,
    "V1DiscountDiscountType": v1DiscountDiscountType_1.V1DiscountDiscountType,
    "V1EmployeeRolePermissions": v1EmployeeRolePermissions_1.V1EmployeeRolePermissions,
    "V1EmployeeStatus": v1EmployeeStatus_1.V1EmployeeStatus,
    "V1FeeAdjustmentType": v1FeeAdjustmentType_1.V1FeeAdjustmentType,
    "V1FeeCalculationPhase": v1FeeCalculationPhase_1.V1FeeCalculationPhase,
    "V1FeeInclusionType": v1FeeInclusionType_1.V1FeeInclusionType,
    "V1FeeType": v1FeeType_1.V1FeeType,
    "V1ItemColor": v1ItemColor_1.V1ItemColor,
    "V1ItemType": v1ItemType_1.V1ItemType,
    "V1ItemVisibility": v1ItemVisibility_1.V1ItemVisibility,
    "V1ListEmployeesRequestStatus": v1ListEmployeesRequestStatus_1.V1ListEmployeesRequestStatus,
    "V1ListSettlementsRequestStatus": v1ListSettlementsRequestStatus_1.V1ListSettlementsRequestStatus,
    "V1MerchantAccountType": v1MerchantAccountType_1.V1MerchantAccountType,
    "V1MerchantBusinessType": v1MerchantBusinessType_1.V1MerchantBusinessType,
    "V1ModifierListSelectionType": v1ModifierListSelectionType_1.V1ModifierListSelectionType,
    "V1OrderHistoryEntryAction": v1OrderHistoryEntryAction_1.V1OrderHistoryEntryAction,
    "V1OrderState": v1OrderState_1.V1OrderState,
    "V1PageCellObjectType": v1PageCellObjectType_1.V1PageCellObjectType,
    "V1PageCellPlaceholderType": v1PageCellPlaceholderType_1.V1PageCellPlaceholderType,
    "V1PaymentItemizationItemizationType": v1PaymentItemizationItemizationType_1.V1PaymentItemizationItemizationType,
    "V1PaymentSurchargeType": v1PaymentSurchargeType_1.V1PaymentSurchargeType,
    "V1PaymentTaxInclusionType": v1PaymentTaxInclusionType_1.V1PaymentTaxInclusionType,
    "V1RefundType": v1RefundType_1.V1RefundType,
    "V1SettlementEntryType": v1SettlementEntryType_1.V1SettlementEntryType,
    "V1SettlementStatus": v1SettlementStatus_1.V1SettlementStatus,
    "V1TenderCardBrand": v1TenderCardBrand_1.V1TenderCardBrand,
    "V1TenderEntryMethod": v1TenderEntryMethod_1.V1TenderEntryMethod,
    "V1TenderType": v1TenderType_1.V1TenderType,
    "V1TimecardEventEventType": v1TimecardEventEventType_1.V1TimecardEventEventType,
    "V1UpdateModifierListRequestSelectionType": v1UpdateModifierListRequestSelectionType_1.V1UpdateModifierListRequestSelectionType,
    "V1UpdateOrderRequestAction": v1UpdateOrderRequestAction_1.V1UpdateOrderRequestAction,
    "V1VariationInventoryAlertType": v1VariationInventoryAlertType_1.V1VariationInventoryAlertType,
    "V1VariationPricingType": v1VariationPricingType_1.V1VariationPricingType,
    "WebhookEvents": webhookEvents_1.WebhookEvents,
    "Weekday": weekday_1.Weekday,
};
let typeMap = {
    "AdditionalRecipient": additionalRecipient_1.AdditionalRecipient,
    "AdditionalRecipientReceivable": additionalRecipientReceivable_1.AdditionalRecipientReceivable,
    "AdditionalRecipientReceivableRefund": additionalRecipientReceivableRefund_1.AdditionalRecipientReceivableRefund,
    "Address": address_1.Address,
    "BatchChangeInventoryRequest": batchChangeInventoryRequest_1.BatchChangeInventoryRequest,
    "BatchChangeInventoryResponse": batchChangeInventoryResponse_1.BatchChangeInventoryResponse,
    "BatchDeleteCatalogObjectsRequest": batchDeleteCatalogObjectsRequest_1.BatchDeleteCatalogObjectsRequest,
    "BatchDeleteCatalogObjectsResponse": batchDeleteCatalogObjectsResponse_1.BatchDeleteCatalogObjectsResponse,
    "BatchRetrieveCatalogObjectsRequest": batchRetrieveCatalogObjectsRequest_1.BatchRetrieveCatalogObjectsRequest,
    "BatchRetrieveCatalogObjectsResponse": batchRetrieveCatalogObjectsResponse_1.BatchRetrieveCatalogObjectsResponse,
    "BatchRetrieveInventoryChangesRequest": batchRetrieveInventoryChangesRequest_1.BatchRetrieveInventoryChangesRequest,
    "BatchRetrieveInventoryChangesResponse": batchRetrieveInventoryChangesResponse_1.BatchRetrieveInventoryChangesResponse,
    "BatchRetrieveInventoryCountsRequest": batchRetrieveInventoryCountsRequest_1.BatchRetrieveInventoryCountsRequest,
    "BatchRetrieveInventoryCountsResponse": batchRetrieveInventoryCountsResponse_1.BatchRetrieveInventoryCountsResponse,
    "BatchRetrieveOrdersRequest": batchRetrieveOrdersRequest_1.BatchRetrieveOrdersRequest,
    "BatchRetrieveOrdersResponse": batchRetrieveOrdersResponse_1.BatchRetrieveOrdersResponse,
    "BatchUpsertCatalogObjectsRequest": batchUpsertCatalogObjectsRequest_1.BatchUpsertCatalogObjectsRequest,
    "BatchUpsertCatalogObjectsResponse": batchUpsertCatalogObjectsResponse_1.BatchUpsertCatalogObjectsResponse,
    "Break": break_1.Break,
    "BreakType": breakType_1.BreakType,
    "BusinessHours": businessHours_1.BusinessHours,
    "BusinessHoursPeriod": businessHoursPeriod_1.BusinessHoursPeriod,
    "CaptureTransactionResponse": captureTransactionResponse_1.CaptureTransactionResponse,
    "Card": card_1.Card,
    "CatalogCategory": catalogCategory_1.CatalogCategory,
    "CatalogDiscount": catalogDiscount_1.CatalogDiscount,
    "CatalogIdMapping": catalogIdMapping_1.CatalogIdMapping,
    "CatalogImage": catalogImage_1.CatalogImage,
    "CatalogInfoResponse": catalogInfoResponse_1.CatalogInfoResponse,
    "CatalogInfoResponseLimits": catalogInfoResponseLimits_1.CatalogInfoResponseLimits,
    "CatalogItem": catalogItem_1.CatalogItem,
    "CatalogItemModifierListInfo": catalogItemModifierListInfo_1.CatalogItemModifierListInfo,
    "CatalogItemVariation": catalogItemVariation_1.CatalogItemVariation,
    "CatalogMeasurementUnit": catalogMeasurementUnit_1.CatalogMeasurementUnit,
    "CatalogModifier": catalogModifier_1.CatalogModifier,
    "CatalogModifierList": catalogModifierList_1.CatalogModifierList,
    "CatalogModifierOverride": catalogModifierOverride_1.CatalogModifierOverride,
    "CatalogObject": catalogObject_1.CatalogObject,
    "CatalogObjectBatch": catalogObjectBatch_1.CatalogObjectBatch,
    "CatalogPricingRule": catalogPricingRule_1.CatalogPricingRule,
    "CatalogProductSet": catalogProductSet_1.CatalogProductSet,
    "CatalogQuery": catalogQuery_1.CatalogQuery,
    "CatalogQueryExact": catalogQueryExact_1.CatalogQueryExact,
    "CatalogQueryItemsForModifierList": catalogQueryItemsForModifierList_1.CatalogQueryItemsForModifierList,
    "CatalogQueryItemsForTax": catalogQueryItemsForTax_1.CatalogQueryItemsForTax,
    "CatalogQueryPrefix": catalogQueryPrefix_1.CatalogQueryPrefix,
    "CatalogQueryRange": catalogQueryRange_1.CatalogQueryRange,
    "CatalogQuerySortedAttribute": catalogQuerySortedAttribute_1.CatalogQuerySortedAttribute,
    "CatalogQueryText": catalogQueryText_1.CatalogQueryText,
    "CatalogTax": catalogTax_1.CatalogTax,
    "CatalogTimePeriod": catalogTimePeriod_1.CatalogTimePeriod,
    "CatalogV1Id": catalogV1Id_1.CatalogV1Id,
    "ChargeRequest": chargeRequest_1.ChargeRequest,
    "ChargeRequestAdditionalRecipient": chargeRequestAdditionalRecipient_1.ChargeRequestAdditionalRecipient,
    "ChargeResponse": chargeResponse_1.ChargeResponse,
    "Checkout": checkout_1.Checkout,
    "Coordinates": coordinates_1.Coordinates,
    "CreateBreakTypeRequest": createBreakTypeRequest_1.CreateBreakTypeRequest,
    "CreateBreakTypeResponse": createBreakTypeResponse_1.CreateBreakTypeResponse,
    "CreateCheckoutRequest": createCheckoutRequest_1.CreateCheckoutRequest,
    "CreateCheckoutResponse": createCheckoutResponse_1.CreateCheckoutResponse,
    "CreateCustomerCardRequest": createCustomerCardRequest_1.CreateCustomerCardRequest,
    "CreateCustomerCardResponse": createCustomerCardResponse_1.CreateCustomerCardResponse,
    "CreateCustomerRequest": createCustomerRequest_1.CreateCustomerRequest,
    "CreateCustomerResponse": createCustomerResponse_1.CreateCustomerResponse,
    "CreateMobileAuthorizationCodeRequest": createMobileAuthorizationCodeRequest_1.CreateMobileAuthorizationCodeRequest,
    "CreateMobileAuthorizationCodeResponse": createMobileAuthorizationCodeResponse_1.CreateMobileAuthorizationCodeResponse,
    "CreateOrderRequest": createOrderRequest_1.CreateOrderRequest,
    "CreateOrderRequestDiscount": createOrderRequestDiscount_1.CreateOrderRequestDiscount,
    "CreateOrderRequestLineItem": createOrderRequestLineItem_1.CreateOrderRequestLineItem,
    "CreateOrderRequestModifier": createOrderRequestModifier_1.CreateOrderRequestModifier,
    "CreateOrderRequestTax": createOrderRequestTax_1.CreateOrderRequestTax,
    "CreateOrderResponse": createOrderResponse_1.CreateOrderResponse,
    "CreateRefundRequest": createRefundRequest_1.CreateRefundRequest,
    "CreateRefundResponse": createRefundResponse_1.CreateRefundResponse,
    "CreateShiftRequest": createShiftRequest_1.CreateShiftRequest,
    "CreateShiftResponse": createShiftResponse_1.CreateShiftResponse,
    "Customer": customer_1.Customer,
    "CustomerCreationSourceFilter": customerCreationSourceFilter_1.CustomerCreationSourceFilter,
    "CustomerFilter": customerFilter_1.CustomerFilter,
    "CustomerGroupInfo": customerGroupInfo_1.CustomerGroupInfo,
    "CustomerPreferences": customerPreferences_1.CustomerPreferences,
    "CustomerQuery": customerQuery_1.CustomerQuery,
    "CustomerSort": customerSort_1.CustomerSort,
    "DateRange": dateRange_1.DateRange,
    "DeleteBreakTypeResponse": deleteBreakTypeResponse_1.DeleteBreakTypeResponse,
    "DeleteCatalogObjectResponse": deleteCatalogObjectResponse_1.DeleteCatalogObjectResponse,
    "DeleteCustomerCardResponse": deleteCustomerCardResponse_1.DeleteCustomerCardResponse,
    "DeleteCustomerResponse": deleteCustomerResponse_1.DeleteCustomerResponse,
    "DeleteShiftResponse": deleteShiftResponse_1.DeleteShiftResponse,
    "Device": device_1.Device,
    "Employee": employee_1.Employee,
    "EmployeeWage": employeeWage_1.EmployeeWage,
    "GetBreakTypeResponse": getBreakTypeResponse_1.GetBreakTypeResponse,
    "GetEmployeeWageResponse": getEmployeeWageResponse_1.GetEmployeeWageResponse,
    "GetShiftResponse": getShiftResponse_1.GetShiftResponse,
    "InventoryAdjustment": inventoryAdjustment_1.InventoryAdjustment,
    "InventoryChange": inventoryChange_1.InventoryChange,
    "InventoryCount": inventoryCount_1.InventoryCount,
    "InventoryPhysicalCount": inventoryPhysicalCount_1.InventoryPhysicalCount,
    "InventoryTransfer": inventoryTransfer_1.InventoryTransfer,
    "ItemVariationLocationOverrides": itemVariationLocationOverrides_1.ItemVariationLocationOverrides,
    "ListAdditionalRecipientReceivableRefundsRequest": listAdditionalRecipientReceivableRefundsRequest_1.ListAdditionalRecipientReceivableRefundsRequest,
    "ListAdditionalRecipientReceivableRefundsResponse": listAdditionalRecipientReceivableRefundsResponse_1.ListAdditionalRecipientReceivableRefundsResponse,
    "ListAdditionalRecipientReceivablesRequest": listAdditionalRecipientReceivablesRequest_1.ListAdditionalRecipientReceivablesRequest,
    "ListAdditionalRecipientReceivablesResponse": listAdditionalRecipientReceivablesResponse_1.ListAdditionalRecipientReceivablesResponse,
    "ListBreakTypesRequest": listBreakTypesRequest_1.ListBreakTypesRequest,
    "ListBreakTypesResponse": listBreakTypesResponse_1.ListBreakTypesResponse,
    "ListCatalogRequest": listCatalogRequest_1.ListCatalogRequest,
    "ListCatalogResponse": listCatalogResponse_1.ListCatalogResponse,
    "ListCustomersRequest": listCustomersRequest_1.ListCustomersRequest,
    "ListCustomersResponse": listCustomersResponse_1.ListCustomersResponse,
    "ListEmployeeWagesRequest": listEmployeeWagesRequest_1.ListEmployeeWagesRequest,
    "ListEmployeeWagesResponse": listEmployeeWagesResponse_1.ListEmployeeWagesResponse,
    "ListEmployeesRequest": listEmployeesRequest_1.ListEmployeesRequest,
    "ListEmployeesResponse": listEmployeesResponse_1.ListEmployeesResponse,
    "ListLocationsResponse": listLocationsResponse_1.ListLocationsResponse,
    "ListRefundsRequest": listRefundsRequest_1.ListRefundsRequest,
    "ListRefundsResponse": listRefundsResponse_1.ListRefundsResponse,
    "ListTransactionsRequest": listTransactionsRequest_1.ListTransactionsRequest,
    "ListTransactionsResponse": listTransactionsResponse_1.ListTransactionsResponse,
    "ListWorkweekConfigsRequest": listWorkweekConfigsRequest_1.ListWorkweekConfigsRequest,
    "ListWorkweekConfigsResponse": listWorkweekConfigsResponse_1.ListWorkweekConfigsResponse,
    "Location": location_1.Location,
    "MeasurementUnit": measurementUnit_1.MeasurementUnit,
    "MeasurementUnitCustom": measurementUnitCustom_1.MeasurementUnitCustom,
    "ModelError": modelError_1.ModelError,
    "Money": money_1.Money,
    "ObtainTokenRequest": obtainTokenRequest_1.ObtainTokenRequest,
    "ObtainTokenResponse": obtainTokenResponse_1.ObtainTokenResponse,
    "Order": order_1.Order,
    "OrderEntry": orderEntry_1.OrderEntry,
    "OrderFulfillment": orderFulfillment_1.OrderFulfillment,
    "OrderFulfillmentPickupDetails": orderFulfillmentPickupDetails_1.OrderFulfillmentPickupDetails,
    "OrderFulfillmentRecipient": orderFulfillmentRecipient_1.OrderFulfillmentRecipient,
    "OrderLineItem": orderLineItem_1.OrderLineItem,
    "OrderLineItemDiscount": orderLineItemDiscount_1.OrderLineItemDiscount,
    "OrderLineItemModifier": orderLineItemModifier_1.OrderLineItemModifier,
    "OrderLineItemTax": orderLineItemTax_1.OrderLineItemTax,
    "OrderMoneyAmounts": orderMoneyAmounts_1.OrderMoneyAmounts,
    "OrderQuantityUnit": orderQuantityUnit_1.OrderQuantityUnit,
    "OrderReturn": orderReturn_1.OrderReturn,
    "OrderReturnDiscount": orderReturnDiscount_1.OrderReturnDiscount,
    "OrderReturnLineItem": orderReturnLineItem_1.OrderReturnLineItem,
    "OrderReturnLineItemModifier": orderReturnLineItemModifier_1.OrderReturnLineItemModifier,
    "OrderReturnServiceCharge": orderReturnServiceCharge_1.OrderReturnServiceCharge,
    "OrderReturnTax": orderReturnTax_1.OrderReturnTax,
    "OrderRoundingAdjustment": orderRoundingAdjustment_1.OrderRoundingAdjustment,
    "OrderServiceCharge": orderServiceCharge_1.OrderServiceCharge,
    "OrderSource": orderSource_1.OrderSource,
    "Refund": refund_1.Refund,
    "RegisterDomainRequest": registerDomainRequest_1.RegisterDomainRequest,
    "RegisterDomainResponse": registerDomainResponse_1.RegisterDomainResponse,
    "RenewTokenRequest": renewTokenRequest_1.RenewTokenRequest,
    "RenewTokenResponse": renewTokenResponse_1.RenewTokenResponse,
    "RetrieveCatalogObjectRequest": retrieveCatalogObjectRequest_1.RetrieveCatalogObjectRequest,
    "RetrieveCatalogObjectResponse": retrieveCatalogObjectResponse_1.RetrieveCatalogObjectResponse,
    "RetrieveCustomerResponse": retrieveCustomerResponse_1.RetrieveCustomerResponse,
    "RetrieveEmployeeResponse": retrieveEmployeeResponse_1.RetrieveEmployeeResponse,
    "RetrieveInventoryAdjustmentResponse": retrieveInventoryAdjustmentResponse_1.RetrieveInventoryAdjustmentResponse,
    "RetrieveInventoryChangesRequest": retrieveInventoryChangesRequest_1.RetrieveInventoryChangesRequest,
    "RetrieveInventoryChangesResponse": retrieveInventoryChangesResponse_1.RetrieveInventoryChangesResponse,
    "RetrieveInventoryCountRequest": retrieveInventoryCountRequest_1.RetrieveInventoryCountRequest,
    "RetrieveInventoryCountResponse": retrieveInventoryCountResponse_1.RetrieveInventoryCountResponse,
    "RetrieveInventoryPhysicalCountResponse": retrieveInventoryPhysicalCountResponse_1.RetrieveInventoryPhysicalCountResponse,
    "RetrieveTransactionResponse": retrieveTransactionResponse_1.RetrieveTransactionResponse,
    "RevokeTokenRequest": revokeTokenRequest_1.RevokeTokenRequest,
    "RevokeTokenResponse": revokeTokenResponse_1.RevokeTokenResponse,
    "SearchCatalogObjectsRequest": searchCatalogObjectsRequest_1.SearchCatalogObjectsRequest,
    "SearchCatalogObjectsResponse": searchCatalogObjectsResponse_1.SearchCatalogObjectsResponse,
    "SearchCustomersRequest": searchCustomersRequest_1.SearchCustomersRequest,
    "SearchCustomersResponse": searchCustomersResponse_1.SearchCustomersResponse,
    "SearchOrdersCustomerFilter": searchOrdersCustomerFilter_1.SearchOrdersCustomerFilter,
    "SearchOrdersDateTimeFilter": searchOrdersDateTimeFilter_1.SearchOrdersDateTimeFilter,
    "SearchOrdersFilter": searchOrdersFilter_1.SearchOrdersFilter,
    "SearchOrdersFulfillmentFilter": searchOrdersFulfillmentFilter_1.SearchOrdersFulfillmentFilter,
    "SearchOrdersQuery": searchOrdersQuery_1.SearchOrdersQuery,
    "SearchOrdersRequest": searchOrdersRequest_1.SearchOrdersRequest,
    "SearchOrdersResponse": searchOrdersResponse_1.SearchOrdersResponse,
    "SearchOrdersSort": searchOrdersSort_1.SearchOrdersSort,
    "SearchOrdersSourceFilter": searchOrdersSourceFilter_1.SearchOrdersSourceFilter,
    "SearchOrdersStateFilter": searchOrdersStateFilter_1.SearchOrdersStateFilter,
    "SearchShiftsRequest": searchShiftsRequest_1.SearchShiftsRequest,
    "SearchShiftsResponse": searchShiftsResponse_1.SearchShiftsResponse,
    "Shift": shift_1.Shift,
    "ShiftFilter": shiftFilter_1.ShiftFilter,
    "ShiftQuery": shiftQuery_1.ShiftQuery,
    "ShiftSort": shiftSort_1.ShiftSort,
    "ShiftWage": shiftWage_1.ShiftWage,
    "ShiftWorkday": shiftWorkday_1.ShiftWorkday,
    "SourceApplication": sourceApplication_1.SourceApplication,
    "StandardUnitDescription": standardUnitDescription_1.StandardUnitDescription,
    "StandardUnitDescriptionGroup": standardUnitDescriptionGroup_1.StandardUnitDescriptionGroup,
    "Tender": tender_1.Tender,
    "TenderCardDetails": tenderCardDetails_1.TenderCardDetails,
    "TenderCashDetails": tenderCashDetails_1.TenderCashDetails,
    "TimeRange": timeRange_1.TimeRange,
    "Transaction": transaction_1.Transaction,
    "UpdateBreakTypeRequest": updateBreakTypeRequest_1.UpdateBreakTypeRequest,
    "UpdateBreakTypeResponse": updateBreakTypeResponse_1.UpdateBreakTypeResponse,
    "UpdateCustomerRequest": updateCustomerRequest_1.UpdateCustomerRequest,
    "UpdateCustomerResponse": updateCustomerResponse_1.UpdateCustomerResponse,
    "UpdateItemModifierListsRequest": updateItemModifierListsRequest_1.UpdateItemModifierListsRequest,
    "UpdateItemModifierListsResponse": updateItemModifierListsResponse_1.UpdateItemModifierListsResponse,
    "UpdateItemTaxesRequest": updateItemTaxesRequest_1.UpdateItemTaxesRequest,
    "UpdateItemTaxesResponse": updateItemTaxesResponse_1.UpdateItemTaxesResponse,
    "UpdateShiftRequest": updateShiftRequest_1.UpdateShiftRequest,
    "UpdateShiftResponse": updateShiftResponse_1.UpdateShiftResponse,
    "UpdateWorkweekConfigRequest": updateWorkweekConfigRequest_1.UpdateWorkweekConfigRequest,
    "UpdateWorkweekConfigResponse": updateWorkweekConfigResponse_1.UpdateWorkweekConfigResponse,
    "UpsertCatalogObjectRequest": upsertCatalogObjectRequest_1.UpsertCatalogObjectRequest,
    "UpsertCatalogObjectResponse": upsertCatalogObjectResponse_1.UpsertCatalogObjectResponse,
    "V1AdjustInventoryRequest": v1AdjustInventoryRequest_1.V1AdjustInventoryRequest,
    "V1BankAccount": v1BankAccount_1.V1BankAccount,
    "V1CashDrawerEvent": v1CashDrawerEvent_1.V1CashDrawerEvent,
    "V1CashDrawerShift": v1CashDrawerShift_1.V1CashDrawerShift,
    "V1Category": v1Category_1.V1Category,
    "V1CreateCategoryRequest": v1CreateCategoryRequest_1.V1CreateCategoryRequest,
    "V1CreateDiscountRequest": v1CreateDiscountRequest_1.V1CreateDiscountRequest,
    "V1CreateEmployeeRoleRequest": v1CreateEmployeeRoleRequest_1.V1CreateEmployeeRoleRequest,
    "V1CreateFeeRequest": v1CreateFeeRequest_1.V1CreateFeeRequest,
    "V1CreateItemRequest": v1CreateItemRequest_1.V1CreateItemRequest,
    "V1CreateModifierListRequest": v1CreateModifierListRequest_1.V1CreateModifierListRequest,
    "V1CreateModifierOptionRequest": v1CreateModifierOptionRequest_1.V1CreateModifierOptionRequest,
    "V1CreatePageRequest": v1CreatePageRequest_1.V1CreatePageRequest,
    "V1CreateRefundRequest": v1CreateRefundRequest_1.V1CreateRefundRequest,
    "V1CreateVariationRequest": v1CreateVariationRequest_1.V1CreateVariationRequest,
    "V1DeletePageCellRequest": v1DeletePageCellRequest_1.V1DeletePageCellRequest,
    "V1Discount": v1Discount_1.V1Discount,
    "V1Employee": v1Employee_1.V1Employee,
    "V1EmployeeRole": v1EmployeeRole_1.V1EmployeeRole,
    "V1Fee": v1Fee_1.V1Fee,
    "V1InventoryEntry": v1InventoryEntry_1.V1InventoryEntry,
    "V1Item": v1Item_1.V1Item,
    "V1ItemImage": v1ItemImage_1.V1ItemImage,
    "V1ListBankAccountsResponse": v1ListBankAccountsResponse_1.V1ListBankAccountsResponse,
    "V1ListCashDrawerShiftsRequest": v1ListCashDrawerShiftsRequest_1.V1ListCashDrawerShiftsRequest,
    "V1ListCashDrawerShiftsResponse": v1ListCashDrawerShiftsResponse_1.V1ListCashDrawerShiftsResponse,
    "V1ListCategoriesResponse": v1ListCategoriesResponse_1.V1ListCategoriesResponse,
    "V1ListDiscountsResponse": v1ListDiscountsResponse_1.V1ListDiscountsResponse,
    "V1ListEmployeeRolesRequest": v1ListEmployeeRolesRequest_1.V1ListEmployeeRolesRequest,
    "V1ListEmployeeRolesResponse": v1ListEmployeeRolesResponse_1.V1ListEmployeeRolesResponse,
    "V1ListEmployeesRequest": v1ListEmployeesRequest_1.V1ListEmployeesRequest,
    "V1ListEmployeesResponse": v1ListEmployeesResponse_1.V1ListEmployeesResponse,
    "V1ListFeesResponse": v1ListFeesResponse_1.V1ListFeesResponse,
    "V1ListInventoryRequest": v1ListInventoryRequest_1.V1ListInventoryRequest,
    "V1ListInventoryResponse": v1ListInventoryResponse_1.V1ListInventoryResponse,
    "V1ListItemsRequest": v1ListItemsRequest_1.V1ListItemsRequest,
    "V1ListItemsResponse": v1ListItemsResponse_1.V1ListItemsResponse,
    "V1ListLocationsResponse": v1ListLocationsResponse_1.V1ListLocationsResponse,
    "V1ListModifierListsResponse": v1ListModifierListsResponse_1.V1ListModifierListsResponse,
    "V1ListOrdersRequest": v1ListOrdersRequest_1.V1ListOrdersRequest,
    "V1ListOrdersResponse": v1ListOrdersResponse_1.V1ListOrdersResponse,
    "V1ListPagesResponse": v1ListPagesResponse_1.V1ListPagesResponse,
    "V1ListPaymentsRequest": v1ListPaymentsRequest_1.V1ListPaymentsRequest,
    "V1ListPaymentsResponse": v1ListPaymentsResponse_1.V1ListPaymentsResponse,
    "V1ListRefundsRequest": v1ListRefundsRequest_1.V1ListRefundsRequest,
    "V1ListRefundsResponse": v1ListRefundsResponse_1.V1ListRefundsResponse,
    "V1ListSettlementsRequest": v1ListSettlementsRequest_1.V1ListSettlementsRequest,
    "V1ListSettlementsResponse": v1ListSettlementsResponse_1.V1ListSettlementsResponse,
    "V1ListTimecardEventsResponse": v1ListTimecardEventsResponse_1.V1ListTimecardEventsResponse,
    "V1ListTimecardsRequest": v1ListTimecardsRequest_1.V1ListTimecardsRequest,
    "V1ListTimecardsResponse": v1ListTimecardsResponse_1.V1ListTimecardsResponse,
    "V1Merchant": v1Merchant_1.V1Merchant,
    "V1MerchantLocationDetails": v1MerchantLocationDetails_1.V1MerchantLocationDetails,
    "V1ModifierList": v1ModifierList_1.V1ModifierList,
    "V1ModifierOption": v1ModifierOption_1.V1ModifierOption,
    "V1Money": v1Money_1.V1Money,
    "V1Order": v1Order_1.V1Order,
    "V1OrderHistoryEntry": v1OrderHistoryEntry_1.V1OrderHistoryEntry,
    "V1Page": v1Page_1.V1Page,
    "V1PageCell": v1PageCell_1.V1PageCell,
    "V1Payment": v1Payment_1.V1Payment,
    "V1PaymentDiscount": v1PaymentDiscount_1.V1PaymentDiscount,
    "V1PaymentItemDetail": v1PaymentItemDetail_1.V1PaymentItemDetail,
    "V1PaymentItemization": v1PaymentItemization_1.V1PaymentItemization,
    "V1PaymentModifier": v1PaymentModifier_1.V1PaymentModifier,
    "V1PaymentSurcharge": v1PaymentSurcharge_1.V1PaymentSurcharge,
    "V1PaymentTax": v1PaymentTax_1.V1PaymentTax,
    "V1PhoneNumber": v1PhoneNumber_1.V1PhoneNumber,
    "V1Refund": v1Refund_1.V1Refund,
    "V1Settlement": v1Settlement_1.V1Settlement,
    "V1SettlementEntry": v1SettlementEntry_1.V1SettlementEntry,
    "V1Tender": v1Tender_1.V1Tender,
    "V1Timecard": v1Timecard_1.V1Timecard,
    "V1TimecardEvent": v1TimecardEvent_1.V1TimecardEvent,
    "V1UpdateCategoryRequest": v1UpdateCategoryRequest_1.V1UpdateCategoryRequest,
    "V1UpdateDiscountRequest": v1UpdateDiscountRequest_1.V1UpdateDiscountRequest,
    "V1UpdateEmployeeRequest": v1UpdateEmployeeRequest_1.V1UpdateEmployeeRequest,
    "V1UpdateEmployeeRoleRequest": v1UpdateEmployeeRoleRequest_1.V1UpdateEmployeeRoleRequest,
    "V1UpdateFeeRequest": v1UpdateFeeRequest_1.V1UpdateFeeRequest,
    "V1UpdateItemRequest": v1UpdateItemRequest_1.V1UpdateItemRequest,
    "V1UpdateModifierListRequest": v1UpdateModifierListRequest_1.V1UpdateModifierListRequest,
    "V1UpdateModifierOptionRequest": v1UpdateModifierOptionRequest_1.V1UpdateModifierOptionRequest,
    "V1UpdateOrderRequest": v1UpdateOrderRequest_1.V1UpdateOrderRequest,
    "V1UpdatePageCellRequest": v1UpdatePageCellRequest_1.V1UpdatePageCellRequest,
    "V1UpdatePageRequest": v1UpdatePageRequest_1.V1UpdatePageRequest,
    "V1UpdateTimecardRequest": v1UpdateTimecardRequest_1.V1UpdateTimecardRequest,
    "V1UpdateVariationRequest": v1UpdateVariationRequest_1.V1UpdateVariationRequest,
    "V1Variation": v1Variation_1.V1Variation,
    "VoidTransactionResponse": voidTransactionResponse_1.VoidTransactionResponse,
    "WorkweekConfig": workweekConfig_1.WorkweekConfig,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map