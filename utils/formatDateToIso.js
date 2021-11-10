import { formatISO } from "date-fns";

export function formatDateToIso(date) {
  const data = formatISO(new Date(date));
  return data;
}
