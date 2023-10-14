import mongoose from 'mongoose';

// 1. Define the EventForm schema and model
const eventFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Event name can't be empty!"],
      trim: true,
    },
    labels: [
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
  },
  {
    timestamps: true,
  }
);

const EventForm = mongoose.model('EventForm', eventFormSchema);

// 2. MongoDB connection URI
const MONGO_URI =
  'mongodb+srv://commonUsers:QgbWjVgBvjK2ML3L@service.kmhu6.mongodb.net/eventManagement?retryWrites=true&w=majority';

// 3. Function to insert dummy data
async function insertDummyData() {
  const faker = await import('faker').then((mod) => mod.default);

  // Connect to MongoDB
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to the database.');

  const sampleEvents = [
    'Birthday',
    'Concert',
    'Conference',
    'Wedding',
    'Seminar',
    'Workshop',
    'Party',
    'Festival',
    'Reunion',
    'Gathering',
    'Exhibition',
    'Ceremony',
    'Launch',
    'Anniversary',
    'Symposium',
    'Summit',
    'Retreat',
    'Camp',
    'Gala',
    'Showcase',
  ];

  const dummyData = [];

  for (let i = 0; i < 20; i++) {
    dummyData.push({
      name: faker.random.arrayElement(sampleEvents),
      labels: [
        { name: "Venue", labelType: faker.address.city() },
        { name: "Number of Guests", labelType: faker.datatype.number({min: 10, max: 500}).toString() },
        { name: "Date", labelType: faker.date.future().toISOString() },
        { name: "Organizer", labelType: faker.name.findName() },
        { name: "Budget", labelType: "$" + faker.commerce.price(1000, 10000) },
        { name: "Caterer", labelType: faker.company.companyName() },
        { name: "Theme", labelType: faker.commerce.product() },
        { name: "Entertainment", labelType: faker.music.genre() },
        { name: "Speaker", labelType: faker.name.findName() },
        { name: "Sponsor", labelType: faker.company.companyName() }
      ],
    });
  }

  try {
    await EventForm.insertMany(dummyData);
    console.log('Dummy data inserted successfully.');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    mongoose.connection.close();
  }
}

// Run the insert function
insertDummyData();
