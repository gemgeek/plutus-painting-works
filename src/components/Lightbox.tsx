import { FaTimes } from 'react-icons/fa';

interface LightboxProps {
  src: string;
  type: 'image' | 'video';
  onClose: () => void;
}

const Lightbox = ({ src, type, onClose }: LightboxProps) => {
  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        className="absolute right-4 top-4 z-50 text-white"
        onClick={onClose}
        aria-label="Close"
      >
        <FaTimes size={30} />
      </button>

      <div
        className="relative h-auto w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()} 
      >
        {type === 'image' ? (
          <img src={src} alt="Gallery" className="h-auto w-full" />
        ) : (
          <video
            src={src}
            controls 
            autoPlay  
            className="h-auto w-full"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default Lightbox;