import AppLayout from "layouts/AppLayout";
import nauth0 from "lib/nauth0";
import { GetServerSideProps } from "next";
import React from "react";

const Me: React.FC = () => {
  return <AppLayout title="My achievements">Hello, user!</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await nauth0.getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Me;
