
import { prisma } from 'wasp/server'
import {
  type UnauthenticatedOperationFor,
  createUnauthenticatedOperation,
  type AuthenticatedOperationFor,
  createAuthenticatedOperation,
} from '../wrappers.js'
import { getTasks as getTasks_ext } from 'wasp/src/tasks/queries'
import { getTags as getTags_ext } from 'wasp/src/tags/queries'
import { getChildren as getChildren_ext } from 'wasp/src/children/queries'
import { getChild as getChild_ext } from 'wasp/src/children/queries'
import { getChildChecks as getChildChecks_ext } from 'wasp/src/children/queries'

// PRIVATE API
export type GetTasks_ext = typeof getTasks_ext

// PUBLIC API
export const getTasks: AuthenticatedOperationFor<GetTasks_ext> =
  createAuthenticatedOperation(
    getTasks_ext,
    {
      Task: prisma.task,
      Tag: prisma.tag,
    },
  )


// PRIVATE API
export type GetTags_ext = typeof getTags_ext

// PUBLIC API
export const getTags: AuthenticatedOperationFor<GetTags_ext> =
  createAuthenticatedOperation(
    getTags_ext,
    {
      Tag: prisma.tag,
    },
  )


// PRIVATE API
export type GetChildren_ext = typeof getChildren_ext

// PUBLIC API
export const getChildren: AuthenticatedOperationFor<GetChildren_ext> =
  createAuthenticatedOperation(
    getChildren_ext,
    {
      Child: prisma.child,
    },
  )


// PRIVATE API
export type GetChild_ext = typeof getChild_ext

// PUBLIC API
export const getChild: AuthenticatedOperationFor<GetChild_ext> =
  createAuthenticatedOperation(
    getChild_ext,
    {
      Child: prisma.child,
    },
  )


// PRIVATE API
export type GetChildChecks_ext = typeof getChildChecks_ext

// PUBLIC API
export const getChildChecks: AuthenticatedOperationFor<GetChildChecks_ext> =
  createAuthenticatedOperation(
    getChildChecks_ext,
    {
      Check: prisma.check,
    },
  )

