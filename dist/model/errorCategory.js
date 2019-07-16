"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCategory;
(function (ErrorCategory) {
    ErrorCategory[ErrorCategory["APIERROR"] = 'API_ERROR'] = "APIERROR";
    ErrorCategory[ErrorCategory["AUTHENTICATIONERROR"] = 'AUTHENTICATION_ERROR'] = "AUTHENTICATIONERROR";
    ErrorCategory[ErrorCategory["INVALIDREQUESTERROR"] = 'INVALID_REQUEST_ERROR'] = "INVALIDREQUESTERROR";
    ErrorCategory[ErrorCategory["RATELIMITERROR"] = 'RATE_LIMIT_ERROR'] = "RATELIMITERROR";
    ErrorCategory[ErrorCategory["PAYMENTMETHODERROR"] = 'PAYMENT_METHOD_ERROR'] = "PAYMENTMETHODERROR";
    ErrorCategory[ErrorCategory["REFUNDERROR"] = 'REFUND_ERROR'] = "REFUNDERROR";
})(ErrorCategory = exports.ErrorCategory || (exports.ErrorCategory = {}));
//# sourceMappingURL=errorCategory.js.map