import { type _Task, type _Tag, type _Child, type _Check, type AuthenticatedActionDefinition, type Payload } from 'wasp/server/_types';
export type CreateTask<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedActionDefinition<[
    _Task
], Input, Output>;
export type UpdateTaskStatus<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedActionDefinition<[
    _Task
], Input, Output>;
export type DeleteCompletedTasks<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedActionDefinition<[
    _Task
], Input, Output>;
export type CreateTag<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedActionDefinition<[
    _Tag
], Input, Output>;
export type CreateChild<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedActionDefinition<[
    _Child
], Input, Output>;
export type CreateCheck<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedActionDefinition<[
    _Check
], Input, Output>;
//# sourceMappingURL=types.d.ts.map