import React, { useEffect, useState, useContext, createContext } from "react";
import clothingSizesPerCompany from "../../companies.json";
import axios from "axios";
import { Context } from "../MainContext";
export const Sizecontext = createContext({});
const clothTypes = ["shirts", "pants"];
const bodyParts = ["waist", "chest", "neckline", "arms", "hips"];
const sizesArr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
const companiesArr = ["H&M", "ZARA", "AmericanEagle"];
const SizeContext = ({ children }) => {
  const [finalObjSize, setFinalObjSize] = useState();
  const [measurementsClient, setMeasurementsClient] = useState("");
  const { userinfo } = useContext(Context);
  const gender = userinfo && userinfo.gender;


  useEffect(() => {
    // console.log(userinfo && userinfo.subusers.length);
    // console.log(gender);
    if (
      (userinfo.measurements && !userinfo.sizeincompaney) ||
      userinfo.subusers?.length > 0
    ) {
      let userSizesPerCompany = [];
      for (let companyName of companiesArr) {
        let clothTypesArr = [];
        // console.log(clothingSizesPerCompany[companyName]);
        for (const clothType of clothTypes) {
          // console.log(clothingSizesPerCompany[companyName][gender]);
          const clothBodyPartRages =
            clothingSizesPerCompany[companyName][gender][clothType];
          let textSizePerBodyPart = [];
          for (let bodyPart in clothBodyPartRages) {
            textSizePerBodyPart.push(
              numberSizeToTextSize(
                clothBodyPartRages[bodyPart],
                parseInt(userinfo.measurements[bodyPart])
              )
            );
            if (userinfo.subusers.length>0) {
              let subuserSize=[]
              for (let subuser of userinfo.subusers) {
                console.log(subuser);
                console.log(clothBodyPartRages[bodyPart]);
                console.log(subuser.measurements);
                console.log(clothBodyPartRages);
                subuserSize.push(numberSizeToTextSize(
                  clothingSizesPerCompany[companyName],
                  subuser.measurements
                  ));
                }
                console.log(subuserSize);
              }
          }
          clothTypesArr.push({
            [clothType]: calculateFinalSize(textSizePerBodyPart),
          });
        }
        userSizesPerCompany.push({ [companyName]: clothTypesArr });
      }

      axios.patch("http://localhost:3003/users/sizeincompaney", {
        id: userinfo._id,
        sizeincompaney: userSizesPerCompany,
      });
      setFinalObjSize(userSizesPerCompany);
    }
  }, [measurementsClient, userinfo, userinfo.subusers]);

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
      typeof bodyPartMesurement !== "number"
    ) {
      console.log("The parameters are invalid");
      return "Sorry";
    }

    // If the body part mesurement is out of all range, return "sorry"
    const lowestRangeNumber = bodyPartRanges[0].split("-")[0];
    const highestRangeNumber =
      bodyPartRanges[bodyPartRanges.length - 1].split("-")[1];
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

  return (
    <div>
      <Sizecontext.Provider value={{ finalObjSize, setMeasurementsClient }}>
        {children}
      </Sizecontext.Provider>
    </div>
  );
};

export default SizeContext;
