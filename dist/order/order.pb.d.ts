import { Observable } from 'rxjs';
export declare const protobufPackage = "order";
export interface CreateOrderRequest {
    productId: number;
    quantity: number;
    userId: number;
}
export interface CreateOrderResponse {
    status: number;
    error: string[];
    id: number;
}
export declare const ORDER_PACKAGE_NAME = "order";
export interface OrderServiceClient {
    createOrder(request: CreateOrderRequest): Observable<CreateOrderResponse>;
}
export interface OrderServiceController {
    createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> | Observable<CreateOrderResponse> | CreateOrderResponse;
}
export declare function OrderServiceControllerMethods(): (constructor: Function) => void;
export declare const ORDER_SERVICE_NAME = "OrderService";
