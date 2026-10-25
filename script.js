const translations={
th:{
name:"ธีรภัทร <span>พอกแก้ว</span>",navProjects:"โปรเจกต์",navActivities:"กิจกรรม",navEducation:"การศึกษา",navContact:"ติดต่อ",hello:"สวัสดีครับ ผมชื่อ",
intro:"สนใจพัฒนาเว็บแอปพลิเคชัน การจัดการฐานข้อมูล และการประยุกต์ใช้ Machine Learning กับการวิเคราะห์ข้อมูล พร้อมเรียนรู้การพัฒนาระบบจริงและการทำงานเป็นทีม",
resumeTH:"Resume ภาษาไทย",resumeEN:"Resume English",transcript:"Transcript",techTitle:"เทคโนโลยีและเครื่องมือที่เคยใช้งาน",profileLabel:"กำลังมองหาโอกาสสหกิจศึกษา",
projectsTitle:"โปรเจกต์",projectsSub:"ผลงานจากการเรียนและพัฒนาระบบ",project01Meta:"โปรเจกต์ 01 · ปี 4",project02Meta:"โปรเจกต์ 02 · ปี 2",project03Meta:"โปรเจกต์ 03 · ปี 1",viewGithub:"ดูบน GitHub",mackerelTitle:"ระบบคาดการณ์การกระจายตัวของปลาทูในทะเลอ่าวไทยโดยใช้ปัญญาประดิษฐ์",mackerelDesc:"ระบบประมวลผลข้อมูลมหาสมุทรเพื่อวิเคราะห์และคาดการณ์การกระจายตัวของปลาทู โดยใช้ Machine Learning 3 แนวทาง ได้แก่ Regression, Classification และ Clustering",mackerelCap1:"หน้าหลัก / ภาพรวมระบบ",
mamaTitle:"ระบบบริหารจัดการผลิตภัณฑ์มาม่า",mamaDesc:"เว็บแอปพลิเคชันจำลองระบบภายในองค์กร มีระบบ Login และสิทธิ์การใช้งาน รวมถึงส่วนจัดซื้อ คลังสินค้า ฝ่ายขาย และงานบุคคล",mamaCap1:"หน้า Home / Dashboard",calcTitle:"เครื่องคิดเลขวิทยาศาสตร์ 40 ฟังก์ชัน",calcDesc:"โปรแกรมเครื่องคิดเลขสำหรับการคำนวณทางคณิตศาสตร์และฟังก์ชันวิทยาศาสตร์ พัฒนาขึ้นเพื่อฝึกพื้นฐานการเขียนโปรแกรมและการจัดการอินพุต",calcCaption:"หน้าจอเครื่องคิดเลขวิทยาศาสตร์",
activitiesTitle:"กิจกรรมและโครงการ",activitiesSub:"โครงการที่เคยเข้าร่วม",mutTitle:"MUT — โครงการผลิตกำลังคนด้านเซมิคอนดักเตอร์",mutDesc:"โครงการผลิตกำลังคนด้านเซมิคอนดักเตอร์",
educationTitle:"ประวัติการศึกษา",highSchoolLevel:"มัธยมศึกษา",schoolName:"โรงเรียนเทพศิรินทร์ สมุทรปราการ",highSchoolDegree:"มัธยมศึกษาตอนปลาย",universityLevel:"ปริญญาตรี",universityName:"มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",faculty:"คณะวิศวกรรมศาสตร์",major:"สาขาวิศวกรรมคอมพิวเตอร์และระบบไอโอที",
contactTitle:"ช่องทางติดต่อ",copyLine:"คัดลอก",backTop:"กลับขึ้นด้านบน ↑",lineCopied:"คัดลอก Line ID แล้ว",copyFailed:"ไม่สามารถคัดลอกอัตโนมัติได้: ponyajb"
},
en:{
name:"THEERAPAT <span>POKKAEW</span>",navProjects:"Projects",navActivities:"Activities",navEducation:"Education",navContact:"Contact",hello:"HELLO, I'M",
intro:"Interested in web application development, database management, and applying Machine Learning to data analysis. Eager to learn through real-world development and teamwork.",
resumeTH:"Resume (Thai)",resumeEN:"Resume (English)",transcript:"Transcript",techTitle:"TECHNOLOGIES & TOOLS I'VE USED",profileLabel:"Open to cooperative education opportunities",
projectsTitle:"Projects",projectsSub:"Selected academic and software projects",project01Meta:"PROJECT 01 · YEAR 4",project02Meta:"PROJECT 02 · YEAR 2",project03Meta:"PROJECT 03 · YEAR 1",viewGithub:"View on GitHub",mackerelTitle:"Mackerel Distribution Prediction System",mackerelDesc:"An ocean data processing system for analyzing and predicting mackerel distribution using three Machine Learning approaches: Regression, Classification, and Clustering.",mackerelCap1:"Home / system overview",
mamaTitle:"Mama Product Management System",mamaDesc:"A simulated internal business web application with login and role-based access, purchasing, warehouse, sales, and human resources modules.",mamaCap1:"Home / Dashboard",calcTitle:"Scientific Calculator",calcDesc:"A calculator application for mathematical operations and scientific functions, built to practice programming fundamentals and input handling.",calcCaption:"Scientific calculator interface",
activitiesTitle:"Activities & Programs",activitiesSub:"Programs and activities attended",mutTitle:"MUT National Semiconductor Training",mutDesc:"Semiconductor workforce development program",
educationTitle:"Education",highSchoolLevel:"HIGH SCHOOL",schoolName:"Debsirin Samutprakan School",highSchoolDegree:"Upper secondary education",universityLevel:"BACHELOR'S DEGREE",universityName:"Rajamangala University of Technology Krungthep",faculty:"Faculty of Engineering",major:"Computer Engineering and IoT",
contactTitle:"Contact",copyLine:"Copy ID",backTop:"Back to top ↑",lineCopied:"Line ID copied",copyFailed:"Could not copy automatically: ponyajb"
}};
let currentLang="th";
function setLanguage(lang){
 currentLang=lang;document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key]){if(key==="name")el.innerHTML=translations[lang][key];else el.textContent=translations[lang][key]}});
 const langButton=document.getElementById("langToggle");if(langButton){langButton.textContent=lang.toUpperCase();langButton.setAttribute("aria-label",lang==="th"?"Switch to English":"เปลี่ยนเป็นภาษาไทย")}
 document.querySelectorAll(".gallery").forEach(g=>updateGalleryCaption(g));
 try{localStorage.setItem("portfolio-language",lang)}catch(e){}
}
function updateGalleryCaption(g){
 const thumb=g.querySelector(".thumb.active");const caption=g.querySelector("[data-caption]");
 if(thumb&&caption){caption.textContent=currentLang==="en"?(thumb.dataset.captionEn||thumb.dataset.captionTh):(thumb.dataset.captionTh||thumb.dataset.captionEn)}
}
document.getElementById("langToggle").addEventListener("click",()=>setLanguage(currentLang==="th"?"en":"th"));
document.querySelectorAll(".gallery").forEach(g=>{
 const img=g.querySelector(".gallery-image"),counter=g.querySelector(".image-counter"),thumbs=[...g.querySelectorAll(".thumb")];let index=0;
 function show(i){if(!thumbs.length)return;index=(i+thumbs.length)%thumbs.length;const t=thumbs[index];img.src=t.dataset.src;thumbs.forEach((x,j)=>x.classList.toggle("active",j===index));counter.textContent=`${index+1} / ${thumbs.length}`;updateGalleryCaption(g)}
 thumbs.forEach((t,i)=>t.addEventListener("click",()=>show(i)));
 const prev=g.querySelector(".prev"),next=g.querySelector(".next");if(prev)prev.addEventListener("click",()=>show(index-1));if(next)next.addEventListener("click",()=>show(index+1));
});
const activityMain=document.querySelector(".activity-cover img");
document.querySelectorAll(".activity-thumb").forEach((b,i)=>b.addEventListener("click",()=>{
 activityMain.src=b.dataset.activitySrc;document.querySelectorAll(".activity-thumb").forEach(x=>x.classList.toggle("active",x===b));
}));
const toggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰"}));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("copyLine").addEventListener("click",async()=>{
 const feedback=document.getElementById("copyFeedback");
 try{await navigator.clipboard.writeText("ponyajb");feedback.textContent=translations[currentLang].lineCopied}
 catch(e){feedback.textContent=translations[currentLang].copyFailed}
});
try{setLanguage(localStorage.getItem("portfolio-language")==="en"?"en":"th")}catch(e){setLanguage("th")}
