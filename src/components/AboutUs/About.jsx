import React from 'react'
import '../AboutUs/About.css'
import founders from '../images/founders.jpg'
function About() {
  return (
    <div className='about-main-div' style={{ backgroundColor: "#b7bbde"}}>
      <p className='about-main-p'>

      <h1 dir='rtl' style={{marginTop:"10px"}}>אודות</h1>

    <h2>
    <div  dir='rtl'> פיטפיינדר - הוקמה בפברואר 2023, במסגרת האקתון THE NEXT GENDERATION -&rlm;</div>
    <div>.האקתון לנוער לקידום שוויון מגדרי ומיניות בריאה, באגף החינוך ברמת השרון</div>
    <div>המיזם זכה במקום הראשון בהאקתון, והמודל הועבר לפיתוח במסגרת פרויקט גמר של קבוצת סטודנטים במכללת סייברפרו - תכנית לוחמים להייטק.&rlm;</div>
   
    </h2>

    <h2 dir='rtl'>
    <div>דימוי גוף הוא נושא שמעסיק נשים ונערות רבות. במירוץ השנים ועם אידאל היופי הבלתי מושג, המידה שלנו הפכה להיות המדד ליופי שלנו.&rlm;</div>
    <div> FitFinder&lrm; באה לפתור את התסכול שמגיע מהפרשי המידות בחנויות ולשפר את דימוי הגוף של נשים, נערות, גברים וילדים.</div>
    
    </h2>

    <h2 dir='rtl'>
      <div dir='ltr'>לנגד עינינו עומדות שתי מטרות מרכזיות:&rlm;</div>
      <ul>
    <li>
    לפשוט מהמידה את הערך שניתן לה: זה לא משנה מה המידה שלי, היא לא מעידה שום דבר על הגוף שלי. המידה היא רק מספר!
    </li>
    <li>
    להחזיר את הכוח לידיים של הצרכניות: מעכשיו הרבה יותר קל לנו להתאים את הבגדים לגוף מאשר את הגוף לבגדים!
    </li>
      </ul>
    </h2>
    
    <h2 dir='rtl'>
      <div> צוות המייסדות:</div>
      <div>דניאל טייטלר, גילי שרקון וליהיא ניסני</div>
      <img src={founders} style={{width:"450px", height:"300px"}}></img>
    </h2>
    
    <h2 dir='rtl'>
      <div dir='rtl'> צוות הפיתוח: </div>
      <div dir='rtl'>בוגרי תכנית לוחמים להייטק קורס פולסטאק במכללת סייברפרו ישראל</div>
      <div dir='rtl'>קים גוסובסקי</div>
      <div dir='rtl'>גיל קריכלי</div>
      <div dir='rtl'>רן ארדיטי</div>
      <div dir='rtl'>גיא צברי</div>
    </h2>
    
    <h2 dir='rtl'>
      <div dir='rtl'>התורמים שלנו:</div>
      <div dir='rtl'>אגף החינוך רמת השרון, איגוד מרכזי הסיוע לנפגעות ולנפגעי תקיפה מינית, SALESFORCE, סייברפרו.</div>
    </h2>

    <h2 dir='rtl' style={{marginBottom:"30px"}}>
      <div dir='rtl'>ליווי מקצועי:</div>
      <div dir='rtl'>ד"ר אדוה ברקוביץ'-רומנו, רכזת מגדר ומיניות אגף החינוך</div>
    </h2>

      </p>
    </div>
  )
}

export default About