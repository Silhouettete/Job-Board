import { db } from "@/drizzle/db";
import { OrganizationUserSettingsTable } from "@/drizzle/schema";
import { revalidateOrganizationUserSettingsCache } from "./cache/organizationsUserSettings";
import { and, eq } from "drizzle-orm";

export async function insertOrganizationUserSettings(
  settings: typeof OrganizationUserSettingsTable.$inferInsert
) {
  const [newSettings] = await db
    .insert(OrganizationUserSettingsTable)
    .values(settings)
    .onConflictDoNothing();

  revalidateOrganizationUserSettingsCache(newSettings);
}

export async function deleteOrganizationUserSettings({
  userId,
  organizationId,
}: {
  userId: string;
  organizationId: string;
}) {
  await db
    .delete(OrganizationUserSettingsTable)
    .where(
      and(
        eq(OrganizationUserSettingsTable.userId, userId),
        eq(OrganizationUserSettingsTable.organizationId, organizationId)
      )
    );
  revalidateOrganizationUserSettingsCache({ userId, organizationId });
}
export async function updateOrganizationUserSettings(
  {
    userId,
    organizationId,
  }: {
    userId: string;
    organizationId: string;
  },
  settings: Partial<
    Omit<
      typeof OrganizationUserSettingsTable.$inferInsert,
      "userId" | "organizationId"
    >
  >
) {
  await db
    .insert(OrganizationUserSettingsTable)
    .values({ ...settings, userId, organizationId })
    .onConflictDoUpdate({
      target: [
        OrganizationUserSettingsTable.userId,
        OrganizationUserSettingsTable.organizationId,
      ],
      set: settings,
    });
  revalidateOrganizationUserSettingsCache({ userId, organizationId });
}
