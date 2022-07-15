"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_SERVICE_NAME = exports.ProductServiceControllerMethods = exports.PRODUCT_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
const minimal_1 = require("protobufjs/minimal");
const Long = require("long");
exports.protobufPackage = 'product';
exports.PRODUCT_PACKAGE_NAME = 'product';
function ProductServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ['createProduct', 'findOne', 'decreaseStock'];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)('ProductService', method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)('ProductService', method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.ProductServiceControllerMethods = ProductServiceControllerMethods;
exports.PRODUCT_SERVICE_NAME = 'ProductService';
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
//# sourceMappingURL=product.pb.js.map