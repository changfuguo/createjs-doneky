require('babel-core/register')({
  presets: ['es2015-node5', 'stage-3']
});
var koa = require('koa');
var app = module.exports = new koa();
var path = require('path');

var co = require('co');
var  render = require('koa-ejs');
var options = {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
};

app.context.render = co.wrap(app.context.render);
var staticCache = require('koa-static-cache')

app.use(staticCache(path.join(__dirname, 'public'), {
  maxAge: 365 * 24 * 60 * 60
}))
render(app, options);
app.use(function *(){
 	yield this.render('_test');
});

if (!module.parent) app.listen(3000);