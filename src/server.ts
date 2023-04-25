const cors = require("cors");
import express from "express";
const fileUpload = require("express-fileupload");
import router from "./router";

const app = express();

app.use(
    cors({
        origin: ["http://localhost:8080", process.env.ORIGIN],
    })
);
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
app.use("/api", router);

export default app;
