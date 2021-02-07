import { Achievement } from "lib/achievement";
import React from "react";
import Month from "./Month";
import { filterAchievements, months } from "lib/months";

type Props = {
  achievements: Achievement[];
};

const Timeline: React.FC<Props> = ({ achievements }) => {
  const buckets = filterAchievements(achievements);

  return (
    <div className="space-y-10">
      {months.map(({ id, label }) => {
        const bucket = buckets[id];
        return bucket.length !== 0 ? (
          <Month key={id} label={label} achievements={bucket} />
        ) : null;
      })}
    </div>
  );
};

export default Timeline;
