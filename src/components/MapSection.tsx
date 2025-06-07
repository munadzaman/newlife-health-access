
import React from 'react';

const MapSection = () => {
  return (
    <section className="py-16 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our flagship clinic in Bishwanath, Sylhet for world-class healthcare services
          </p>
        </div>

        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5320462991517!2d91.75067537592099!3d24.811472447215046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751039c92cd22ef%3A0xbf9da2ea6de68f2!2sNew%20Life%20Medical%20Services!5e0!3m2!1sen!2sbd!4v1749144007510!5m2!1sen!2sbd"
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
