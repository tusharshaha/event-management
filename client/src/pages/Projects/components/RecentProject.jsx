import React from "react";

const RecentProject = () => {
  // Sample project data
  const projects = [
    {
      "id": 1,
      "eventName": "Grand Wedding Celebration",
      "venue": "Elegant Gardens",
      "time": "2023-10-31T18:00:00",
      "place": "Cityville",
      "description": "A magical celebration of love under the stars.",
      "video": "https://www.example.com/videos/wedding_celebration.mp4"
    },
    {
      "id": 2,
      "eventName": "Birthday Bash Extravaganza",
      "venue": "Happy Place Event Center",
      "time": "2023-11-15T15:30:00",
      "place": "Joyville",
      "description": "An exciting birthday party filled with laughter and surprises.",
      "video": "https://cdn.pixabay.com/vimeo/147310229/birthday-1462.mp4"
    },
    {
      "id": 3,
      "eventName": "Corporate Gala Dinner",
      "venue": "Business Summit Hall",
      "time": "2023-12-05T19:00:00",
      "place": "Corporate City",
      "description": "An elegant evening to celebrate corporate achievements.",
      "video": "https://www.example.com/videos/corporate_gala.mp4"
    },
    {
      "id": 4,
      "eventName": "Summer Music Festival",
      "venue": "Sunset Park",
      "time": "2024-01-20T14:00:00",
      "place": "Harmony Village",
      "description": "A lively music festival to kick off the summer vibes.",
      "video": "https://www.example.com/videos/summer_music_festival.mp4"
    },
    {
      "id": 5,
      "eventName": "Family Reunion BBQ",
      "venue": "Riverside Park",
      "time": "2024-02-08T12:00:00",
      "place": "Family Town",
      "description": "A casual BBQ for families to reconnect and have fun.",
      "video": "https://www.example.com/videos/family_reunion_bbq.mp4"
    },
    {
        "id": 6,
        "eventName": "Art and Wine Expo",
        "venue": "Creative Arts Center",
        "time": "2024-03-15T17:30:00",
        "place": "Artistic Avenue",
        "description": "An expo showcasing the fusion of art and fine wines.",
        "video": "https://www.example.com/videos/art_wine_expo.mp4"
      },
  ]
  
  return (
    <div className="mb-12">
      <h1 className="mx-auto my-10 lg:text-4xl md:text-2xl sm:text-xl font-bold text-gray-700 mb-12 py-4 w-3/12 text-center border-y-2 border-blue-800 ">
        - <span className="text-blue-800">Recent</span> Projects -
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <video width="640" height="360" controls>
              <source src={project.video} type="video/mp4" />
            </video>
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{project.eventName}</h2>
              <p className="text-gray-600 my-2"><span className="font-semibold">Venue:</span> {project.venue}</p>
              <p className="text-gray-600 my-2"><span className="font-semibold">Date:</span> {project.time}</p>
              <p className="text-gray-600 my-2"><span className="font-semibold">Location:</span> {project.place}</p>
              <p className="text-gray-700"><span className="font-semibold">Details:</span> {project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
