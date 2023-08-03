import React from "react";
import { useState, useEffect } from "react";
import SizesData from "../../companies.json";

function SizesCalculator() {
  const companiesArr = ["H&M", "ZARA", "AmericanEagle"];
  const [BodyArr, setBodyArr] = useState([]);
  const [gender, setGender] = useState("");
  const [clothType, setClothType] = useState("");
  
  const [SolutionArr, setSolutionArr] = useState(
    companiesArr.map(() => ({
      waist: "",
      chest: "",
      hips: "",
      arms: "",
    }))
  );

  useEffect(() => {
    if (SizesData && BodyArr.length === 0) {
      let newWaistArr = [];
      let newChestArr = [];
      let newArmsArr = [];
      let newHipsArr = [];
      if (!BodyArr.length > 0) {
        for (let i = 0; i < companiesArr.length; i++) {
          BodyArr.push({
            waist: SizesData[companiesArr[i]]?.[gender]?.[clothType]?.waist
              ? [
                  ...newWaistArr,
                  ...SizesData[companiesArr[i]]?.[gender]?.[clothType]?.waist,
                ]
              : [],
            chest: SizesData[companiesArr[i]]?.[gender]?.[clothType]?.chest
              ? [
                  ...newChestArr,
                  ...SizesData[companiesArr[i]]?.[gender]?.[clothType]?.chest,
                ]
              : [],
            arms: SizesData[companiesArr[i]]?.[gender]?.[clothType]?.arms
              ? [
                  ...newArmsArr,
                  ...SizesData[companiesArr[i]]?.[gender]?.[clothType]?.arms,
                ]
              : [],
            hips: SizesData[companiesArr[i]]?.[gender]?.[clothType]?.hips
              ? [
                  ...newHipsArr,
                  ...SizesData[companiesArr[i]]?.[gender]?.[clothType]?.hips,
                ]
              : [],
          });
        }
      }
      setBodyArr([...BodyArr]);
      BodyArr[0]?.waist && Waist(78);
      BodyArr[0]?.chest && Chest(78);
      BodyArr[0]?.hips && Hips(78);
      BodyArr[0]?.arms && Arms(78);
      calculateFinalSize();
    }
  }, []);

  function Waist(waist) {
    const updatedSolutionArr = [...SolutionArr];
    for (let i = 0; i < BodyArr.length; i++) {
      if (BodyArr[i].waist.length === 0) {
        updatedSolutionArr[i].waist = "Sorry";
      }

      for (let j = 0; j < BodyArr[i].waist.length; j++) {
        const range = BodyArr[i]?.waist[j];
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
    setSolutionArr(updatedSolutionArr);
  }
  function Chest(chest) {
    const updatedSolutionArr = [...SolutionArr];
    for (let i = 0; i < BodyArr.length; i++) {
      if (BodyArr[i].chest.length === 0) {
        updatedSolutionArr[i].chest = "Sorry";
      }

      for (let j = 0; j < BodyArr[i].chest.length; j++) {
        const range = BodyArr[i]?.chest[j];
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
    setSolutionArr(updatedSolutionArr);
  }
  function Hips(hips) {
    const updatedSolutionArr = [...SolutionArr];
    for (let i = 0; i < BodyArr.length; i++) {
      if (BodyArr[i].hips.length === 0) {
        updatedSolutionArr[i].hips = "Sorry";
      }

      for (let j = 0; j < BodyArr[i].hips.length; j++) {
        const range = BodyArr[i]?.hips[j];
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
    setSolutionArr(updatedSolutionArr);
  }
  function Arms(arms) {
    const updatedSolutionArr = [...SolutionArr];
    for (let i = 0; i < BodyArr.length; i++) {
      if (BodyArr[i].arms.length === 0) {
        updatedSolutionArr[i].arms = "Sorry";
      }

      for (let j = 0; j < BodyArr[i].arms.length; j++) {
        const range = BodyArr[i]?.arms[j];
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
    setSolutionArr(updatedSolutionArr);
  }

  function calculateFinalSize() {
    const sizesArr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
    const finalSizesObj = {};
  
    companiesArr.forEach((company, index) => {
      const companySizes = SolutionArr[index];
  
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
  
    Object.keys(finalSizesObj).forEach((company) => {
      if (typeof finalSizesObj[company] === "undefined") {
        finalSizesObj[company] = "Sorry, we don't have a fit size for you";
      }
    });
  
    console.log(finalSizesObj);
  }

  return <div></div>;
}
export default SizesCalculator;