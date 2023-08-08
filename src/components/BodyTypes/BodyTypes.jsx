import React from "react";
import "./BodyTypes.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import { useNavigate } from "react-router-dom";


const data = [
  { name: "Pear", value: 60 },
  { name: "Apple", value: 40 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const CakeGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
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
                {data[index].name} ({value})
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
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
            <button onClick={()=>navigate('/stylesecond')} className="bodyTypes-moveon-btn">To Your Stylist</button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BodyTypes;
