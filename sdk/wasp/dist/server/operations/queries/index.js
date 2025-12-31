import { prisma } from 'wasp/server';
import { createAuthenticatedOperation, } from '../wrappers.js';
import { getTasks as getTasks_ext } from 'wasp/src/tasks/queries';
import { getTags as getTags_ext } from 'wasp/src/tags/queries';
import { getChildren as getChildren_ext } from 'wasp/src/children/queries';
import { getChild as getChild_ext } from 'wasp/src/children/queries';
import { getChildChecks as getChildChecks_ext } from 'wasp/src/children/queries';
// PUBLIC API
export const getTasks = createAuthenticatedOperation(getTasks_ext, {
    Task: prisma.task,
    Tag: prisma.tag,
});
// PUBLIC API
export const getTags = createAuthenticatedOperation(getTags_ext, {
    Tag: prisma.tag,
});
// PUBLIC API
export const getChildren = createAuthenticatedOperation(getChildren_ext, {
    Child: prisma.child,
});
// PUBLIC API
export const getChild = createAuthenticatedOperation(getChild_ext, {
    Child: prisma.child,
});
// PUBLIC API
export const getChildChecks = createAuthenticatedOperation(getChildChecks_ext, {
    Check: prisma.check,
});
//# sourceMappingURL=index.js.map