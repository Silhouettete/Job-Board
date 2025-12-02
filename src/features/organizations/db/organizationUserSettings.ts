import { db } from "@/drizzle/db";
import { OrganizationUserSettingsTable } from "@/drizzle/schema";
import { revalidateOrganizationUserSettingsCache } from "./cache/organizationsUserSettings";

export async function insertOrganizationUserSettings(
  settings: typeof OrganizationUserSettingsTable.$inferInsert
) {
  const [newSettings] = await db
    .insert(OrganizationUserSettingsTable)
    .values(settings)
    .onConflictDoNothing()
    .returning({
      userId: OrganizationUserSettingsTable.userId,
      organizationId: OrganizationUserSettingsTable.organizationId,
    });
  revalidateOrganizationUserSettingsCache(newSettings);
}

export async function deleteOrganizationUserSettings(
  settings: typeof OrganizationUserSettingsTable.$inferInsert
) {
  const [newSettings] = await db
    .insert(OrganizationUserSettingsTable)
    .values(settings)
    .onConflictDoNothing()
    .returning({
      userId: OrganizationUserSettingsTable.userId,
      organizationId: OrganizationUserSettingsTable.organizationId,
    });
  revalidateOrganizationUserSettingsCache(newSettings);
}
