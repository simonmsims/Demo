var BaseController = require("./base"),
  View = require("../views/base/base.js"),
  model = new (require("../models/contentModel")),
  crypto = require("crypto"),
  fs = require("fs");

module.exports = BaseController.extend({
  name: "Admin",
  username: "admin",
  password: "admin",

  get: function(req, res, next) {
    if(this.authorize(req)) {
      model.setDB(req.db);
      req.session.fastdelivery = true;
      req.session.save();
      var v = new View(res, 'admin');
      v.render({
        title: 'Administration',
        content: 'Welcome to the control panel by get'
      });
    } else {
      var v = new View(res, 'admin-login');
      v.render({
      title: 'Please login'
      });
    }
  },

  post: function(req, res, next) {
    if(this.authorize(req)) {
      model.setDB(req.db);
      req.session.fastdelivery = true;
      req.session.save();
      var v = new View(res, 'admin');
      v.render({
        title: 'Administration',
        content: 'Welcome to the control panel by post'
      });
    } else {
      var v = new View(res, 'admin-login');
      v.render({
        title: 'Please login'
      });
    }
  },

  authorize: function(req) {
    return (
      req.session &&
        req.session.fastdelivery &&
        req.session.fastdelivery === true
      ) || (
      req.body &&
        req.body.username === this.username &&
        req.body.password === this.password
      );
  },

  handleFileUpload: function(req) {
    if(!req.files || !req.files.picture || !req.files.picture.name) {
      return req.body.currentPicture || '';
    }
    var data = fs.readFileSync(req.files.picture.path);
    var fileName = req.files.picture.name;
    var uid = crypto.randomBytes(10).toString('hex');
    var dir = __dirname + "/../public/uploads/" + uid;
    fs.mkdirSync(dir, '0777');
    fs.writeFileSync(dir + "/" + fileName, data);
    return '/uploads/' + uid + "/" + fileName;
  }
});