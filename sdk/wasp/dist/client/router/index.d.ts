import type { RouteDefinitionsToRoutes, OptionalRouteOptions, ParamValue } from './types';
export declare const routes: {
    readonly LoginRoute: {
        readonly to: "/login";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly SignupRoute: {
        readonly to: "/signup";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly RequestPasswordResetRoute: {
        readonly to: "/request-password-reset";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly PasswordResetRoute: {
        readonly to: "/password-reset";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly EmailVerificationRoute: {
        readonly to: "/email-verification";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly TasksRoute: {
        readonly to: "/";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly ChildrenRoute: {
        readonly to: "/children";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly ChildRoute: {
        readonly to: "/children/:id";
        readonly build: (options: OptionalRouteOptions & {
            params: {
                "id": ParamValue;
            };
        }) => string;
    };
};
export type Routes = RouteDefinitionsToRoutes<typeof routes>;
export { Link } from './Link';
//# sourceMappingURL=index.d.ts.map