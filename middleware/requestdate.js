//middleware to print response data in console
const printDate = [
  (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
    next();
  },
];

export default printDate;
