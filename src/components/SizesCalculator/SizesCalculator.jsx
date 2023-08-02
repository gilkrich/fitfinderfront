import React from "react";
import { useState, useEffect } from "react";
import SizesData from "../../companies.json";

function SizesCalculator() {
  const companiesArr = ["H&M", "ZARA", "AmericanEagle"];
  const [womenBodyArr, setWomenBodyArr] = useState([]);
  const [womenSolutionArr, setWomenSolutionArr] = useState(
    companiesArr.map(() => ({
      waist: "",
      chest: "",
      hips: "",
      arms: "",
    }))
  );

  useEffect(() => {
    if (SizesData && womenBodyArr.length === 0) {
      let newWomenWaistArr = [];
      let newWomenChestArr = [];
      let newWomenArmsArr = [];
      let newWomenHipsArr = [];
      if (!womenBodyArr.length > 0) {
        for (let i = 0; i < companiesArr.length; i++) {
          womenBodyArr.push({
            waist: SizesData[companiesArr[i]]?.women?.shirts.waist
              ? [
                  ...newWomenWaistArr,
                  ...SizesData[companiesArr[i]]?.women?.shirts.waist,
                ]
              : [],
            chest: SizesData[companiesArr[i]]?.women?.shirts.chest
              ? [
                  ...newWomenChestArr,
                  ...SizesData[companiesArr[i]]?.women?.shirts.chest,
                ]
              : [],
            arms: SizesData[companiesArr[i]]?.women?.shirts.arms
              ? [
                  ...newWomenArmsArr,
                  ...SizesData[companiesArr[i]]?.women?.shirts.arms,
                ]
              : [],
            hips: SizesData[companiesArr[i]]?.women?.shirts.hips
              ? [
                  ...newWomenHipsArr,
                  ...SizesData[companiesArr[i]]?.women?.shirts.hips,
                ]
              : [],
          });
        }
      }
      setWomenBodyArr([...womenBodyArr]);
      womenBodyArr[0]?.waist && WomenWaist(70);
      womenBodyArr[0]?.chest && WomenChest(70);
      womenBodyArr[0]?.hips && WomenHips(70);
      womenBodyArr[0]?.arms && WomenArms(70);
      calculateFinalSize();
    }
  }, []);

  function WomenWaist(waist) {
    const updatedSolutionArr = [...womenSolutionArr];
    for (let i = 0; i < womenBodyArr.length; i++) {
      if (womenBodyArr[i].waist.length === 0) {
        updatedSolutionArr[i].waist = "Sorry";
      }

      for (let j = 0; j < womenBodyArr[i].waist.length; j++) {
        const range = womenBodyArr[i]?.waist[j];
        const [left, right] = range.split("-");

        if (left > waist && j == 0) {
          updatedSolutionArr[i].waist = "Sorry";
        }
        if (waist > right && j == 6) {
          updatedSolutionArr[i].waist = "Sorry";
        }
        if (left <= waist && waist < right) {
          const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
          updatedSolutionArr[i].waist = arr[j];
        }
      }
    }
    setWomenSolutionArr(updatedSolutionArr);
  }
  function WomenChest(chest) {
    const updatedSolutionArr = [...womenSolutionArr];
    for (let i = 0; i < womenBodyArr.length; i++) {
      if (womenBodyArr[i].chest.length === 0) {
        updatedSolutionArr[i].chest = "Sorry";
      }

      for (let j = 0; j < womenBodyArr[i].chest.length; j++) {
        const range = womenBodyArr[i]?.chest[j];
        const [left, right] = range.split("-");

        if (left > chest && j == 0) {
          updatedSolutionArr[i].chest = "Sorry";
        }
        if (chest > right && j == 6) {
          updatedSolutionArr[i].chest = "Sorry";
        }
        if (left <= chest && chest < right) {
          const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];

          updatedSolutionArr[i].chest = arr[j];
        }
      }
    }
    setWomenSolutionArr(updatedSolutionArr);
  }
  function WomenHips(hips) {
    const updatedSolutionArr = [...womenSolutionArr];
    for (let i = 0; i < womenBodyArr.length; i++) {
      if (womenBodyArr[i].hips.length === 0) {
        updatedSolutionArr[i].hips = "Sorry";
      }

      for (let j = 0; j < womenBodyArr[i].hips.length; j++) {
        const range = womenBodyArr[i]?.hips[j];
        const [left, right] = range.split("-");

        if (left > hips && j == 0) {
          updatedSolutionArr[i].hips = "Sorry";
        }
        if (hips > right && j == 6) {
          updatedSolutionArr[i].hips = "Sorry";
        }
        if (left <= hips && hips < right) {
          const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];

          updatedSolutionArr[i].hips = arr[j];
        }
      }
    }
    setWomenSolutionArr(updatedSolutionArr);
  }
  function WomenArms(arms) {
    const updatedSolutionArr = [...womenSolutionArr];
    for (let i = 0; i < womenBodyArr.length; i++) {
      if (womenBodyArr[i].arms.length === 0) {
        updatedSolutionArr[i].arms = "Sorry";
      }

      for (let j = 0; j < womenBodyArr[i].arms.length; j++) {
        const range = womenBodyArr[i]?.arms[j];
        const [left, right] = range.split("-");

        if (left > arms && j == 0) {
          updatedSolutionArr[i].arms = "Sorry";
        }
        if (arms > right && j == 6) {
          updatedSolutionArr[i].arms = "Sorry";
        }
        if (left <= arms && arms < right) {
          const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];

          updatedSolutionArr[i].arms = arr[j];
        }
      }
    }
    setWomenSolutionArr(updatedSolutionArr);
  }

  function calculateFinalSize() {
    const sizesArr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
    const finalSizesObj = {};

    companiesArr.forEach((company, index) => {
      const companySizes = womenSolutionArr[index];

      const validSizes = Object.values(companySizes).filter(
        (size) => size !== "Sorry" && size !== ""
      );

      const totalSizeIndex = validSizes.reduce(
        (acc, size) => acc + sizesArr.indexOf(size),
        0
      );

      const averageSizeIndex = Math.ceil(totalSizeIndex / validSizes.length);

      const finalSize = sizesArr[averageSizeIndex];

      finalSizesObj[company] = finalSize;
    });

    console.log(finalSizesObj);
  }

  return <div></div>;
}
export default SizesCalculator;
