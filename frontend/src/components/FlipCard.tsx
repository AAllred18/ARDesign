import { Link } from 'react-router-dom';

interface FlipCardProps {
  title: string;
  description: string;
  path: string;
  image: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, description, path, image }) => {
  return (
    <div className="relative group w-[280px] h-[280px] perspective" style={{ margin: '16px' }}>
      <Link to={path} className="block w-full h-full">
        <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-xl border-[2px] border-[#1e3a8a] overflow-hidden shadow-md bg-white">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1e3a8a]/80 text-white text-center text-lg font-semibold p-1">
              {title}
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl border-[2px] border-[#1e3a8a] bg-[#f8fafc] p-3 flex items-center justify-center text-center shadow-md">
            <p className="text-[#1e3a8a] text-sm font-medium">{description}</p>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default FlipCard;
