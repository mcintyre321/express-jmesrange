"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET data listing.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
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
exports.default = router;
//# sourceMappingURL=data.js.map