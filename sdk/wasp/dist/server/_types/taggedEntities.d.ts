import { type Entity, type EntityName, type User, type Task, type Tag, type Child, type Check } from 'wasp/entities';
export type _User = WithName<User, "User">;
export type _Task = WithName<Task, "Task">;
export type _Tag = WithName<Tag, "Tag">;
export type _Child = WithName<Child, "Child">;
export type _Check = WithName<Check, "Check">;
export type _Entity = _User | _Task | _Tag | _Child | _Check | never;
type WithName<E extends Entity, Name extends EntityName> = E & {
    _entityName: Name;
};
export {};
//# sourceMappingURL=taggedEntities.d.ts.map