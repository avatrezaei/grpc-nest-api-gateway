"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_SERVICE_NAME = exports.OrderServiceControllerMethods = exports.ORDER_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
const minimal_1 = require("protobufjs/minimal");
const Long = require("long");
exports.protobufPackage = 'order';
exports.ORDER_PACKAGE_NAME = 'order';
function OrderServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ['createOrder'];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)('OrderService', method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)('OrderService', method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.OrderServiceControllerMethods = OrderServiceControllerMethods;
exports.ORDER_SERVICE_NAME = 'OrderService';
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
//# sourceMappingURL=order.pb.js.map