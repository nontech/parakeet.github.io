import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { FaApple, FaAndroid } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-12 flex justify-between items-center relative z-20 bg-[#4726ce]">
      <div>
        <a href="/">
          <img src="/parakeet_logo.png" alt="Parakeet Logo" className="h-14" />
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a
          href="/#features"
          className="text-foreground text-white hover:text-[#a8b1ff] transition-colors"
        >
          Features
        </a>
        <a
          href="/#languages"
          className="text-foreground text-white hover:text-[#a8b1ff] transition-colors"
        >
          Languages
        </a>
        <a
          href="/#testimonials"
          className="text-foreground text-white hover:text-[#a8b1ff] transition-colors"
        >
          Testimonials
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-primary hover:bg-secondary transition-colors">
              Download Now
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a
                href="https://apps.apple.com/de/app/parakeet-app/id6618158139?l=en-GB"
                className="flex items-center gap-2"
              >
                <FaApple className="h-4 w-4" /> Download for iOS
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href="https://play.google.com/store/apps/details?id=com.parakeetapp.app"
                className="flex items-center gap-2"
              >
                <FaAndroid className="h-4 w-4" /> Download for Android
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="md:hidden">
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 flex flex-col space-y-4 md:hidden">
          <a
            href="/#features"
            className="text-foreground hover:text-[#a8b1ff] transition-colors"
          >
            Features
          </a>
          <a
            href="/#languages"
            className="text-foreground hover:text-[#a8b1ff] transition-colors"
          >
            Languages
          </a>
          <a
            href="/#testimonials"
            className="text-foreground hover:text-[#a8b1ff] transition-colors"
          >
            Testimonials
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-primary hover:bg-secondary transition-colors w-full">
                Download Now
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem>
                <a
                  href="https://apps.apple.com/de/app/parakeet-app/id6618158139?l=en-GB"
                  className="flex items-center gap-2"
                >
                  <FaApple className="h-4 w-4" /> Download for iOS
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="https://play.google.com/store/apps/details?id=com.parakeetapp.app"
                  className="flex items-center gap-2"
                >
                  <FaAndroid className="h-4 w-4" /> Download for Android
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
