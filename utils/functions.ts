export function formatDate(date: string) {
  const formattedDate = new Date(date);
  return `${formattedDate.getDate()}.${
    formattedDate.getMonth() + 1
  }.${formattedDate.getFullYear()}`;
}
