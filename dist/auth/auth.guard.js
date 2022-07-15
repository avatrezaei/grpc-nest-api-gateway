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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
let AuthGuard = class AuthGuard {
    async canActivate(ctx) {
        const req = ctx.switchToHttp().getRequest();
        const authorization = req.headers['authorization'];
        if (!authorization) {
            throw new common_1.UnauthorizedException();
        }
        const bearer = authorization.split(' ');
        if (!bearer || bearer.length < 2) {
            throw new common_1.UnauthorizedException();
        }
        const token = bearer[1];
        const { status, userId } = await this.service.validate(token);
        req.user = userId;
        if (status !== common_1.HttpStatus.OK) {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
};
__decorate([
    (0, common_1.Inject)(auth_service_1.AuthService),
    __metadata("design:type", auth_service_1.AuthService)
], AuthGuard.prototype, "service", void 0);
AuthGuard = __decorate([
    (0, common_1.Injectable)()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map