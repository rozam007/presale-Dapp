export function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export const dateToUnix = (date) => {
  const newDate = new Date(date);
  return Math.floor(newDate.getTime() / 1000)
}