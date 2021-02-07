import Timeline from "components/timeline/Timeline";
import AppLayout from "layouts/AppLayout";
import { Achievement } from "lib/achievement";
import { achievementRepo } from "lib/fauna/achievement";
import nauth0 from "lib/nauth0";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  achievements: Achievement[];
};

const UserPage: React.FC<Props> = ({ achievements }) => {
  return (
    <AppLayout title="My 2021">
      <div className="mt-10">
        <Timeline achievements={achievements} />
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const session = await nauth0.getSession(ctx);

  const achievements = await achievementRepo.fetchAchievements(
    ctx.query.user as string
  );

  return {
    props: {
      session,
      achievements,
    },
  };
};

export default UserPage;
