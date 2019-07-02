const mockIndexData = require("./mock/index.json"),
      mockCityData = require("./mock/city.json"),
      mockDetailData = require("./mock/detail.json")

module.exports = {
  //...  
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/index", (req, res) => {
        res.json(mockIndexData);
      });
      app.get("/api/city", (req, res) => {
        res.json(mockCityData);
      });
      app.get("/api/detail", (req, res) => {
        res.json(mockDetailData);
      });
    }
  }
};