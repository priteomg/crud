function mustBeInteger(req, res, next) {
  const id = req.params.id;
  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({
      message: "ID must be integer",
    });
  } else {
    next();
  }
}

function checkFieldPost(req, res, next) {
  const { title, content, author } = req.body;

  if (title && content && author) {
    next();
  } else {
    res.status(400).json({ message: "fields are not good" });
  }
}

module.exports = {
  mustBeInteger,
  checkFieldPost,
};
