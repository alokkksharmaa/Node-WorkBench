import express from 'express';
import router from "./routing.js";

const ex = express();
ex.use("/", router);

ex.listen(4000);
