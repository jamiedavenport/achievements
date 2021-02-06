import { Achievement } from "lib/achievement";
import React from "react";
import AchievementPost from "./AchievementPost";
import compareDesc from "date-fns/compareDesc";

type Props = {
  achievements: Achievement[];
};

const AchievementList: React.FC<Props> = ({ achievements }) => {
  const sortedAchievements = achievements.sort((a, b) =>
    compareDesc(a.when, b.when)
  );

  return (
    <div className="space-y-5">
      {sortedAchievements.map((achievement) => (
        <AchievementPost key={achievement.id} achievement={achievement} />
      ))}
    </div>
  );
};

export default AchievementList;
