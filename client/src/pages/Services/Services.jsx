import React from 'react';

function Services() {
  return (
    <div className="bg-gray-100 px-32 py-24">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>

        {/* Service 1: Event Planning */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Event Planning</h2>
            <p className="text-gray-600">Leave the details to us. Our experienced event planners will handle every aspect of your event, from conceptualization to execution. We ensure that your event is seamless and memorable.</p>
          </div>
        </div>

        {/* Service 2: Venue Selection */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Venue Selection</h2>
            <p className="text-gray-600">Finding the perfect venue is crucial for any event. Our team will help you choose the ideal location that suits your event's theme, size, and budget.</p>
          </div>
        </div>

        {/* Service 3: Catering */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Catering</h2>
            <p className="text-gray-600">Delight your guests with exquisite cuisine. We work with top-notch catering services to create a menu that matches your event's style and dietary preferences.</p>
          </div>
        </div>

        {/* Service 4: Entertainment */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Entertainment</h2>
            <p className="text-gray-600">Keep your guests entertained throughout the event. We can arrange for live bands, DJs, performers, and other entertainment options to create a memorable experience.</p>
          </div>
        </div>

        {/* Service 5: Marketing and Promotion */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Marketing and Promotion</h2>
            <p className="text-gray-600">Maximize your event's reach with our marketing and promotion services. We'll create a tailored strategy to attract your target audience and ensure a successful turnout.</p>
          </div>
        </div>

        {/* Service 6: Budget Management */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Budget Management</h2>
            <p className="text-gray-600">We understand the importance of staying within your budget. Our team will work diligently to manage your finances and allocate resources efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
