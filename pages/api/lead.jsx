export default (req, res) => {
  res.status(201).json({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    instrument: { name: req.body.instrument.name },
  });
};
