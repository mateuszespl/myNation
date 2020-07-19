export const createGame = (countriesDataList: any) => {
  const game = [
    {
      question: "Jaka waluta jest w tym państwie?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],
      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.currencies[0].code)
        .slice(0, 4),
    },
    {
      question: "Jaka jest stolica tego państwa?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.capital)
        .slice(0, 4),
    },
    {
      question: "W jakim regionie znajduje się to państo?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.region)
        .slice(0, 4),
    },
    {
      question: "Jaki jest kod ISO-3 w tym państwie?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.alpha3Code)
        .slice(0, 4),
    },
    {
      question: "Jak się nazywa państwo z tą flagą?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.flag)
        .slice(0, 4),
    },
    {
      question: "Jak dużo obywateli jest w tym państwie?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.population)
        .slice(0, 4),
    },
    {
      question: "Jaka jest powierzchnia tego państwa?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.area)
        .slice(0, 4),
    },
    {
      question: "Jaka waluta jest w tym państwie?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.currencies[0].code)
        .slice(0, 4),
    },
    {
      question: "Jaka jest stolica tego państwa?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.capital)
        .slice(0, 4),
    },
    {
      question: "W jakim regionie znajduje się to państo?",
      nation:
        countriesDataList[(Math.random() * countriesDataList.length).toFixed()],

      rightAnswer: "a",
      answers: countriesDataList
        .map((country: any) => country.region)
        .slice(0, 4),
    },
  ];
  return game;
};
