import { getGlobalTag, getIdTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getUserNotificationSettingsGlobalTag() {
  return getGlobalTag("userNotificationSettings");
}

export function getUserNotificationSettingsIdTag(id: string) {
  return getIdTag("userNotificationSettings", id);
}

export function revalidateUserNotificationSettingsCache(id: string) {
  revalidateTag(getUserNotificationSettingsGlobalTag(), "default");
  revalidateTag(getUserNotificationSettingsIdTag(id), "default");
}
