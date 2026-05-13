getEventsLast24Hours() {
  const now = Date.now();
  return this.tracking.getEvents()
    .filter(e => now - e.timestamp < 86400000);
}