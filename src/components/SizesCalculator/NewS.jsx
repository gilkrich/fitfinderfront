import React, { useEffect, useState } from "react";
import clothingSizesPerCompany from "../../companies.json";

const clothTypes = ["shirts", "pants"];
const bodyParts = ["waist", "chest", "neckline", "arms", "hips"];
const sizesArr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
const companiesArr = ["H&M", "ZARA", "AmericanEagle"];

function NewS() {
  const [gender, setGender] = useState("women");

  useEffect(() => {
    // TODO: Remove this, this is just hardcoded for testing
    const userBodyPartSizes = {
      waist: 82,
      chest: 82,
      arms: 82,
      hips: 82,
      neckline: 50,
    };

    let userSizesPerCompany = [];
    for (let companyName of companiesArr) {
      let clothTypesArr = [];
      console.log(clothingSizesPerCompany[companyName]);
      for (const clothType of clothTypes) {
        const clothBodyPartRages =
          clothingSizesPerCompany[companyName][gender][clothType];
        let textSizePerBodyPart = [];
        for (let bodyPart in clothBodyPartRages) {
          textSizePerBodyPart.push(
            numberSizeToTextSize(
              clothBodyPartRages[bodyPart],
              userBodyPartSizes[bodyPart]
            )
          );
        }
        clothTypesArr.push({[clothType]: calculateFinalSize(textSizePerBodyPart)});
      }
      userSizesPerCompany.push({[companyName]: clothTypesArr});
    }
    console.log(userSizesPerCompany);
  }, []);

  function translateAgeGroupToTextualSizes() {
    if (gender === "girls_2_8" || gender === "boys_2_8") {
      return ["2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y"];
    } else if (gender === "girls_9_14" || gender === "boys_9_14") {
      return ["9Y", "10Y", "11Y", "12Y", "13Y", "14Y", "15Y"];
    } else if (gender === "women" || gender === "men") {
      return ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
    } else {
      console.log("error: invalid gender");
      return [];
    }
  }

  function numberSizeToTextSize(bodyPartRanges, bodyPartMesurement) {
    let sizesArr = translateAgeGroupToTextualSizes();

    // Verify parameters values
    if (
      !bodyPartRanges ||
      bodyPartRanges.length === 0 ||
      (typeof bodyPartMesurement === "number" &&
        Number.isFinite(bodyPartMesurement))
    ) {
      return "Sorry";
    }

    // If the body part mesurement is out of all range, return "sorry"
    const lowestRangeNumber = bodyPartRanges[0].split("-")[0];
    const highestRangeNumber = bodyPartRanges[bodyPartRanges.length - 1].split("-")[1];
    if (
      lowestRangeNumber > bodyPartMesurement ||
      bodyPartMesurement > highestRangeNumber
    ) {
      return "Sorry";
    }

    let bodyPartResult = "Sorry";
    for (let j = 0; j < bodyPartRanges.length; j++) {
      const range = bodyPartRanges[j];
      const [lowerRangeNumber, HigherLeftNumber] = range.split("-");

      if (
        lowerRangeNumber <= bodyPartMesurement &&
        bodyPartMesurement < HigherLeftNumber
      ) {
        bodyPartResult = sizesArr[j];
        break;
      }
    }

    return bodyPartResult;
  }

  function calculateFinalSize(clothSizes) {
    const validSizes = Object.values(clothSizes).filter(
      (size) => size !== "Sorry" && size !== ""
    );

    const totalSizeIndex = validSizes.reduce(
      (acc, size) => acc + sizesArr.indexOf(size),
      0
    );

    const averageSizeIndex = Math.ceil(totalSizeIndex / validSizes.length);

    return sizesArr[averageSizeIndex];
  }

  return <div></div>;
}
export default NewS;