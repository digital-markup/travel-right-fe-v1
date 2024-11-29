function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-Popins">
      {/* Header Section */}
      <h1 className="text-5xl font-bold text-center mb-8">About</h1>

      {/* Welcome Text */}
      <p className="text-lg mb-16 leading-relaxed">
        Welcome to our Sri Lankan Tour Guide Application, a platform designed to
        revolutionize the way you explore and experience Sri Lanka. Combining
        cutting-edge AI technology with a passion for travel, we offer an
        intuitive and personalized journey for every traveler. Our application
        helps you discover stunning tourist locations, plan routes with detailed
        waypoints, and even visualize them in immersive 3D views. With features
        like finding the most reviewed restaurants and lounges, providing
        intelligent insights through GPT-powered models, and enabling data
        customization, we ensure that your travel plans are met seamlessly.
      </p>

      {/* Images and Values Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        {/* Images */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/dev1.jpg"
            alt="Travelers exploring city"
            className="rounded-lg shadow-lg z-10 relative h-[300px] w-[250px] object-cover"
          />
          <img
            src="/dev2.jpg"
            alt="Mountain explorers"
            className="absolute -bottom-8 -right-8 rounded-lg shadow-lg  h-[300px] w-[250px] object-cover"
          />
        </div>

        {/* Values */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg uppercase tracking-wider mb-4">OUR VALUES</h2>
          <ul className="space-y-2">
            <li className="text-3xl font-serif">Innovation.</li>
            <li className="text-3xl font-serif">Simplicity.</li>
            <li className="text-3xl font-serif">Reliability.</li>
            <li className="text-3xl font-serif">Exploration.</li>
          </ul>
        </div>
      </div>

      {/* Mission and Logo Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Mission */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg uppercase tracking-wider mb-4">OUR MISSION</h2>
          <p className="text-3xl font-serif leading-snug">
            To revolutionize travel by providing personalized, innovative
            experiences that inspire exploration of Sri Lanka's beauty.
          </p>
        </div>

        {/* Logo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Visit Lanka Logo"
            className="w-48 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
