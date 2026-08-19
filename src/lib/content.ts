import siteData from "@/content/site.json";
import teamData from "@/content/team.json";
import eventsData from "@/content/events.json";
import journalData from "@/content/journal.json";
import joinData from "@/content/join.json";
import clinicData from "@/content/clinic.json";

export type SiteContent = typeof siteData;
export type TeamContent = typeof teamData;
export type EventsContent = typeof eventsData;
export type JournalContent = typeof journalData;
export type JoinContent = typeof joinData;
export type ClinicContent = typeof clinicData;

export function getSiteContent(): SiteContent {
  return siteData;
}

export function getTeamContent(): TeamContent {
  return teamData;
}

export function getEventsContent(): EventsContent {
  return eventsData;
}

export function getJournalContent(): JournalContent {
  return journalData;
}

export function getJoinContent(): JoinContent {
  return joinData;
}

export function getClinicContent(): ClinicContent {
  return clinicData;
}
