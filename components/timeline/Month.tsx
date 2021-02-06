import { Achievement } from "lib/achievement";
import React from "react";
import AchievementList from "./AchievementList";

type Props = {
  label: string;
};

const mockAchievements: Achievement[] = [
  {
    id: "1",
    owner: "me",
    what: "Built and achievement tracker",
    when: new Date(),
  },
  {
    id: "2",
    owner: "me",
    what: "Built and achievement tracker",
    when: new Date(),
  },
  {
    id: "3",
    owner: "me",
    what: "Built and achievement tracker",
    when: new Date(),
  },
];

const Month: React.FC<Props> = ({ label }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{label}</h2>
      <AchievementList achievements={mockAchievements} />
    </div>
  );
};

export default Month;
