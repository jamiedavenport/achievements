import { useSession } from "nauth0";
import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  const [session, isLoading] = useSession();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const { user } = session;

  if (user === undefined) {
    return (
      <div className="flex items-center">
        <a href="/api/auth/login">Sign In</a>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {/* Profile dropdown */}
      <div className="mr-3 relative">
        <div>
          <Link href="/me">
            <a
              className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="user-menu"
              aria-haspopup="true"
            >
              <span className="sr-only">My timeline</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user?.picture}
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>

      <a
        href="/api/auth/logout"
        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="sr-only">Sign out</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </a>
    </div>
  );
};

export default Nav;
