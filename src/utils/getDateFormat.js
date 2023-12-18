export const getDateFormat = (createdAt) => {
  const serverDate = new Date(createdAt);

  const dateString = serverDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dateNoDay = serverDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
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

  return { dateString, dateNoDay, dateNoYear, dayName, time };
};
