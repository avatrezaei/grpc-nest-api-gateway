"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const auth_pb_1 = require("./auth.pb");
let AuthService = class AuthService {
    onModuleInit() {
        this.svc = this.client.getService(auth_pb_1.AUTH_SERVICE_NAME);
    }
    async validate(token) {
        return (0, rxjs_1.firstValueFrom)(this.svc.validate({ token }));
    }
};
__decorate([
    (0, common_1.Inject)(auth_pb_1.AUTH_SERVICE_NAME),
    __metadata("design:type", Object)
], AuthService.prototype, "client", void 0);
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map