import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiHome, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }else setIsOpen(false)
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLogout = () => {
    // Clear storage and redirect
    localStorage.removeItem('user');
    sessionStorage.clear();
    navigate('/login', { replace: true });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-lg shadow-lg md:hidden cursor-pointer"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full bg-secondary font-inter 
          transition-all duration-300 z-50
          flex flex-col 
          ${isOpen ? 'w-64' : 'w-0 md:w-20'}
          ${isMobile && !isOpen ? '-translate-x-100' : 'translate-x-0'}
        `}
      >
       
        <div className="flex items-center justify-between p-4 ">
          {isOpen && (
            <h1 className="text-xl font-bold text-white">Kate Kors</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-gray-800 text-white transition-colors cursor-pointer"
          >
            {isOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              !isMobile && <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation Links - Only Dashboard */}
        <nav className="flex-1 mt-8">
          <Link
            to="/dashboard"
            className={`
              flex items-center gap-3 px-4 py-3 mx-2 rounded-lg
              transition-colors duration-200
              ${location.pathname === '/dashboard' 
                ? 'bg-primary text-white' 
                : 'text-white hover:bg-accent hover:text-white'
              }
            `}
          >
            <FiHome className="w-5 h-5" />
            {isOpen && <span>Dashboard</span>}
          </Link>
        </nav>

        {/* Logout Button at Bottom */}
        <div className="border-t border-gray-700 p-4">
          <button
            onClick={handleLogout}
            className="
              flex items-center gap-3 px-4 py-3 w-full rounded-lg
              text-primary hover:bg-accent hover:text-white cursor-pointer
              transition-colors duration-200
            "
          >
            <FiLogOut className="w-5 h-5" />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

export default LeftSidebar;