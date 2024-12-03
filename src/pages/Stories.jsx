import React, { useState, useEffect } from "react";

const Stories = () => {
  const [story, setStory] = useState("");
  const [media, setMedia] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [newCollaborator, setNewCollaborator] = useState("");
  const [emojis, setEmojis] = useState([]);

  const handleStoryChange = (e) => setStory(e.target.value);

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    setMedia((prevMedia) => [...prevMedia, ...files]);
  };

  const handleAddCollaborator = () => {
    if (newCollaborator) {
      setCollaborators((prev) => [...prev, newCollaborator]);
      setNewCollaborator("");
    }
  };

  useEffect(() => {
    const addEmoji = () => {
      const newEmoji = {
        id: Date.now(),
        emoji: ["💖", "💖", "💖", "💖", "💖"][Math.floor(Math.random() * 5)],
        left: Math.random() * 100, // Random left position
        bottom: Math.random() * 50, // Random bottom position
      };
      setEmojis((prev) => [...prev, newEmoji]);

      // Remove emoji after 1 second
      setTimeout(() => {
        setEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
      }, 1000);
    };

    const interval = setInterval(addEmoji, 300); // Add an emoji every 300ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 relative min-h-screen bg-background text-text dark:bg-darkBackground dark:text-darkText overflow-hidden">
      {/* Jumping Emojis */}
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          style={{
            left: `${emoji.left}%`,
            bottom: `${emoji.bottom}%`,
          }}
          className="absolute animate-ping text-4xl dark:drop-shadow-[0px_4px_6px_rgba(255,255,255,0.6)] duration-500"
        >
          {emoji.emoji}
        </div>
      ))}

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg sm:p-8 md:px-12 lg:p-16 dark:bg-darkPrimary">
        <h1 className="text-2xl font-bold mb-6 text-primary sm:text-3xl lg:text-4xl dark:text-primary">
          Create Your Story
        </h1>

        {/* Text Input */}
        <div className="mb-6">
          <label
            htmlFor="storyInput"
            className="block text-lg font-medium mb-2"
          >
            Story Content
          </label>
          <textarea
            id="storyInput"
            value={story}
            onChange={handleStoryChange}
            placeholder="Start writing your story here..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-darkPrimary dark:text-darkText dark:border-primary dark:shadow-[0px_4px_10px_rgba(255,255,0,0.5)]"
            rows="6"
          ></textarea>
        </div>

        {/* Media Upload */}
        <div className="mb-6">
          <label htmlFor="mediaUpload" className="block text-lg font-medium mb-2">
            Upload Media (Images, Videos, Audio)
          </label>
          <input
            type="file"
            id="mediaUpload"
            multiple
            accept="image/*,video/*,audio/*"
            onChange={handleMediaUpload}
            className="block w-full text-gray-700 border rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-accent file:text-background hover:file:bg-highlight dark:text-darkText dark:file:bg-primary dark:shadow-[0px_4px_10px_rgba(255,255,0,0.5)]"
          />
          <div className="mt-4">
            {media.map((file, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-2 mb-2 text-text text-sm dark:bg-darkBackground dark:text-darkText"
              >
                {file.name}
              </div>
            ))}
          </div>
        </div>

        {/* Collaborative Editing */}
        <div className="mb-6">
          <label htmlFor="collaboratorInput" className="block text-lg font-medium mb-2">
            Add Collaborators
          </label>
          <div className="flex items-center gap-4">
            <input
              type="email"
              id="collaboratorInput"
              placeholder="Enter collaborator's email"
              value={newCollaborator}
              onChange={(e) => setNewCollaborator(e.target.value)}
              className="flex-1 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-darkPrimary dark:text-darkText dark:border-primary dark:shadow-[0px_4px_10px_rgba(255,255,0,0.5)]"
            />
            <button
              onClick={handleAddCollaborator}
              className="px-6 py-2 bg-secondary text-white font-semibold rounded-lg hover:bg-highlight dark:bg-primary dark:hover:bg-highlight"
            >
              Add
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {collaborators.map((email, index) => (
              <span
                key={index}
                className="inline-block bg-accent text-background px-4 py-2 rounded-full text-sm font-medium dark:bg-primary dark:text-darkText"
              >
                {email}
              </span>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-highlight transition-all dark:bg-primary dark:hover:bg-primary/20">
            Save Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
