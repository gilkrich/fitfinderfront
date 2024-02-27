import React, { useEffect, useState, useContext, createContext } from "react";
import clothingSizesPerCompany from "../../companies.json";
import newClothingSizesPerCompany from "../../newcompanies.json"
import axios from "axios";
import { Context } from "../MainContext";
export const Sizecontext = createContext({});
const clothTypes = ["shirts", "pants","dresses"];
const bodyParts = ["waist", "chest", "neckline", "arms", "hips"];
const sizesArr = ["0","XXS", "XS", "S", "M", "L", "XL", "XXL","XXXL"];
const pantsSizeArrL=["0","XXS","XS","S","M","M","L","L","XL","XL","XXL","XXL","XXXL","XXXL"]
const pantsSizeArr = ["30","32","34","36","38","40","42","44","46","48","50","52","54","56"]
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
            // clothingSizesPerCompany[companyName][gender][clothType];
            newClothingSizesPerCompany[companyName][gender][clothType];
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
        console.log(userSizesPerCompany);

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
      return ["0","XXS", "XS", "S", "M", "L", "XL", "XXL","XXXL"];
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
        // console.log(sizesArr[0])
        let arrHolder=bodyPartRanges.length>sizesArr.length?pantsSizeArr:sizesArr;
        // bodyPartResult = arrHolder.length==pantsSizeArr.length?arrHolder[j+(arrHolder.length-bodyPartRanges.length)]+"/"+pantsSizeArrL[j+(arrHolder.length-bodyPartRanges.length)]:arrHolder[j+(arrHolder.length-bodyPartRanges.length)];
        bodyPartResult=arrHolder[j+(arrHolder.length-bodyPartRanges.length)];
        break;
      }
    }
    return bodyPartResult;
  }

  function calculateFinalSize(clothSizes) {
    const validSizes = Object.values(clothSizes).filter(
      (size) => size !== "Sorry" && size !== ""
    );
    console.log(validSizes)
    let arrHolderfinal=isNaN(Number(validSizes[0]))||Number(validSizes[0])==0?sizesArr:pantsSizeArr;
    const totalSizeIndex = validSizes.reduce(
      (acc, size) => acc + arrHolderfinal.indexOf(size),
      0
    );
     console.log(totalSizeIndex)
    const averageSizeIndex = Math.ceil(totalSizeIndex / validSizes.length);
    if(arrHolderfinal.length==pantsSizeArr.length){
      return pantsSizeArr[averageSizeIndex]+"/"+pantsSizeArrL[averageSizeIndex]
    }
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