const getUpcomingCourseDates = (data) => {
  // from rocket's gcal events
  const { edges } = data.allCalendarEvent;

  const today = new Date().toISOString();

  return edges.filter((event) => event.node.start.dateTime > today);
};

export default getUpcomingCourseDates;
