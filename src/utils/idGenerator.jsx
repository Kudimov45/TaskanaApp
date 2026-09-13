const idGenerator = () => {
  let id = Math.round(Math.random() * 100000000);
  if (id / 10000000 < 1) {
    id *= 10;
  }
  return id;
};

export default idGenerator;
