import { Mountain } from "./models/mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  if (mountains.length === 0) return "";
  let currentTallestMountain: Mountain = mountains[0];
  mountains.forEach((mountain) => {
    if (mountain.height > currentTallestMountain.height) {
      currentTallestMountain = mountain;
    }
  });
  return currentTallestMountain.name;

  //   return mountains.reduce((prev, cur) =>
  //     prev.height < cur.height ? cur.name : prev.name
  //   );
};

console.log(`Everest`, findNameOfTallestMountain(mountains));
console.log(`Empty array`, findNameOfTallestMountain([]));
