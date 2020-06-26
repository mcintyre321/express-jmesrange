var mung = require('express-mung');
var jmespath = require('jmespath');
function modify(body, req, res, next) {
    //TODO: if Content-TYpe is application/json, add jmesrange to accept header (see https://github.com/purposeindustries/express-range/blob/master/index.js)
    if (body && req.headers["range"] && req.headers["range"].startsWith("jmesrange ")) {
        var filter = req.headers["range"].substring(10);
        if (filter) {
            res.statusCode = 206;
            res.setHeader('Content-Range', filter);
            return jmespath.search(body, filter);
        }
    }
    return body;
}
module.exports = mung.json(modify);
//# sourceMappingURL=index.js.map