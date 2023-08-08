import React, { useEffect, useState } from "react";
import "./BodyTypes.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import { useNavigate } from "react-router-dom";
import { Context } from "../MainContext"
import { useContext } from "react";
import data from "../../companies.json"


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const CakeGraph = () => {
  const [data1, setData1] = useState();
  const {userinfo,userShape,setUserShape}=useContext(Context)
  // let { userinfo } = useContext(Context)

  if (!userinfo) {
    return <div></div>; // Add a loading state while userinfo is being fetched
  }
  console.log(userinfo);
  function sizeCalculator(obj, gender) {
    let theObj = obj;
    // console.log(theObj);
    let categ = {
      waist: "waist",
      chest: "chest",
      neckline: "neckline",
      arms: "arms",
      hips: "hips"
    };

    let companies = [];
    Object.keys(data).forEach((companyName) => {
      companies.push(companyName)
    })
    // console.log(companies)
    let calculatedData = {}

    companies.forEach((company) => {
      calculatedData[company] = {
        shirts: { waist: [], chest: [], neckline: [], arms: [], hips: [] },
        pants: { waist: [], chest: [], neckline: [], arms: [], hips: [] },
        dresses: { waist: [], chest: [], neckline: [], arms: [], hips: [] }
      };
      Object.keys(data[company][gender]).forEach((clothing) => {
        calculatedData[company][clothing] = (Object.keys(data[company][gender][clothing]).map((category) => {
          if (theObj[category] !== undefined) {
            return handleclothing(data, clothing, categ[category], theObj[category], gender, company);
          } else {
            return "category not found in theObj";
          }
        }));
      });
    });

    return calculatedData;
  }

  function handleclothing(data, cloth, category, size, gender, company) {

    let sizes;
    if (gender.includes("2")) {
      sizes = ["2y", "3y", "4y", "5y", "6y", "7y", "8y"]
    }
    else if (gender.includes("9")) {
      sizes = ["9y", "10y", "11y", "12y", "13y", "14y", "15y"]
    }
    else {
      sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"]
    }


    if (data[company][gender][cloth] && data[company][gender][cloth][category]) {
      let calcSize = data[company][gender][cloth][category].map((size1, index) => {

        if (size >= parseFloat(size1.split("-")[0]) && size <= parseFloat(size1.split("-")[1])) {
          return sizes[index];
        }

        return `not in ${sizes[index]} category`;
      });
      const sizeObj = {
        // [category]: calcSize.filter((item, index) => { return item.length < 4 })[0],
        // ["number"]: sizes.indexOf(calcSize.filter((item, index) => { return item.length < 4 })[0]) + 1
        [category]: sizes.indexOf(calcSize.filter((item, index) => { return item.length < 4 })[0]) + 1
      }

      return sizeObj;
    } else {
      return "category not found in data";
    }
  }


  // Example usage:
  // const obj = {
  //   chest: 92,
  //   waist: 92,
  //   neckline: 40,
  //   hips: 85,
  //   arms: 60
  // };

  // const gender = "women";


  console.log(userinfo.measurements);
  // userinfo.measurements
  const result = userinfo && sizeCalculator(userinfo.measurements[0].data, userinfo.gender);
  console.log(result["H&M"]);


  const shapes = {
    rectangle: {
      waist: "3-4",
      chest: "3-4",
      hips: "3-4"
    },
    apple: {
      waist: "5-7",
      chest: "5-7",
      hips: "5-7"
    },
    pear: {
      waist: "5-7",
      chest: "1-2",
      hips: "5-7"
    },
    upsidedowntriangle: {
      waist: "1-2",
      chest: "5-7",
      hips: "1-2"
    },
    hourglass: {
      waist: "1-2",
      chest: "5-7",
      hips: "5-7"
    },
    chello: {
      waist: "3-4",
      chest: "5-7",
      hips: "5-7"
    }
  }
  let arr = []
  Object.keys(result["H&M"].shirts).forEach((category, index) => {
    arr.push(Object.values(result["H&M"].shirts[category]).flat())
  })
  let arr1 = arr.flat()
  arr1.pop()
  console.log(arr1);
  let competible = 0
  let shapename = ""
  let lastshapename = ""
  let waistcount = 0
  let chestcount = 0
  Object.keys(shapes).forEach((shape, index) => {
    let count = 0
    Object.keys(shapes[shape]).forEach((category, index) => {
      if (arr1[index] >= shapes[shape][category].split("-")[0] && arr1[index] <= shapes[shape][category].split("-")[1]) {
        count++
      }
    })
    console.log(count);
    if (count > competible) {
      competible = count
      lastshapename = shapename
      shapename = shape
      if (arr1[0] >= shapes[shape]['waist'].split("-")[0] && arr1[0] <= shapes[shape]['waist'].split("-")[1]) {
        waistcount++
      }
      else if (arr1[1] >= shapes[shape]['waist'].split("-")[0] && arr1[1] <= shapes[shape]['waist'].split("-")[1]) {
        chestcount++
      }
      // console.log(waistcount, "h");
    }
    else if (count == competible) {
      if (arr1[0] >= shapes[shape]['waist'].split("-")[0] && arr1[0] <= shapes[shape]['waist'].split("-")[1] && waistcount < 1) {
        lastshapename = shapename
        shapename = shape
        waistcount++
      }
      else if (arr1[1] >= shapes[shape]['chest'].split("-")[0] && arr1[1] <= shapes[shape]['chest'].split("-")[1] && chestcount < 1) {
        lastshapename = shapename
        shapename = shape
        chestcount++
      }
    }
  })
  let data2 = [
    { name: shapename, value: 80 },
    { name: lastshapename, value: 20 },
  ]
  if(!userShape){
    setUserShape(shapename)
  }
  if(!data1){setData1(data2)}

  console.log(data1);

  if (!data1) {
    return (
      <h1>he</h1>
    )
    
  }
  console.log(userShape);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data1}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index,
          }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
              <text
                x={x}
                y={y}
                fill={COLORS[index % COLORS.length]}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {data1[index].name} ({value})
              </text>
            );
          }}
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const BodyTypes = () => {

  const navigate = useNavigate();

  return (
    <div className="bodyTypes-container">
      <div className="bodyTypes-toparea">
        <h1 className="bodyTypes-main-title"> Your Body Types</h1>
        <CakeGraph />
        <h1 className="bodyTypes-top-text">
          There is a large and wide variety of different
          <br /> body structures,and of course each one is unique. <br /> But,
          if you broadly and quite generally divide the different shapes of the
          female body structure, you can divide into six different categories.
        </h1>
      </div>

      <div className="bodyTypes-botarea">
        <div className="bodyTypes-img1-text">
          <img className="bodyTypes-images" src={image1} alt="" />
          <div className="bodyTypes-pear-div">
            <h2 className="bodyTypes-inner-title">Apple</h2>
            <p className="bodyTypes-inner-text">
              General round appearance, especially in the upper body area. When
              the fuller area is in the stomach area. Round shoulders, flat
              butt, medium to large chest, shapely legs.
            </p>
          </div>
          <div className="bodyTypes-pear-div">
            <h2 className="bodyTypes-inner-title">Hourglass</h2>
            <p className="bodyTypes-inner-text">
              A feminine and sexy body structure characterized by an equal upper
              and lower body part and a narrow and accentuated waistline. The
              principle is simple - emphasize your narrow waist.
            </p>
          </div>
          <div className="bodyTypes-pear-div">
            <h2 className="bodyTypes-inner-title">Cello</h2>
            <p className="bodyTypes-inner-text">
              The cello structure - also known as a full hourglass - is
              characterized by a chest area, wide and full hips and a more
              accentuated and narrow waist.
            </p>
          </div>
        </div>
        <div className="bodyTypes-img2-text">
          <img className="bodyTypes-images" src={image2} alt="" />
          <div className="bodyTypes-pear-div">
            <h2 className="bodyTypes-inner-title">Pear</h2>
            <p className="bodyTypes-inner-text">
              A body structure characterized by a lower body part - buttocks and
              hips that are wider than the upper part of the body - the chest,
              and shoulders. Waist line is usually emphasized and narrow.
            </p>
          </div>
          <div className="bodyTypes-pear-div">
            <h2 className="bodyTypes-inner-title">Inverted Triangle</h2>
            <p className="bodyTypes-inner-text">
              A body structure characterized by an upper body part - shoulders
              and chest wider than the lower part of the body, buttock and hips.
              There is no big difference between the waist line and the
              circumference of the hips, a small ass, a flat butt.
            </p>
          </div>
          <div className="bodyTypes-pear-div-last">
            <h2 className="bodyTypes-inner-title">Rectangle</h2>
            <p className="bodyTypes-inner-text">
              A straight and boyish physique, characterized by an equal upper
              and lower body and almost no waistline. Narrow shoulders, flat
              chest, flat buttocks and thin hips.
            </p>
          </div>
          <div className="bodyTypes-moveon-btn-div">
            <h2 className="bodyTypes-btn-title">Click here to see the most suitable clothes for you</h2>
            <button onClick={() => navigate('/stylesecond')} className="bodyTypes-moveon-btn">To Your Stylist</button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BodyTypes;
