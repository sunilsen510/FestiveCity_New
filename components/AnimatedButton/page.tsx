// components/AnimatedButton.tsx
import Link from "next/link";
import { ReactNode } from "react";


interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, children, className = "" }) => {
  return (
    <>
       <div className="flex items-center justify-center">
          <Link
              href={href}
              className={`btn btn-4 absolute overflow-hidden px-4 py-2.5 rounded-lg text-yellow-color border border-primary bg-transparent text-sm sm:text-base md:text-[16px] transition-colors duration-300 hover:text-white ${className}`}
            >
              {children}
          </Link>
       </div>
    </>
  );
};

export default AnimatedButton;
