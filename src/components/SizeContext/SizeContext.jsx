import React, { useEffect, useState, useContext, createContext } from "react";
import clothingSizesPerCompany from "../../companies.json";
import axios from "axios";
import { Context } from "../MainContext";
export const Sizecontext = createContext({});
const clothTypes = ["shirts", "pants","dresses"];
const bodyParts = ["waist", "chest", "neckline", "arms", "hips"];
const sizesArr = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
const companiesArr = ["H&M", "ZARA", "AmericanEagle","Pull&Bear","GOLF","Mango"];
const SizeContext = ({ children }) => {
  const [finalObjSize, setFinalObjSize] = useState();
  const [measurementsClient, setMeasurementsClient] = useState("");
  const { userinfo } = useContext(Context);
  const gender = userinfo && userinfo.gender;
  let {setrefresh,refresh} = useContext(Context)

  useEffect(() => {

   if(userinfo.measurements&&userinfo){ if (
      (userinfo.measurements && !userinfo.sizeincompaney)) {
      let userSizesPerCompany = [];
      for (let companyName of companiesArr) {
        let clothTypesArr = [];
        for (const clothType of clothTypes) {
          const clothBodyPartRages =
            clothingSizesPerCompany[companyName][gender][clothType];
          let textSizePerBodyPart = [];
          for (let bodyPart in clothBodyPartRages) {
            textSizePerBodyPart.push(
              numberSizeToTextSize(
                clothBodyPartRages[bodyPart],
                parseInt(userinfo?.measurements[0]?.data[bodyPart])
              )
            );
          
          }
          clothTypesArr.push({
            [clothType]: calculateFinalSize(textSizePerBodyPart),
          });
        }
        userSizesPerCompany.push({ [companyName]: clothTypesArr });
      }

      axios.patch(import.meta.env.VITE_SERVER+"/users/sizeincompaney", {
        id: userinfo._id,
        sizeincompaney: userSizesPerCompany})
       
       setrefresh(!refresh) 
      setFinalObjSize(userSizesPerCompany);
    }

   
    if(userinfo.subusers&&userinfo.subusers.length>0){
    for (let i = 0; i < userinfo.subusers.length ; i++) {
      if ((userinfo.subusers[i].measurements && !userinfo.subusers[i].sizeincompany)) {

        let userSizesPerCompany = [];
        for (let companyName of companiesArr) {
          let clothTypesArr = [];
          for (const clothType of clothTypes) {
            console.log( clothingSizesPerCompany[companyName]);
            const clothBodyPartRages =
              clothingSizesPerCompany[companyName][userinfo?.subusers[i].gender][clothType];
            let textSizePerBodyPart = [];
            for (let bodyPart in clothBodyPartRages) {
              textSizePerBodyPart.push(
                numberSizeToTextSize(
                  clothBodyPartRages[bodyPart],
                  parseInt(userinfo.subusers[i].measurements[bodyPart])
                )
              );
            }
            clothTypesArr.push({
              
              [clothType]: calculateFinalSize(textSizePerBodyPart),
            });
          }
          userSizesPerCompany.push({ [companyName]: clothTypesArr });
        }
        
        console.log(userSizesPerCompany);

        axios.patch(import.meta.env.VITE_SERVER+"/users/sizeincompaneysub", {
          id: userinfo.subusers[i]._id,
          sizeincompany: userSizesPerCompany,
        });
       console.log(33);
        setrefresh(!refresh) 
      }
    }
    }

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