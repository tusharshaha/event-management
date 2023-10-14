import mongoose from "mongoose";

const eventFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Event name can't be empty!"],
      trim: true
    },
    title: {
      type: String,
      required: [true, "Please provide a last name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    image: {
      imgUrl: {
        type: String,
        validate: {
          validator: (value) => {
            const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
            return regex.test(value);
          },
          message: "The image url is invalid"
        },
      },
    },
    labels: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          labelType: {
            type: String,
            required: true,
          },
        },
      ],
      required: true
    }
  },
  { timestamps: true }
)

const EventForm = mongoose.model("EventForm", eventFormSchema);

export default EventForm
