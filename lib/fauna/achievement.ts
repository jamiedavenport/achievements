import {
  Achievement,
  AchievementRepo,
  CreateAchievement,
  FetchAchievements,
} from "lib/achievement";
import fauna, { query } from "faunadb";
import { faunaSecret } from "lib/config";
import formatISO from "date-fns/formatISO";

const client = new fauna.Client({ secret: faunaSecret });
const q = query;

const toAchievement = (faunaObject: any): Achievement => {
  return {
    id: faunaObject.ref.id,
    owner: faunaObject.data.owner,
    when: new Date(faunaObject.data.when),
    what: faunaObject.data.what,
  };
};

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

const fetchAchievements: FetchAchievements = async (owner: string) => {
  const resp = await client.query<any>(
    q.Map(
      q.Paginate(q.Match(q.Index("byOwner"), owner)),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  );

  return resp.data.map(toAchievement);
};

export const achievementRepo: AchievementRepo = {
  createAchievement,
  fetchAchievements,
};
