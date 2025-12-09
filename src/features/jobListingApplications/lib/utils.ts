import { ApplicationStage } from "@/drizzle/schema";

export function sortApplicationsByStage(
  a: ApplicationStage,
  b: ApplicationStage
) {
  return JOB_LISTING_STAGE_SORT_ORDER[a] - JOB_LISTING_STAGE_SORT_ORDER[b];
}

const JOB_LISTING_STAGE_SORT_ORDER: Record<ApplicationStage, number> = {
  applied: 0,
  interested: 1,
  interviewed: 2,
  hired: 3,
  denied: 4,
};
