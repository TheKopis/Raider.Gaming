"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fetch_1 = __importDefault(require("./fetch"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    try {
        (0, fetch_1.default)(req.query.realm, req.query.charname).then((json) => {
            if (!json) {
                return res.sendStatus(500);
            }
            res.json(json);
        });
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});
app.listen(8080, () => {
    console.log(`server up on http://localhost:8080`);
});
