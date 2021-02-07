import NewAchievementForm from "components/NewAchievementForm";
import Timeline from "components/timeline/Timeline";
import AppLayout from "layouts/AppLayout";
import { Achievement } from "lib/achievement";
import { fetchAchievements } from "lib/api/achievement";
import { achievementRepo } from "lib/fauna/achievement";
import nauth0 from "lib/nauth0";
import { useSession } from "nauth0";
import { GetServerSideProps } from "next";
import React from "react";
import useSWR, { mutate } from "swr";

type Props = {
  achievements: Achievement[];
};

const Me: React.FC<Props> = ({ achievements }) => {
  const [session] = useSession();

  const { data, error } = useSWR("/api/achievements", fetchAchievements, {
    initialData: achievements,
  });

  const handleNewAchievement = (achievement: Achievement) => {
    mutate("/api/achievements", [...data, achievement], false);
  };

  const name = session.user?.givenName ?? session.user?.name;
  const title = `${name ? `${name}'s` : "My"} 2021`;

  if (error) {
    return <span>Something went wrong...</span>;
  }

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <AppLayout title={title}>
      <div className="mt-10">
        <NewAchievementForm onCreate={handleNewAchievement} />
      </div>
      <div className="mt-10">
        <Timeline achievements={data} />
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

  const achievements = await achievementRepo.fetchAchievements(
    session.user?.id
  );

  return {
    props: {
      session,
      achievements,
    },
  };
};

export default Me;
