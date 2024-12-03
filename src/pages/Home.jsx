import React from "react";
import HeroImage from "../assets/hero-image.jpg";
import CreativityImage from "../assets/creativity.jpg";
import HowItWorksImage from "../assets/how-it-works.jpg";
import GetStartedImage from "../assets/get-started.jpg";
import { HiLightBulb } from "react-icons/hi";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="pt-20 gradientMove min-h-screen bg-gradient-to-br from-background to-darkBackground animate-gradient dark:bg-gradient-to-r dark:from-darkBackground dark:to-background dark:text-darkText">
      {/* Hero Section */}
      <header className="relative text-white text-center py-16 px-4 rounded-lg shadow-lg mb-8">
        <img
          src={HeroImage}
          alt="TextingStory Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 animate-pulse"
        />
        <h1 className="text-4xl font-bold mb-4 relative">
          <span className="inline-block overflow-hidden whitespace-wrap animate-bounce">
            Create Cool Videos with TextingStory
          </span>
        </h1>
        <p className="text-lg animate-fadeIn relative">
          Bring your stories to life with ease.
        </p>
      </header>

      <main className="space-y-8 mx-2">
        {/* Unleash Your Creativity */}
        <section className="flex flex-wrap items-center bg-background dark:bg-darkPrimary p-6 rounded-lg shadow-lg animate-fadeIn">
          <img
            src={CreativityImage}
            alt="Unleash Creativity"
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 animate-pulse dark: dark:animate-none"
          />
          <div className="md:w-1/2 space-y-4 md:pl-6">
            <h2 className="flex text-secondary dark:text-darkSecondary text-2xl font-semibold items-center">
              <span>
                <HiLightBulb className="text-accent animate-pulse" size={50} />
              </span>
              Unleash your creativity
            </h2>
            <ul className="list-disc pl-5 font-semibold text-xl animate-slideIn">
              <li>
                Write a text conversation as easily as in your messaging app.
              </li>
              <li>
                Videos look like a real chat. Just press play and watch it
                unfold!
              </li>
              <li>
                Customize your conversations with different themes and colors.
              </li>
            </ul>
          </div>
        </section>

        {/* How It Works */}
        <section className="flex flex-wrap items-center bg-white dark:bg-darkPrimary p-6 rounded-lg shadow-lg animate-fadeIn">
          <div className="md:w-1/2 space-y-4 md:pr-6">
            <h2 className="text-secondary dark:text-darkSecondary text-2xl font-semibold">
              How It Works
            </h2>
            <ul className="list-disc pl-5 font-semibold text-xl animate-slideIn">
              <li>
                Type your story with conversations, fictitious or relived past.
              </li>
              <li>Add conversations between characters as much as you want.</li>
              <li>Choose a speed or customize it for each character.</li>
              <li>Choose a theme or customize it.</li>
              <li>
                Export your video in HD or 4K. Exchange unlimited stories with
                other users.
              </li>
            </ul>
            <button className="mt-4 px-6 py-2 bg-accent dark:bg-darkAccent text-white rounded shadow hover:bg-highlight dark:hover:bg-darkHighlight animate-fadeIn">
              Get Started
            </button>
          </div>
          <img
            src={HowItWorksImage}
            alt="How It Works"
            className="w-full md:w-1/2 rounded-lg animate-pulse dark: dark:animate-none"
          />
        </section>

        {/* Get Started in Seconds */}
        <section className="flex flex-wrap items-center bg-white dark:bg-darkPrimary p-6 rounded-lg shadow-lg animate-fadeIn">
          <img
            src={GetStartedImage}
            alt="Get Started"
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 animate-pulse dark: dark:animate-none"
          />
          <div className="md:w-1/2 space-y-4 md:pl-6">
            <h2 className="text-secondary dark:text-darkSecondary text-2xl font-semibold">
              Get started in seconds
            </h2>
            <ol className="list-decimal pl-5">
              <li>Write a text conversation.</li>
              <li>Export the video.</li>
              <li>Watch it and share it!</li>
            </ol>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white dark:bg-darkPrimary p-6 rounded-lg shadow-lg animate-fadeIn">
          <h2 className="text-secondary dark:text-darkSecondary text-2xl font-semibold mb-6 text-center">
            What Our Users Say
          </h2>
          <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/60"
                alt="User Avatar"
                className="w-16 h-16 rounded-full shadow-lg"
              />
              <div>
                <p className="italic">
                  "TextingStory is a game-changer! The intuitive tools and
                  seamless chat interface allowed me to turn my imagination into
                  engaging stories effortlessly."
                </p>
                <span className="text-secondary dark:text-darkAccent font-bold">
                  — Sarah T., Aspiring Storyteller
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/60"
                alt="User Avatar"
                className="w-16 h-16 rounded-full shadow-lg"
              />
              <div>
                <p className="italic">
                  "The customization options are fantastic. I can truly make
                  each story feel unique with themes and media integration. The
                  collaboration features are the cherry on top!"
                </p>
                <span className="text-secondary dark:text-darkAccent font-bold">
                  — Alex M., Creative Writer
                </span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/60"
                alt="User Avatar"
                className="w-16 h-16 rounded-full shadow-lg"
              />
              <div>
                <p className="italic">
                  "I love the gamification elements! Earning badges and seeing
                  my progress keeps me motivated to write more. Plus, the
                  feedback system helps me improve with every story I create."
                </p>
                <span className="text-secondary dark:text-darkAccent font-bold">
                  — Jamie L., Active Contributor
                </span>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/60"
                alt="User Avatar"
                className="w-16 h-16 rounded-full shadow-lg"
              />
              <div>
                <p className="italic">
                  "As someone new to storytelling, TextingStory made it so easy
                  for me to start. The user-friendly design and detailed
                  tutorials are perfect for beginners like me."
                </p>
                <span className="text-secondary dark:text-darkAccent font-bold">
                  — Mia R., New User
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Try for Free */}
        <section className="bg-white dark:bg-darkPrimary p-6 rounded-lg shadow-lg text-center space-y-4 animate-fadeIn">
          <h2 className="text-secondary dark:text-darkSecondary text-2xl font-semibold">
            Try TextingStory for Free
          </h2>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-primary dark:bg-darkPrimary text-white rounded shadow hover:bg-highlight dark:hover:bg-darkHighlight">
              Download on the App Store
            </button>
            <button className="px-6 py-2 bg-primary dark:bg-darkPrimary text-white rounded shadow hover:bg-highlight dark:hover:bg-darkHighlight">
              Get it on Google Play
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
