// in any component
constructor(private tracking: TrackingService) {}

onButtonClick() {
  this.tracking.track({
    userId: 'user1',
    action: 'click_button',
    page: 'dashboard',
    timestamp: Date.now()
  });
}