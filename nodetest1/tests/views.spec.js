/*
 * Views tests.
 */

var View = require("../views/base/base.js");
describe("Base view", function() {
  it("create and render new view", function(next) {
    var responseMock = {
      render: function(template, data) {
        expect(template).toBe('template-file');
        expect(data.myProperty).toBe('value');
        next();
      }
    };
    var v = new View(responseMock, 'template-file');
    v.render({myProperty: 'value'});
  });
  it("should be extensible", function(next) {
    var v = new View();
    var OtherView = v.extend({
      render: function(data) {
        expect(data.prop).toBe('yes');
        next();
      }
    });
    var otherViewInstance = new OtherView();
    expect(otherViewInstance.render).toBeDefined();
    otherViewInstance.render({prop: 'yes'});
  });
});