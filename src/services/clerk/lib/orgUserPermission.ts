import { auth } from "@clerk/nextjs/server";

type UserPermission =
  | "job_listings:job_listing_create"
  | "job_listings:job_listing_update"
  | "job_listings:job_listing_delete"
  | "job_listings:job_listing_change_status"
  | "job_listing_applications:applicant_change_rating"
  | "job_listing_applications:applicant_change_stage";

export async function hasOrgUserPermission(permission: UserPermission) {
  const { has } = await auth();
  return has({ permission });
}
