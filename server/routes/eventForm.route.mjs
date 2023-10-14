import express from "express";
import { createEventForm, eventFormById, getEventForm } from "../controller/eventForm.controller.mjs";

const router = express.Router();

router.route("/")
  .get(getEventForm)
  .post(createEventForm);

router.get("/:id", eventFormById);

export default router;
