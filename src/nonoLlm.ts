import { generateRandomString } from "./utils";
import type { Captcha } from "./types";

export function generateQuestionAnswer(): Captcha {
  const randomString = generateRandomString(30);
  const randomStringLength = randomString.length;

  const randomCharacter = randomString.charAt(
    Math.floor(Math.random() * randomStringLength),
  );
  const appearances = randomString.split(randomCharacter).length - 1;
  const secondIndex = Math.floor(Math.random() * appearances) + 1;

  let offset = 0;
  for (
    let i = 0, count = 0;
    i < randomStringLength && count < secondIndex;
    i++
  ) {
    if (randomString[i] === randomCharacter) {
      count++;
      if (count === secondIndex) {
        offset = i;
      }
    }
  }

  const firstIndex =
    Math.floor(Math.random() * (randomStringLength - offset - 1)) +
    1;
  const question =
    `Please output the ${firstIndex}-th character after the ${secondIndex}-th appearance of '${randomCharacter}' in the string '${randomString}'.`;

  return { question, answer: randomString[offset + firstIndex] };
}
