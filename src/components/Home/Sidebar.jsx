import React from 'react';
import 'tailwindcss/tailwind.css';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4 fixed">
      <h2 className="text-2xl font-bold mb-6 animate-typing whitespace-nowrap overflow-hidden">Menu</h2>
      <ul className="py-4">
        <li className="mb-4"><a href="#overview" className="text-white hover:text-gray-300 transition-colors duration-300">Overview</a></li>
        <li className="mb-4"><a href="#user-profiles" className="text-white hover:text-gray-300 transition-colors duration-300">User Profiles</a></li>
        <li className="mb-4"><a href="#story-creation-tools" className="text-white hover:text-gray-300 transition-colors duration-300">Story Creation Tools</a></li>
        <li className="mb-4"><a href="#chat-interface" className="text-white hover:text-gray-300 transition-colors duration-300">Chat Interface</a></li>
        <li className="mb-4"><a href="#media-integration" className="text-white hover:text-gray-300 transition-colors duration-300">Media Integration</a></li>
        <li className="mb-4"><a href="#collaboration-features" className="text-white hover:text-gray-300 transition-colors duration-300">Collaboration Features</a></li>
        <li className="mb-4"><a href="#sharing-publishing" className="text-white hover:text-gray-300 transition-colors duration-300">Sharing and Publishing</a></li>
        <li className="mb-4"><a href="#feedback-rating" className="text-white hover:text-gray-300 transition-colors duration-300">Feedback and Rating System</a></li>
        <li className="mb-4"><a href="#data-visualization" className="text-white hover:text-gray-300 transition-colors duration-300">Data Visualization</a></li>
        <li className="mb-4"><a href="#gamification-elements" className="text-white hover:text-gray-300 transition-colors duration-300">Gamification Elements</a></li>
        <li className="mb-4"><a href="#customization-options" className="text-white hover:text-gray-300 transition-colors duration-300">Customization Options</a></li>
        <li className="mb-4"><a href="#help-support" className="text-white hover:text-gray-300 transition-colors duration-300">Help and Support</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
