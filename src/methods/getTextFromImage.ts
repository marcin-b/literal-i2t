import Vision from "@google-cloud/vision";
import auth from "../../.googleVisionAuth.json";

export const getTextFromImage = async (base64Image: string) => {
	// const fileName = "file1.jpeg";
	// const filePath = __dirname + "/" + fileName;
	const client = new Vision.ImageAnnotatorClient(auth);

	// Perform text detection on the image file
	try {
		const [textDetections] = await client.textDetection({
			image: { content: base64Image }
		});
		const [annotation] = textDetections.textAnnotations;
		const text = annotation ? annotation.description : "";
		return text;
	} catch (error) {
		console.warn("\x1b[31m", "Error reading image: ", error);
	}
};
