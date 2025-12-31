import { createQuery } from './core';
// PUBLIC API
export const getTasks = createQuery('operations/get-tasks', ['Task', 'Tag']);
// PUBLIC API
export const getTags = createQuery('operations/get-tags', ['Tag']);
// PUBLIC API
export const getChildren = createQuery('operations/get-children', ['Child']);
// PUBLIC API
export const getChild = createQuery('operations/get-child', ['Child']);
// PUBLIC API
export const getChildChecks = createQuery('operations/get-child-checks', ['Check']);
// PRIVATE API (used in SDK)
export { buildAndRegisterQuery } from './core';
//# sourceMappingURL=index.js.map