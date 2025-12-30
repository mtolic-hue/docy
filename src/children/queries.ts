import { Child, Check } from "wasp/entities";
import { HttpError } from "wasp/server";
import { type GetChildren, type GetChildChecks } from "wasp/server/operations";

export const getChildren: GetChildren<void, Child[]> = (_args, context) => {
  if (!context.user) throw new HttpError(401);

  return context.entities.Child.findMany({
    where: { userId: context.user.id },
    orderBy: { createdAt: "desc" },
  });
};

export const getChildChecks: GetChildChecks<{ childId: string; limit?: number }, Check[]> = (
  { childId, limit = 20 },
  context,
) => {
  if (!context.user) throw new HttpError(401);

  return context.entities.Check.findMany({
    where: { childId },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
};

export const getChild = async ({ id }: { id: string }, context: any) => {
  if (!context.user) throw new HttpError(401);
  return context.entities.Child.findUnique({ where: { id } });
};
