import { type User, type Task, type Tag, type Child, type Check } from "@prisma/client";
export { type User, type Task, type Tag, type Child, type Check, type Auth, type AuthIdentity, } from "@prisma/client";
export type Entity = User | Task | Tag | Child | Check | never;
export type EntityName = "User" | "Task" | "Tag" | "Child" | "Check" | never;
//# sourceMappingURL=index.d.ts.map