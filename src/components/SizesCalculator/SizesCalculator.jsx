import React from "react";
import { useState, useEffect } from "react";
import SizesData from "../../companies.json";

function SizesCalculator() {
  const companiesArr = ["H&M", "ZARA", "AmericanEagle"];
  const [dimensions, setDimensions] = useState();
  const [womenBodyArr, setWomenBodyArr] = useState([{}]);
  console.log(womenBodyArr);
  const [womenSolutionArr, setWomentSolutionArr] = useState([]);
  // const [womenWaistSolutionsArr, setWomenWaistSolutionArr] = useState([]);
  // const [womenChestSolutionsArr, setWomenChestSolutionArr] = useState([]);
  // const [womenArmsSolutionsArr, setWomenArmsSolutionArr] = useState([]);
  // const [womenHipsSolutionsArr, setWomenHipsSolutionArr] = useState([]);

  // const [womenWaistArr, setWomenWaistArr] = useState([]);
  // const [womenChestArr, setWomenChestArr] = useState([]);
  // const [womenArmsArr, setWomenArmsArr] = useState([]);
  // const [womenHipsArr, setWomenHipsArr] = useState([]);

  // const [menWaistSolutionsArr, setMenWaistSolutionArr] = useState([]);
  // const [menChestSolutionsArr, setMenChestSolutionArr] = useState([]);
  // const [menArmsSolutionsArr, setMenArmsSolutionArr] = useState([]);
  // const [menHipsSolutionsArr, setMenHipsSolutionArr] = useState([]);
  // const [menNecklineSolutionsArr, setMenNecklineSolutionArr] = useState([]);

  // const [menWaistArr, setMenWaistArr] = useState([]);
  // const [menChestArr, setMenChestArr] = useState([]);
  // const [menArmsArr, setMenArmsArr] = useState([]);
  // const [menHipsArr, setMenHipsArr] = useState([]);
  // const [menNecklineArr, setMenNecklineArr] = useState([]);

  useEffect(() => {
    setDimensions(SizesData);
  }, []);

  useEffect(() => {
    if (dimensions) {
      let newWomenWaistArr = [];
      let newWomenChestArr = [];
      let newWomenArmsArr = [];
      let newWomenHipsArr = [];

      for (let i = 0; i < companiesArr.length; i++) {
        womenBodyArr.push({
          waist: dimensions[companiesArr[i]]?.women?.shirts.waist
            ? [
                ...newWomenWaistArr,
                ...dimensions[companiesArr[i]]?.women?.shirts.waist,
              ]
            : [],
          chest:dimensions[companiesArr[i]]?.women?.shirts.chest
              ? [
                  ...newWomenChestArr,
                  dimensions[companiesArr[i]]?.women?.shirts.chest,
                ]
              : [],
          arms:dimensions[companiesArr[i]]?.women?.shirts.arms
              ? [
                  ...newWomenArmsArr,
                  dimensions[companiesArr[i]]?.women?.shirts.arms,
                ]
              : [],
          hips:dimensions[companiesArr[i]]?.women?.shirts.hips
              ? [
                  ...newWomenHipsArr,
                  dimensions[companiesArr[i]]?.women?.shirts.hips,
                ]
              : []
        });
      }
      // setWomenWaistArr(newWomenWaistArr);
      // setWomenChestArr(newWomenChestArr);
      // setWomenArmsArr(newWomenArmsArr);
      // setWomenHipsArr(newWomenHipsArr);
      // setWomentSolutionArr([{}])
    }
  }, [dimensions]);

  // useEffect(() => {
  //   if (dimensions) {
  //     let newMenWaistArr = [];
  //     let newMenChestArr = [];
  //     let newMenArmsArr = [];
  //     let newMenHipsArr = [];
  //     let newMenNecklineArr = [];
  //     for (let i = 0; i < companiesArr.length; i++) {
  //       newMenWaistArr.push(
  //         dimensions[companiesArr[i]]?.men?.shirts.waist
  //           ? dimensions[companiesArr[i]]?.men?.shirts.waist
  //           : []
  //       );
  //       newMenChestArr.push(
  //         dimensions[companiesArr[i]]?.men?.shirts.chest
  //           ? dimensions[companiesArr[i]]?.men?.shirts.chest
  //           : []
  //       );
  //       newMenArmsArr.push(
  //         dimensions[companiesArr[i]]?.men?.shirts.arms
  //           ? dimensions[companiesArr[i]]?.men?.shirts.arms
  //           : []
  //       );
  //       newMenHipsArr.push(
  //         dimensions[companiesArr[i]]?.men?.shirts.hips
  //           ? dimensions[companiesArr[i]]?.men?.shirts.hips
  //           : []
  //       );
  //       newMenNecklineArr.push(
  //         dimensions[companiesArr[i]]?.men?.shirts?.neckline
  //           ? dimensions[companiesArr[i]]?.men?.shirts?.neckline
  //           : []
  //       );
  //     }
  //     setMenWaistArr(newMenWaistArr);
  //     setMenChestArr(newMenChestArr);
  //     setMenArmsArr(newMenArmsArr);
  //     setMenHipsArr(newMenHipsArr);
  //     setMenNecklineArr(newMenNecklineArr);
  //   }
  // }, [dimensions]);

  // async function CalcSize(waist, chest, arms, hips) {
  //   const body = [waist, chest, arms, hips];
  //   const HM = [];
  //   const ZARA = [];
  //   const AmericanEagle = [];

  //   for (let i = 0; i < body.length; i++) {
  //     for (let j = 0; j < body[i].length; j++) {
  //       if (j == 0) {
  //         HM.push(body[i][j]);
  //       }
  //       if (j == 1) {
  //         ZARA.push(body[i][j]);
  //       }
  //       if (j == 2) {
  //         AmericanEagle.push(body[i][j]);
  //       }
  //     }
  //   }
  //   const comArry = [HM, ZARA, AmericanEagle];

  //   let count = 0;
  //   const size = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //   console.log(size.indexOf(comArry[0][0]));
  //   console.log(HM);
  //   for (let i = 0; i < comArry.length; i++) {
  //     for (let j = 0; j < comArry[i].length; j++) {
  //       if ((i = 0)) {
  //         size.indexOf(comArry[0][j]);
  //         count += comArry[0][j];
  //         finalSizeHM = Math.ceil(count / HM.length);
  //         console.log(size[finalSizeHM]);
  //       }
  //     }
  //   }
  // }

  // CalcSize(
  //   womenWaistSolutionsArr,
  //   womenChestSolutionsArr,
  //   womenArmsSolutionsArr,
  //   womenHipsSolutionsArr
  // );

  function WomenWaist(waist) {
    for (let i = 0; i < womenWaistArr?.length; i++) {
      if (womenWaistArr[i].length == 0) {
        womenWaistSolutionsArr.push(
          "Sorry, we don't have a suitable size for you"
        );
      }

      for (let j = 0; j < womenWaistArr[i]?.length; j++) {
        const range = womenWaistArr[i][j];

        const [left, right] = range.split("-");

        if (left > waist && j == 0) {
          womenWaistSolutionsArr.push(
            "Sorry, we don't have a suitable size for you"
          );
        }
        if (waist > right && j == 6) {
          womenWaistSolutionsArr.push(
            "Sorry, we don't have a suitable size for you"
          );
        }
        if (left <= waist && waist < right) {
          const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
          womenWaistSolutionsArr.push(arr[j]);
        }
      }
    }
  }
  WomenWaist(78);

  // function WomenChest(chest) {
  //   for (let i = 0; i < womenChestArr.length; i++) {
  //     if (womenChestArr[i].length == 0) {
  //       womenChestSolutionsArr.push(
  //         "Sorry, we don't have a suitable size for you"
  //       );
  //     }

  //     for (let j = 0; j < womenChestArr[i]?.length; j++) {
  //       const range = womenChestArr[i][j];
  //       const [left, right] = range.split("-");
  //       if (left > chest && j == 0) {
  //         womenChestSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (chest > right && j == 6) {
  //         womenChestSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (left <= chest && chest < right) {
  //         const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //         womenChestSolutionsArr.push(arr[j]);
  //       }
  //     }
  //   }
  // }
  // WomenChest(78);

  // function WomenArms(arms) {
  //   for (let i = 0; i < womenArmsArr?.length; i++) {
  //     if (womenArmsArr[i].length == 0) {
  //       womenArmsSolutionsArr.push(
  //         "Sorry, we don't have a suitable size for you"
  //       );
  //     }
  //     for (let j = 0; j < womenArmsArr[i]?.length; j++) {
  //       const range = womenArmsArr[i][j];
  //       const [left, right] = range.split("-");

  //       if (left > arms && j == 0) {
  //         womenArmsSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (right < arms && j == 6) {
  //         womenArmsSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (left <= arms && arms < right) {
  //         const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //         womenArmsSolutionsArr.push(arr[j]);
  //       }
  //     }
  //   }
  // }
  // WomenArms(78);

  // function WomenHips(hips) {
  //   for (let i = 0; i < womenHipsArr?.length; i++) {
  //     if (womenHipsArr[i].length == 0) {
  //       womenHipsSolutionsArr.push(
  //         "Sorry, we don't have a suitable size for you"
  //       );
  //     }

  //     for (let j = 0; j < womenHipsArr[i]?.length; j++) {
  //       const range = womenHipsArr[i][j];

  //       const [left, right] = range.split("-");
  //       if (left > hips && j == 0) {
  //         womenHipsSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (hips > right && j == 6) {
  //         womenHipsSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }

  //       if (left <= hips && hips < right) {
  //         const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //         womenHipsSolutionsArr.push(arr[j]);
  //       }
  //     }
  //   }
  // }
  // WomenHips(78);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function MenChest(chest) {
  //   for (let i = 0; i < menChestArr?.length; i++) {
  //     if (menChestArr[i].length == 0) {
  //       menChestSolutionsArr.push(
  //         "Sorry, we don't have a suitable size for you"
  //       );
  //     }
  //     for (let j = 0; j < menChestArr[i]?.length; j++) {
  //       const range = menChestArr[i][j];

  //       const [left, right] = range.split("-");

  //       if (left > chest && j == 0) {
  //         menChestSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (chest > right && j == 6) {
  //         menChestSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }

  //       if (left <= chest && chest < right) {
  //         const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //         menChestSolutionsArr.push(arr[j]);
  //       }
  //     }
  //   }
  // }

  // MenChest(78);
  // function MenWaist(waist) {
  //   for (let i = 0; i < menWaistArr?.length; i++) {
  //     if (menWaistArr[i].length == 0) {
  //       menWaistSolutionsArr.push(
  //         "Sorry, we don't have a suitable size for you"
  //       );
  //     }
  //     for (let j = 0; j < menWaistArr[i]?.length; j++) {
  //       const range = menWaistArr[i][j];
  //       const [left, right] = range.split("-");
  //       if (left > waist && j == 0) {
  //         menWaistSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (waist > right && j == 6) {
  //         menWaistSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }

  //       if (left <= waist && waist < right) {
  //         const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //         menWaistSolutionsArr.push(arr[j]);
  //       }
  //     }
  //   }
  // }
  // MenWaist(78);

  // function MenArms(arms) {
  //   for (let i = 0; i < menArmsArr?.length; i++) {
  //     if (menArmsArr[i].length == 0) {
  //       menArmsSolutionsArr.push(
  //         "Sorry, we don't have a suitable size for you"
  //       );
  //     }

  //     for (let j = 0; j < menArmsArr[i]?.length; j++) {
  //       const range = menArmsArr[i][j];

  //       const [left, right] = range.split("-");
  //       if (left > arms && j == 0) {
  //         menArmsSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (arms > right && j == 6) {
  //         menArmsSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }

  //       if (left <= arms && arms < right) {
  //         const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //         menArmsSolutionsArr.push(arr[j]);
  //       }
  //     }
  //   }
  // }
  // MenArms(78);

  // function MenNeckline(neckline) {
  //   for (let i = 0; i < menNecklineArr?.length; i++) {
  //     if (menNecklineArr[i].length == 0) {
  //       menNecklineSolutionsArr.push(
  //         "Sorry, we don't have a suitable size for you"
  //       );
  //     }
  //     for (let j = 0; j < menNecklineArr[i]?.length; j++) {
  //       const range = menNecklineArr[i][j];

  //       const [left, right] = range.split("-");
  //       if (left > neckline && j == 0) {
  //         menNecklineSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }
  //       if (neckline > right && j == 6) {
  //         menNecklineSolutionsArr.push(
  //           "Sorry, we don't have a suitable size for you"
  //         );
  //       }

  //       if (left <= neckline && neckline < right) {
  //         const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //         menNecklineSolutionsArr.push(arr[j]);
  //       }
  //     }
  //   }
  // }
  // MenNeckline(78);

  // function MenHips(hips) {
  //   for (let i = 0; i < menHipsArr?.length; i++) {
  //     if (menHipsArr[i].length == 0) {
  //       menHipsSolutionsArr.push(
  //         "Sorry, we don't have a suitable size for you"
  //       );
  //     }
  //     for (let j = 0; j < menHipsArr[i]?.length; j++) {
  //       const range = menHipsArr[i][j];

  //       const [left, right] = range.split("-");
  //       if (left > hips && j == 0) {
  //         menHipsSolutionsArr.push("1 sorry we dont have your hips size");
  //       }
  //       if (hips > right && j == 6) {
  //         menHipsSolutionsArr.push("2 sorry we dont have your hips size");
  //       }

  //       if (left <= hips && hips < right) {
  //         const arr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
  //         menHipsSolutionsArr.push(arr[j]);
  //       }
  //     }
  //   }
  // }
  // MenHips(78);

  return <div></div>;
}

export default SizesCalculator;
