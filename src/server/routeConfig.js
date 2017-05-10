import path from 'path';

class RouteConfig {
  static register(app) {
    //set routes on app here
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, "../client/index.html"));
    })
  }
}

export { RouteConfig }
