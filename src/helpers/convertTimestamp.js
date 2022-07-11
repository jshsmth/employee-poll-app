// unix timestamp to date
export const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const dateString = date.toLocaleDateString();
  return dateString;
};
