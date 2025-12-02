import {
  ExperienceLevel,
  JobListingStatus,
  JobListingType,
  LocationRequirement,
  WageInterval,
} from "@/drizzle/schema";

export function formatWageInterval(interval: WageInterval) {
  switch (interval) {
    case "hourly":
      return "Hour";
    case "yearly":
      return "Year";
    default:
      throw new Error(`Invalid wage interval : ${interval satisfies never}`);
  }
}
export function formatLocationRequirement(
  locationRequirement: LocationRequirement
) {
  switch (locationRequirement) {
    case "remote":
      return "Remote";
    case "in-office":
      return "In Office / On Site";
    case "hybrid":
      return "Hybrid / Flexible";
    default:
      throw new Error(
        `Invalid location Requirement : ${locationRequirement satisfies never}`
      );
  }
}
export function formatJobType(type: JobListingType) {
  switch (type) {
    case "full-time":
      return "Full-Time";
    case "internship":
      return "Internship";
    case "part-time":
      return "Part-Time";
    default:
      throw new Error(`Invalid job type : ${type satisfies never}`);
  }
}
export function formatExperienceLevel(level: ExperienceLevel) {
  switch (level) {
    case "junior":
      return "Junior / Fresh Graduates";
    case "mid-level":
      return "Mid-Level";
    case "senior":
      return "Senior";
    default:
      throw new Error(`Invalid job type : ${level satisfies never}`);
  }
}
export function formatJobListingStatus(status: JobListingStatus) {
  switch (status) {
    case "delisted":
      return "Delisted";
    case "draft":
      return "Draft";
    case "published":
      return "Active";
    default:
      throw new Error(`Invalid job status : ${status satisfies never}`);
  }
}
export function formatWage(wage: number, wageInterval: WageInterval) {
  const wageFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  switch (wageInterval) {
    case "hourly": {
      return `${wageFormatter.format(wage)}`;
    }
    case "yearly": {
      return `${wageFormatter.format(wage)}`;
    }
    default:
      throw new Error(
        `Unknown wage interval : ${wageInterval satisfies never}`
      );
  }
}
export function formatJobListingLocation({
  stateAbbreviation,
  city,
}: {
  stateAbbreviation: string | null;
  city: string | null;
}) {
  if (stateAbbreviation == null && city == null) {
    return "None";
  }
  const locationParts = [];
  if (city != null) {
    locationParts.push(city);
  }
  if (stateAbbreviation != null) {
    locationParts.push(stateAbbreviation.toUpperCase());
  }
  return locationParts.join(", ");
}
