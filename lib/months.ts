import { Achievement } from "./achievement";
import getMonth from "date-fns/getMonth";

export const months = [
  {
    id: 0,
    label: "January",
  },
  {
    id: 1,
    label: "February",
  },
  {
    id: 2,
    label: "March",
  },
  {
    id: 3,
    label: "April",
  },
  {
    id: 4,
    label: "May",
  },
  {
    id: 5,
    label: "June",
  },
  {
    id: 6,
    label: "July",
  },
  {
    id: 7,
    label: "August",
  },
  {
    id: 8,
    label: "September",
  },
  {
    id: 9,
    label: "October",
  },
  {
    id: 10,
    label: "November",
  },
  {
    id: 11,
    label: "December",
  },
].reverse();

export const filterAchievements = (
  achievements: Achievement[]
): Record<number, Achievement[]> => {
  const buckets: Record<number, Achievement[]> = {};
  for (let i = 0; i < 12; i++) {
    buckets[i] = [];
  }

  achievements.forEach((achievement) => {
    const month = getMonth(achievement.when);
    buckets[month].push(achievement);
  });

  return buckets;
};
