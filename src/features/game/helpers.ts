export const createGame = (countriesDataList: any) => {
  const indexArray = [...new Array(10)].map(() =>
    Number((Math.random() * countriesDataList.length).toFixed())
  );
  const questionArray = [
    { question: "Jaka jest stolica tego państwa?", value: "capital" },
    { question: "Jaka waluta jest w tym państwie?", value: "currencies" },
    { question: "W jakim regionie znajduje się to państwo?", value: "region" },
    { question: "Jaki jest kod ISO-3 w tym państwie?", value: "alpha3Code" },
    { question: "Jak się nazywa państwo z tą flagą?", value: "flag" },
    {
      question: "Jak dużo obywateli jest w tym państwie?",
      value: "population",
    },
    { question: "Jaka jest powierzchnia tego państwa?", value: "area" },
    { question: "Jaka waluta jest w tym państwie?", value: "currencies" },
    { question: "Jaka jest stolica tego państwa?", value: "capital" },
    { question: "W jakim regionie znajduje się to państwo?", value: "region" },
  ].sort(() => 0.5 - Math.random());
  const game = [...new Array(10)].map((v, id) => ({
    question: questionArray[id].question,
    value: questionArray[id].value,
    nation: countriesDataList[indexArray[id]],
    answers: [
      countriesDataList[indexArray[id]],
      countriesDataList[
        Number((Math.random() * countriesDataList.length).toFixed())
      ],
      countriesDataList[
        Number((Math.random() * countriesDataList.length).toFixed())
      ],
      countriesDataList[
        Number((Math.random() * countriesDataList.length).toFixed())
      ],
    ].sort(() => 0.5 - Math.random()),
  }));
  console.log(indexArray);
  return game;
};
