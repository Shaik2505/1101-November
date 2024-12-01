import React, { useState, useEffect } from 'react';
import EditProfileModal from '../components/EditProfileModal'; // Adjust the path as necessary

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    image: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleEditProfile = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProfile = (updatedData) => {
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-around items-center bg-gray-400 shadow-md rounded-lg max-w-md mx-auto md:max-w-lg lg:max-w-xl p-10 mt-14">
      <div className="w-24 h-24 mb-4">
        <img
          src={userData.image || 'https://via.placeholder.com/150'}
          alt="User Avatar"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{userData.name}</h2>
        <p className="text-gray-600 mb-2">{userData.email}</p>
        <p className="text-gray-600 mb-2">{userData.phone || '+20-01274318900'}</p>
        <p className="text-gray-600 mb-4">{userData.address || '285 N Broad St, Elizabeth, NJ 07208, USA'}</p>
        <div className="flex justify-center space-x-4 mb-4"></div>
        <button
          onClick={handleEditProfile}
          className="px-6 py-2 bg-blue-500 text-white rounded"
        >
          Edit Profile
        </button>
      </div>
      <EditProfileModal
        userData={userData}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default UserProfile;
