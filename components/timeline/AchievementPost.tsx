import React from "react";
import { Achievement } from "lib/achievement";
import format from "date-fns/format";

type Props = {
  achievement: Achievement;
};

const AchievementPost: React.FC<Props> = ({ achievement }) => {
  const { what, when } = achievement;

  const date = format(when, "d MMM");

  return (
    <div>
      <span className="text-gray-500">{date}</span>
      <p className="text-lg">{what}</p>
    </div>
  );
};

export default AchievementPost;
