import * as yup from "yup";

export type AchievementDto = {
  when: Date;
  what: string;
};

export const achievementSchema = yup.object().shape({
  when: yup.date().required(),
  what: yup.string().required(),
});

export type Achievement = {
  id: string;
  owner: string;
  when: Date;
  what: string;
};

export type CreateAchievement = (
  achievement: Omit<Achievement, "id">
) => Promise<Achievement>;

export type ListAchievements = (owner: string) => Promise<Achievement[]>;

export type AchievementRepo = {
  createAchievement: CreateAchievement;
  listAchievements: ListAchievements;
};
