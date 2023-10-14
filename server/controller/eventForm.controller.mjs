import EventForm from "../models/eventForm.model.mjs";
import handleError from "../utils/errorHandler.mjs";
import flexibleQuery from "../utils/flexibleQuery.mjs";

export async function getEventForm(req, res) {
  try {
    const [filters, search] = flexibleQuery(req.query);
    const results = await EventForm.find(filters)
      .skip(search.skip)
      .limit(search.limit)
      .select(search.fields)
      .sort(search.sortBy);
    const totalCount = await EventForm.countDocuments(filters);
    const page = Math.ceil(totalCount / search.limit);
    res.status(200).json({
      totalCount,
      page,
      results
    });
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}

export async function eventFormById(req, res) {
  try {
    const id = req.params.id;
    const eventForm = await EventForm.findById(id);
    if (!eventForm) {
      return res.status(404).send("Event form not found");
    }
    res.status(200).json(eventForm);
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}

export async function createEventForm(req, res) {
  let event;
  try {
    event = {
      name: req.body[0].name,
      labels: req.body.slice(1),
    };
    console.log('event', event);
    await EventForm.create(event);
    res.status(200).json({
      success: true,
      message: "Event form created successfully.",
    })
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}
