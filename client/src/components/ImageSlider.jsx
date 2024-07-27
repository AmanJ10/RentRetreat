import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function ImageSlider({ images, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl pt-2">
        {currentIndex + 1}/{images.length}
      </h1>
      <div className="max-w-4xl max-h-4xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 text-white rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 text-white rounded-full"
        >
          &gt;
        </button>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white"
        >
          <IoMdClose size={24} />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
