import Event from "../models/event.model.mjs";

export async function getEventlist(req, res) {
  try {
    let results = await Event.find({})
      .limit(50)
    res.status(200).json(results)
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success:false,
      message
    })
  }
}

export async function createEvent(req, res) {
  try {
    await Event.create(req.body);
    res.status(200).json({
      success: true,
      message: "Event created successfully"
    });
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success:false,
      message
    })
  }
}