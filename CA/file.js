import express from "express";
import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));

// Serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// SAVE FILE
app.post("/save", (req, res) => {
    const { filename, name, age, email } = req.body;
    const content = `Filename: ${filename}
Name: ${name}
Age: ${age}
Email: ${email}`;

    fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) return res.send("Error writing file.");

        res.send(`
            <h3>File Saved Successfully</h3>
            <pre>${content}</pre>
            <a href="/">Back</a>
        `);
    });
});

// COMPRESS FILE
app.post("/compress", (req, res) => {
    const { filename, name, age, email } = req.body;

    const content = `Filename: ${filename}
Name: ${name}
Age: ${age}
Email: ${email}`;

    // Write normal text file first
    fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) return res.send("Error writing file.");

        // Compress using gzipSync (simple method)
        const compressedData = zlib.gzipSync(content);

        fs.writeFile(`${filename}.gz`, compressedData, (err) => {
            if (err) return res.send("Compression error.");

            res.send(`
                <h3>File Compressed Successfully</h3>
                <p>Saved as: ${filename}.gz</p>
                <a href="/">Back</a>
            `);
        });
    });
});

app.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
