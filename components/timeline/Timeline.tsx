import { Achievement } from "lib/achievement";
import React from "react";
import AchievementList from "./AchievementList";
import Month from "./Month";

type Props = {
  achievements: Achievement[];
};

const Timeline: React.FC<Props> = ({ achievements }) => {
  return (
    <div className="space-y-10">
      <AchievementList achievements={achievements} />
    </div>
  );
};

export default Timeline;
