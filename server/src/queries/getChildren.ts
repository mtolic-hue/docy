import { prisma } from 'wasp/server'

import { getChildren } from '../../../../../src/children/queries'


export default async function (args, context) {
  return (getChildren as any)(args, {
    ...context,
    entities: {
      Child: prisma.child,
    },
  })
}
