export function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export const dateToUnix = (date) => {
  const newDate = new Date(date);
  return Math.floor(newDate.getTime() / 1000)
}

export const formatUnixTimestamp = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}