import { useSession } from "nauth0";
import React from "react";

const Home: React.FC = () => {
  const [session, isLoading] = useSession();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (session !== null) {
    return <span>Hello, {session.user?.name}</span>;
  }

  return <a href="/api/auth/login">Login</a>;
};

export default Home;
