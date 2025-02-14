import { RouteNames } from "./RouteNames";

export type AuthStackParamList = {
    [K in keyof typeof RouteNames]: undefined;
};