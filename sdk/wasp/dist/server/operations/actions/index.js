import { prisma } from 'wasp/server';
import { createAuthenticatedOperation, } from '../wrappers.js';
import { createTask as createTask_ext } from 'wasp/src/tasks/actions';
import { updateTaskStatus as updateTaskStatus_ext } from 'wasp/src/tasks/actions';
import { deleteCompletedTasks as deleteCompletedTasks_ext } from 'wasp/src/tasks/actions';
import { createTag as createTag_ext } from 'wasp/src/tags/actions';
import { createChild as createChild_ext } from 'wasp/src/children/actions';
import { createCheck as createCheck_ext } from 'wasp/src/children/actions';
// PUBLIC API
export const createTask = createAuthenticatedOperation(createTask_ext, {
    Task: prisma.task,
});
// PUBLIC API
export const updateTaskStatus = createAuthenticatedOperation(updateTaskStatus_ext, {
    Task: prisma.task,
});
// PUBLIC API
export const deleteCompletedTasks = createAuthenticatedOperation(deleteCompletedTasks_ext, {
    Task: prisma.task,
});
// PUBLIC API
export const createTag = createAuthenticatedOperation(createTag_ext, {
    Tag: prisma.tag,
});
// PUBLIC API
export const createChild = createAuthenticatedOperation(createChild_ext, {
    Child: prisma.child,
});
// PUBLIC API
export const createCheck = createAuthenticatedOperation(createCheck_ext, {
    Check: prisma.check,
});
//# sourceMappingURL=index.js.map