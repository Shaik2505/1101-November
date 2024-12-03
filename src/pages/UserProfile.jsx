import React, { useState, useEffect } from "react";
import ThemeBtn from "../components/ThemeBtn";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState(null); // To track the current action for modal

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleEditProfile = () => {
    setCurrentAction("editProfile");
    setIsModalOpen(true);
  };

  const handleTutorialsFAQs = () => {
    setCurrentAction("tutorialsFAQs");
    setIsModalOpen(true);
  };

  const handleFeedback = () => {
    setCurrentAction("feedback");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentAction(null);
  };

  const handleSaveProfile = (updatedData) => {
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setIsModalOpen(false);
    setCurrentAction(null);
  };

  const handleSubmitFeedback = (feedback) => {
    alert("Feedback Submitted: " + feedback);
    setIsModalOpen(false);
  };

  const handleSubmitThemeChange = (themeSettings) => {
    alert("Theme changed: " + JSON.stringify(themeSettings));
    setIsModalOpen(false);
  };

  // Handle image change (when user uploads a new avatar)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUserData = { ...userData, image: reader.result };
        setUserData(updatedUserData);
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex py-20 flex-col items-center bg-background dark:bg-darkBackground text-text dark:text-darkText rounded-xl shadow-lg p-6 md:p-10 my-[4.8rem] h-full mx-auto w-full max-w-2xl lg:max-w-3xl dark:shadow-white">
      <div className="w-28 h-28 rounded-full overflow-hidden mb-6">
        {/* Avatar Image - Clickable to open file picker */}
        <img
          src={userData.image || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-full h-full object-cover transform transition-transform hover:scale-110 cursor-pointer"
          onClick={() => document.getElementById("imageInput").click()} // Trigger file input on click
        />
        <input
          type="file"
          id="imageInput"
          className="" // Hide the file input element
          onChange={handleImageChange} // Handle image upload
          accept="image/*"
          // Only allow image files
        />
      </div>
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-highlight">
          {userData.name}
        </h2>
        <p className="text-cMD text-gray-600">{userData.email}</p>
        <p className="text-cMD text-gray-600">
          {userData.phone || "+20-01274318900"}
        </p>
        <p className="text-cMD text-gray-600 mb-6">
          {userData.address || "285 N Broad St, Elizabeth, NJ 07208, USA"}
        </p>

        <div className="space-x-4 flex flex-wrap justify-center">
          <button
            onClick={handleEditProfile}
            className="px-6 py-3 text-white bg-primary rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Edit Profile
          </button>

          <button
            onClick={handleTutorialsFAQs}
            className="px-6 py-3 text-darkText bg-secondary rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Tutorials & FAQs
          </button>
        </div>

        <div className="mt-8 space-y-3">
          <p className="text-sm text-gray-500">
            Provide your feedback or report an issue:
          </p>
          <button
            onClick={handleFeedback}
            className="px-6 py-2 text-darkText bg-highlight rounded-lg hover:bg-gold-500 transition-all duration-300 transform hover:scale-105"
          >
            Give Feedback
          </button>
        </div>
      </div>

      {/* Modals for each action */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-darkPrimary text-text dark:text-darkText p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">
              {currentAction === "editProfile" && "Edit Your Profile"}
              {currentAction === "tutorialsFAQs" && "View Tutorials & FAQs"}
              {currentAction === "feedback" && "Submit Feedback"}
            </h3>

            {/* Form based on current action */}
            {currentAction === "editProfile" && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="w-full p-3 rounded-lg border-2 dark:border-darkText focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="w-full p-3 rounded-lg border-2 dark:border-darkText focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={() => handleSaveProfile(userData)}
                  className="w-full py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-all"
                >
                  Save Profile
                </button>
              </div>
            )}

            {currentAction === "tutorialsFAQs" && (
              <div className="space-y-4">
                <p>Explore our tutorials or contact support for assistance.</p>
                <button
                  onClick={() => alert("Redirecting to tutorials...")}
                  className="w-full py-2 bg-secondary text-darkText rounded-lg hover:bg-green-600 transition-all"
                >
                  Open Tutorials
                </button>
                <button
                  onClick={() => alert("Redirecting to support...")}
                  className="w-full py-2 bg-accent text-darkText rounded-lg hover:bg-amber-600 transition-all"
                >
                  Contact Support
                </button>
              </div>
            )}

            {currentAction === "feedback" && (
              <div className="space-y-4">
                <textarea
                  placeholder="Your feedback..."
                  className="w-full p-3 rounded-lg border-2 dark:border-darkText focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={(e) =>
                    handleSubmitFeedback(e.target.previousSibling.value)
                  }
                  className="w-full py-2 bg-highlight text-darkText rounded-lg hover:bg-gold-500 transition-all"
                >
                  Submit Feedback
                </button>
              </div>
            )}

            <button
              onClick={handleCloseModal}
              className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
