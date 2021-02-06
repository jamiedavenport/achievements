import { achievementSchema } from "lib/achievement";
import { achievementRepo } from "lib/fauna/achievement";
import nauth0 from "lib/nauth0";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end(`${req.method} is not supported`);
  }

  const session = await nauth0.getSession({ req });

  if (session === null) {
    return res.status(401).end("Unauthorized");
  }

  const isValidAchievement = await achievementSchema.isValid(req.body);

  if (!isValidAchievement) {
    return res.status(400).end("Achievement is not valid");
  }

  const achievement = achievementSchema.cast(req.body);

  const createdAchievement = await achievementRepo.createAchievement({
    owner: session.user?.id,
    when: achievement.when,
    what: achievement.what,
  });

  res.status(201).json(createdAchievement);
};

export default handler;
