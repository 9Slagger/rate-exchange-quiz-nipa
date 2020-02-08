module.exports = {
  getStatus: (req, res, next) => {
    res.status(200).json({message: "server online"})
  }
}