import { type ActionFor } from './core';
import { CreateTask_ext } from 'wasp/server/operations/actions';
import { UpdateTaskStatus_ext } from 'wasp/server/operations/actions';
import { DeleteCompletedTasks_ext } from 'wasp/server/operations/actions';
import { CreateTag_ext } from 'wasp/server/operations/actions';
import { CreateChild_ext } from 'wasp/server/operations/actions';
import { CreateCheck_ext } from 'wasp/server/operations/actions';
export declare const createTask: ActionFor<CreateTask_ext>;
export declare const updateTaskStatus: ActionFor<UpdateTaskStatus_ext>;
export declare const deleteCompletedTasks: ActionFor<DeleteCompletedTasks_ext>;
export declare const createTag: ActionFor<CreateTag_ext>;
export declare const createChild: ActionFor<CreateChild_ext>;
export declare const createCheck: ActionFor<CreateCheck_ext>;
//# sourceMappingURL=index.d.ts.map