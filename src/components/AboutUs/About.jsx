import React from 'react'
import '../AboutUs/About.css'
import founders from '../images/founders.jpg'
function About() {
  return (
    <div className='about-main-div' style={{ backgroundColor: "#b7bbde"}}>
      <p className='about-main-p'>

      <h1  style={{marginTop:"3%"}}></h1>

    <h2 className='bubble1'>
      {/* <div className='odot'>אודות</div>
    <div  dir='rtl'> פיטפיינדר - הוקמה בפברואר 2023, במסגרת האקתון THE NEXT GENDERATION -&rlm;</div>
    <div>.האקתון לנוער לקידום שוויון מגדרי ומיניות בריאה, באגף החינוך ברמת השרון</div>
    <div>המיזם זכה במקום הראשון בהאקתון, והמודל הועבר לפיתוח במסגרת פרויקט גמר של קבוצת סטודנטים במכללת סייברפרו - תכנית לוחמים להייטק.&rlm;</div> */}
about

Fitfinder - was established in February 2023, as part of THE NEXT GENDERATION hackathon - a youth and teens hackathon to promote gender equality and healthy sexuality, in the education department in Ramat Hasharon, Israel.

    </h2>

    <h2  className='bubble1'>
    The project won first place in the hackathon, and the team started the development process with students from the “Warriors for High-Tech” program, as part of their final project at Cyberpro College.
    
    </h2>
    <h2 className='bubble1'>
    Body image is a topic that concerns many women and girls. Throughout the years and with the unattainable beauty ideal, our size has become the measure of our beauty.
    </h2>
    <h2 className='bubble1'>
    FitFinder is here to minimize the frustration that comes from the size differences in stores and to improve the body image of women, girls, men and children.
    </h2>
    <h2 className='bubble1'>
      <div>We have two main goals in mind:</div>
      <ul>
    <li>
    To strip the size of the value and meaning given to it: it doesn't matter what my size is, it doesn't indicate anything about my body. The size is just a number!
    </li>
    <li>
    To put the power back in our hands - the consumers: from now on it is much easier for us to match the clothes to the body and not the body to the clothes!
    </li>
      </ul>
    </h2>
    
    <h2 className='bubble1 hehe' >
      <div>The founding team:</div>
      <img src={founders} style={{maxWidth:"100%", maxHeight:"87%",borderRadius:"11px"}}></img>
      <div>Danielle Teitler, Gili Charcon and Lihi Nissani</div>
    </h2>
    
    <h2 className='bubble1'>
      <div> The development team:</div>
      <div>Graduates of the “Warriors for High-Tech” program, Fullstack course at CyberPro Israel College</div>
      <div>Kim Gusovsky</div>
      <div>Gil Kricheli</div>
      <div>Ran Arditi</div>
      <div>Guy Tsabari</div>
    </h2>
    
    <h2 className='bubble1'>
      <div>Our donors:</div>
      <div>Ramat Hasharon Education Department, Association of Assistance Centers for Victims of Sexual Assault, SALESFORCE.</div>
    </h2>

    <h2 style={{marginBottom:"30px"}} className='bubble1'>
      <div>Professional guidance:</div>
      <div>Dr. Adva Berkovich-Romano, Gender and Sexuality Coordinator of the Education Division of Ramat Hasharon.</div>
    </h2>

      </p>

    </div>
  )
}

export default About