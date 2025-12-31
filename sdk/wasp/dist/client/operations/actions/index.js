import { createAction } from './core';
// PUBLIC API
export const createTask = createAction('operations/create-task', ['Task']);
// PUBLIC API
export const updateTaskStatus = createAction('operations/update-task-status', ['Task']);
// PUBLIC API
export const deleteCompletedTasks = createAction('operations/delete-completed-tasks', ['Task']);
// PUBLIC API
export const createTag = createAction('operations/create-tag', ['Tag']);
// PUBLIC API
export const createChild = createAction('operations/create-child', ['Child']);
// PUBLIC API
export const createCheck = createAction('operations/create-check', ['Check']);
//# sourceMappingURL=index.js.map