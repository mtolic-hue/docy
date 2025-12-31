import { prisma } from 'wasp/server'

import { createChild } from '../../../../../src/children/actions'


export default async function (args, context) {
  return (createChild as any)(args, {
    ...context,
    entities: {
      Child: prisma.child,
    },
  })
}
