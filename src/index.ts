require("dotenv").config();
import express from "express";
import { constructHtml } from "./methods/constructHtml";
import { getTextFromImage } from "./methods/getTextFromImage";
import cors from "cors";
import bodyParser from "body-parser";
// import example from "./assets/file1.jpeg";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.SERVER_PORT;
// const GOOGLE_APPLICATION_CREDENTIALS =
// 	process.env.GOOGLE_APPLICATION_CREDENTIALS;
// console.log("GOOGLE_APPLICATION_CREDENTIALS", GOOGLE_APPLICATION_CREDENTIALS);

// define a route handler for the default home page
app.get("/", async (req, res) => {
	const textContetn = "Make POST request to /image2text ";
	const htmlResponse = constructHtml(textContetn);
	res.send(htmlResponse);
});

app.post("/image2text", async (req, res) => {
	const image = req.body.image;
	// console.log("\x1b[33m", "req.body.image: ", image);
	const textResponse = await getTextFromImage(image);

	res.send(textResponse);
});

// start the Express server
app.listen(port, () => {
	console.info(`server started at http://localhost:${port}`);
});
