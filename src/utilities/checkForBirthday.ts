export default function checkForBirthday(date1: string, date2: string) {
  return date1.slice(4, 10) === date2.slice(4, 10);
}
