import express, { Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";

// Import types from express

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define a simple test route with explicit types for `req` and `res`
app.get("/api", (req: Request, res: Response): void => {
    res.send("Hello from the server!");
});

// Define another route to send data to the client with explicit types for `req` and `res`
app.get("/api/data", (req: Request, res: Response): void => {
    res.json({
        message: "This is some data from the server",
        success: true,
    });
});

// Catch-all route for 404 errors with explicit types for `req` and `res`
app.use((req: Request, res: Response): void => {
    res.status(404).json({
        message: "Route not found",
    });
});

// Start the server on port 4000
const port: number = parseInt(process.env.PORT || "4000", 10);
app.listen(port, (): void => {
    console.log(`Server is running on http://localhost:${port}`);
});
