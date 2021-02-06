import { AchievementRepo, CreateAchievement } from "lib/achievement";
import fauna, { query } from "faunadb";
import { faunaSecret } from "lib/config";
import formatISO from "date-fns/formatISO";

const client = new fauna.Client({ secret: faunaSecret });
const q = query;

const createAchievement: CreateAchievement = async (achievement) => {
  const when = formatISO(achievement.when, { representation: "date" });

  // TODO: Improve Fauna typing
  const resp = await client.query<any>(
    q.Create(q.Collection("achievements"), {
      data: {
        ...achievement,
        when,
      },
    })
  );

  return {
    id: resp.ref.id,
    ...achievement,
  };
};

export const achievementRepo: AchievementRepo = {
  createAchievement,
};
