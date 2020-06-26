/*
 * GET data listing.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    let body = {
        "locations": [
            { "name": "Seattle", "state": "WA" },
            { "name": "New York", "state": "NY" },
            { "name": "Bellevue", "state": "WA" },
            { "name": "Olympia", "state": "WA" }
        ]
    };

 

    res.json(body);
});

export default router;