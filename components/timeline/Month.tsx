import { Achievement } from "lib/achievement";
import React from "react";
import AchievementList from "./AchievementList";

type Props = {
  label: string;
  achievements: Achievement[];
};

const Month: React.FC<Props> = ({ label, achievements }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{label}</h2>
      <AchievementList achievements={achievements} />
    </div>
  );
};

export default Month;
