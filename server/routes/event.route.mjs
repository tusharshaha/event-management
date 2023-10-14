import express from "express";
import { createEvent, getEventlist } from "../controller/event.controller.mjs";
import authentication from "../middleware/authentication.mjs";
import authorization from "../middleware/authorization.mjs";

const router = express.Router();

// Get a list of 50 posts
router.get("/", getEventlist);

router.post("/request", createEvent);

export default router;