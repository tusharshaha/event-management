import React from "react";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg",
      name: "Musical Show",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2023/08/26/09/04/strawberry-8214486_1280.jpg",
      name: "Birthday Party",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260_1280.jpg",
      name: "marriage Ceremony",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65",
      name: "Corporate Event",
    },
    {
      id: 5,
      img: "https://plus.unsplash.com/premium_photo-1665413642520-ebe79e961a4a",
      name: "Night Party",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1561489396-888724a1543d",
      name: "International Conference",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      name: "Freelance Event",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
      name: "Dinner Party",
    },
  ];
  return (
    <div>
      <h1 className="mx-auto lg:text-4xl md:text-2xl sm:text-xl font-bold text-gray-700 mb-12 py-4 w-4/12 text-center border-y-2 border-blue-800 ">
        - <span className="text-blue-800">What</span> Happen -
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              class="w-full h-full object-cover transition-transform transform group-hover:scale-105"
              src={image.img}
              alt=""
            />
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white opacity-40 group-hover:opacity-0 transition-opacity"></div>
            <p class="capitalize text-white font-semibold px-2 py-1 rounded-lg text-center bg-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              {image.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
