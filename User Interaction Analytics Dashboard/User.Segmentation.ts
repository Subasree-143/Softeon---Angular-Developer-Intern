getEventsByUser(userId: string) {
  return this.tracking.getEvents()
    .filter(e => e.userId === userId);
}