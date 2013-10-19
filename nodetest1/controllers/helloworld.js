
/*
 * GET helloworld page.
 */

exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello world!' });
};