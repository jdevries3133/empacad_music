export default (_, res) => {
  res.status(200).json([
    {
      name: "Flute",
      current: 1,
      target: 3,
    },
    {
      name: "Clarinet",
      current: 0,
      target: 3,
    },
    {
      name: "Alto Saxophone",
      current: 0,
      target: 3,
    },
    {
      name: "Trumpet",
      current: 0,
      target: 3,
    },
    {
      name: "Trombone",
      current: 1,
      target: 3,
    },
    {
      name: "Drumset",
      current: 0,
      target: 1,
    },
  ]);
};
