import { prisma } from 'wasp/server'

import { getChild } from '../../../../../src/children/queries'


export default async function (args, context) {
  return (getChild as any)(args, {
    ...context,
    entities: {
      Child: prisma.child,
    },
  })
}
