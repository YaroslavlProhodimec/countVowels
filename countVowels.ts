
const countVowels = (str) => {
  let examle = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    // console.log(examle.includes(char), "char.includes(examle)");

    if (examle.includes(char)) {
      result += char;
    }
  }
  return result;
};
const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

console.log(countVowels("Hello")); // Ожидаемый результат: 2 (о и е)
console.log(countVowels("JavaScript")); // Ожидаемый результат: 3 (a, a и i)
console.log(countVowels("Testing")); // Ожидаемый результат: 2 (e и i)
