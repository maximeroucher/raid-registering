import { differenceInDays, format } from "date-fns";
import { fr } from "date-fns/locale";

export function getDaysLeft(dateString: string) {
  const date = new Date(dateString).setHours(0, 0, 0, 0);
  const now = new Date().setHours(0, 0, 0, 0);
  return differenceInDays(date, now);
}

export function formatDate(date: string) {
  return format(new Date(date), "PPP", { locale: fr });
}

export function formatDateRange(start: string, end: string) {
  const startDateDay = format(new Date(start), "dd", { locale: fr });
  const startDateMonth = format(new Date(start), "MMMM", { locale: fr });
  const endDateDay = format(new Date(end), "dd", { locale: fr });
  const endDateMonth = format(new Date(end), "MMMM", { locale: fr });
  const startDateYear = format(new Date(start), "yyyy", { locale: fr });
  const endDateYear = format(new Date(end), "yyyy", { locale: fr });
  if (startDateYear !== endDateYear) {
    return `${startDateDay} ${startDateMonth} ${startDateYear} - ${endDateDay} ${endDateMonth} ${endDateYear}`;
  }
  if (startDateMonth !== endDateMonth) {
    return `${startDateDay} ${startDateMonth} - ${endDateDay} ${endDateMonth} ${startDateYear}`;
  }
  return `${startDateDay} - ${endDateDay} ${startDateMonth} ${startDateYear}`;
}
