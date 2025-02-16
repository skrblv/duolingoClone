import React from 'react';

const Avatar = ({ src, onChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className="bg-gray-800 w-full h-[255px] p-4 rounded-lg flex items-center justify-center relative">
      {src ? (
        <img
          src={src}
          alt="Profile"
          className="w-full h-[240px] rounded-md object-cover"
        />
      ) : (
        <label className="bg-blue-500 w-[155px] h-[155px] rounded-full flex items-center justify-center text-8xl text-center text-white cursor-pointer">
          +
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      )}
      {src && (
        <label className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full cursor-pointer">
          <span className="text-gray-400">✎</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      )}
    </div>
  );
};

export default Avatar;
