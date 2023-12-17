export const getDateFormat = (createdAt) => {
  const serverDate = new Date(createdAt);

  const dateString = serverDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dateNoYear = serverDate.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });

  const dayName = serverDate.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  const time = serverDate.toLocaleTimeString("en-US", options);

  return { dateString, dateNoYear, dayName, time };
};
