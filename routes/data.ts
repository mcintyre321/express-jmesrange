/*
 * GET data listing.
 */
import express = require('express');
const router = express.Router();
import jmespath = require("jmespath");

router.get('/', (req: express.Request, res: express.Response) => {
    let body = {
        "locations": [
            { "name": "Seattle", "state": "WA" },
            { "name": "New York", "state": "NY" },
            { "name": "Bellevue", "state": "WA" },
            { "name": "Olympia", "state": "WA" }
        ]
    };

    if (req.headers["accept-ranges"] == "jmespath") {
        var filter = req.headers["content-range"].substring(9);
        res.statusCode = 206;
        body = jmespath.search(body, filter);
    }

    res.json(body);
});

export default router;