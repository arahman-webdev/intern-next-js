
import { ChevronDown } from "lucide-react"; // or use any icon
import '../app/scroll.animate.css' // custom CSS for rotating text

const ScrollAnimator = () => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Rotating Text */}
      <div className="rotating-text absolute w-full h-full flex items-center justify-center">
        <p className="text-white text-[12px] tracking-widest ">

        </p>
      </div>

      {/* Center Circle */}
      <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center z-10">
        <ChevronDown className="text-black" />
      </div>
    </div>
  );
};

export default ScrollAnimator;
