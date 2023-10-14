import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
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
      type: [{ label: String, value: String }],
      required: true
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "approved"]
    }
  },
  { timestamps: true }
)

const Event = mongoose.model("Event", eventSchema);

export default Event
