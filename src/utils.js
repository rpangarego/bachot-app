export const getRandomColor = () =>{
    const colors = [
        "F4A261",
        "2A9D8F",
        "0096C7",
        "023E8A",
        "FCA311",
        "6D6875",
        "E5989B",
        "FAA307",
        "6930C3",
        "5390D9"
      ];
      return colors[Math.floor(Math.random() * (colors.length - 1))];
}
 export const getGibberishWord = () =>{
    const gibberishWords = [
        "dieticat",
        "abstep",
        "supress",
        "atious",
        "beauction",
        "signom",
        "brigat",
        "grilled",
        "puloby",
        "diumed",
        "dithorit",
        "gention"
      ];
      return gibberishWords[Math.floor(Math.random() * (gibberishWords.length - 1))];
 }