var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/home.html"));
  });
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/home.html"));
  });
  app.get("/current-projects", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/currentProjects.html"));
  });
  app.get("/climate-chaos", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/climateChaos.html"));
  });
  app.get("/press", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/press.html"));
  });
  app.get("/articles", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/articles.html"));
  });
};
