var mung = require('express-mung');
var jmespath = require('jmespath');
function modify(body, req, res, next) {
    if (body && req.headers["accept-ranges"] === "jmespath") {
        var filter = req.headers["content-range"].substring(9);
        if (filter) {
            res.statusCode = 206;
            return jmespath.search(body, filter);
        }
    }
    return body;
}
module.exports = mung.json(modify);
//# sourceMappingURL=JMESRange.js.map