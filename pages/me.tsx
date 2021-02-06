import NewAchievementForm from "components/NewAchievementForm";
import Timeline from "components/timeline/Timeline";
import AppLayout from "layouts/AppLayout";
import { Achievement } from "lib/achievement";
import { achievementRepo } from "lib/fauna/achievement";
import nauth0 from "lib/nauth0";
import { useSession } from "nauth0";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  achievements: Achievement[];
};

const Me: React.FC<Props> = ({ achievements }) => {
  const [session] = useSession();

  const name = session.user?.givenName ?? session.user?.name;
  const title = `${name ? `${name}'s` : "My"} achievements`;

  return (
    <AppLayout title={title}>
      <div className="mt-10">
        <NewAchievementForm />
      </div>
      <div className="mt-10">
        <Timeline achievements={achievements} />
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const session = await nauth0.getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const achievements = await achievementRepo.listAchievements(session.user?.id);

  return {
    props: {
      session,
      achievements,
    },
  };
};

export default Me;
