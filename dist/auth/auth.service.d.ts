import { ValidateResponse } from './auth.pb';
export declare class AuthService {
    private svc;
    private readonly client;
    onModuleInit(): void;
    validate(token: string): Promise<ValidateResponse>;
}
