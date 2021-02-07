import { Achievement } from "./achievement";
import { filterAchievements } from "./months";

describe("filterAchievements", () => {
  it("should put events into month buckets", () => {
    const owner = "me";
    const achievements: Achievement[] = [
      {
        when: new Date(2021, 0, 1),
        what: "Something in Jan",
        owner,
        id: "1",
      },
      {
        when: new Date(2021, 1, 1),
        what: "Something in Feb",
        owner,
        id: "2",
      },
      {
        when: new Date(2021, 11, 1),
        what: "Something in Dec",
        owner,
        id: "3",
      },
      {
        when: new Date(2021, 0, 31),
        what: "Something else in Jan",
        owner,
        id: "4",
      },
      {
        when: new Date(2021, 2, 31),
        what: "Birthday!",
        owner,
        id: "5",
      },
      {
        when: new Date(2021, 3, 1),
        what: "April fools",
        owner,
        id: "6",
      },
    ];

    const buckets = filterAchievements(achievements);
    expect(buckets).toMatchSnapshot();
  });
});
