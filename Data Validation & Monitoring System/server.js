// server.js
app.post('/validate', (req, res) => {
  const events = req.body;

  const invalid = events.filter(e => !e.userId || !e.eventType);

  res.json({
    total: events.length,
    invalid: invalid.length
  });
});