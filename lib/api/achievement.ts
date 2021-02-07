import { Achievement, AchievementDto } from "lib/achievement";

const parseAchievement = (json: Record<string, string>): Achievement => {
  return {
    owner: json.owner,
    what: json.what,
    when: new Date(json.when),
    id: json.id,
  };
};

export const createAchievement = async (values: AchievementDto) => {
  const resp = await fetch(`/api/achievements`, {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!resp.ok) {
    const error = await resp.text();
    throw new Error(error);
  }

  return parseAchievement(await resp.json());
};

export const fetchAchievements = async () => {
  const resp = await fetch(`/api/achievements`);

  if (!resp.ok) {
    const error = await resp.text();
    throw new Error(error);
  }

  return (await resp.json()).map(parseAchievement);
};
