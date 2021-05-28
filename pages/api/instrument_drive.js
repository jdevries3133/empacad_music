export default (req, res) => {
  res.status(200).json([
    {
      name: "Flute",
      current: 1,
      target: 2,
    },
    {
      name: "Clarinet",
      current: 0,
      target: 2,
    },
    {
      name: "Alto Saxophone",
      current: 0,
      target: 2,
    },
    {
      name: "Trumpet",
      current: 0,
      target: 2,
    },
    {
      name: "Trombone",
      current: 1,
      target: 2,
    },
    {
      name: "Drumset",
      current: 0,
      target: 1,
    },
  ]);
};
