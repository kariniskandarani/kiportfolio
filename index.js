fetch('https://kiportserve.herokuapp.com/sheet') //to get name , profession , summary
.then(response => response.json())
.then(json =>{
//     var side =document.getElementById('side');
//     var originalcontent=` <div class="profile">
//     <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">
//     <h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
//     <div class="social-links mt-3 text-center">
//       <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
//       <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
//       <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
//       <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
//       <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
//     </div>
//   </div>`
//     for (var i=0; i<json.length;i++){
       
//     }

//About Info Section
var info= document.getElementById('info');
var originalcontent= `<div class="col-lg-4" data-aos="fade-right">
<img src="assets/img/profile-img.jpg" class="img-fluid" alt="">
</div>
<div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
<h3 id="title-pro">  Web Developer.</h3>
<div class="row">
  <div class="col-lg-6">
    <ul>
      <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
    </ul>
  </div>
  <div class="col-lg-6">
    <ul>
      <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
    </ul>
  </div>
  <p>
              
  </p>
</div>`;

  for(var i =0;i<json.length;i++){
      var myContent= document.createElement('div');
      var customizedContent=originalcontent;
      customizedContent=customizedContent.replace('assets/img/profile-img.jpg',json[0].Image);
      customizedContent=customizedContent.replace('Web Developer',json[0].Profession);
      customizedContent=customizedContent.replace('1 May 1995',json[0].Birthday);
      customizedContent=customizedContent.replace('+123 456 7890',json[0].phone);
      customizedContent=customizedContent.replace('New York, USA',json[0].city);
      customizedContent=customizedContent.replace('30',json[0].Age);
      customizedContent=customizedContent.replace('Master',json[0].Degree);
      customizedContent=customizedContent.replace('email@example.com',json[0].Email);
      myContent.className='col-lg-4"';
      myContent.innerHTML=customizedContent;
      info.appendChild(myContent);
      console.log(myContent);
  }
//   var myimage=document.createElement('img');
//   myimage.src=json[0].Image;


  
    

//Hero Section 
var hero= document.getElementById('hero');
var heroOriginalContent= `<div class="hero-container" data-aos="fade-in">
<h1>Alex Smith</h1>
<p>I'm <span class="typed" data-typed-items=" Developer">Developer</span></p>
</div>`

for (var i=0;i<json.length;i++){
    var heroDiv= document.createElement('div');
    var heroCustomizedContent= heroOriginalContent;
    heroCustomizedContent=heroCustomizedContent.replace('Alex Smith',json[0].nam);
    heroCustomizedContent=heroCustomizedContent.replaceAll('Developer',json[0].Profession);
    heroCustomizedContent.setAttribute='data-typed-items',json[0].Profession;
    heroDiv.className='hero-container ';
    heroDiv.innerHTML=heroCustomizedContent;
    hero.appendChild(heroDiv);
    console.log(json[0].Profession);
    //change the hero background image 
    //  document.getElementById('hero').style.background ="url(json[0].Image) cover top center";
    

}

//Small Image Side Section
var profile = document.getElementById('profile');
var profileOriginalContent=`<div class="profile">
<img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">
<h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
<div class="social-links mt-3 text-center">
  <!-- <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> -->
  <!-- <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
  <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
  <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> -->
</div>
</div>`;

for(var i=0; i<json.length;i++){
    var profileContent= document.createElement('div');
    var profileCustomizedContent=profileOriginalContent;
    profileCustomizedContent=profileCustomizedContent.replace('assets/img/profile-img.jpg',json[0].ProfileImage);
    profileCustomizedContent=profileCustomizedContent.replace('Alex Smith',json[0].nam);
    profileContent.className='profile';
    profileContent.innerHTML=profileCustomizedContent;
    profile.appendChild(profileContent);
    
    console.log(json[0].Image);
}





})

//Skills Section

fetch('https://kiportserve.herokuapp.com/skills')
.then(response => response.json())
.then(json =>{
    var skills=document.getElementById('skills-pro')
    var originalcontent=`<div class="col-lg-6" data-aos="fade-up">

    <div class="progress">
      <span class="skill">HTML <i class="val">100%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">CSS <i class="val">100%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">JavaScript <i class="val">100%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

  </div>

  <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

    <div class="progress">
      <span class="skill">PHP <i class="val">100%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">WordPress/CMS <i class="val">100%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">Photoshop <i class="val">100%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

  </div>`

  for(var i=0; i<json.length;i++){
      var myContent=document.createElement('div');
      var customizedContent=originalcontent;
      customizedContent=customizedContent.replace('HTML',json[i].skills);
      customizedContent=customizedContent.replace('100',json[i].value);
      myContent.className='progress';
      myContent.innerHTML=customizedContent;
      skills.appendChild(myContent);
  }
})


//Education sheet 

fetch('https://kiportserve.herokuapp.com/Education')
.then(response => response.json())
.then(json =>{
    //Resume-Section
    var res = document.getElementById('res');
    var resumeOriginalContent=`<div class="section-title">
    <h2>Resume</h2>
    <p></p>
  </div>

  <div  class="row" >
    <div  class="col-lg-6" data-aos="fade-up">
      <h3 class="resume-title">Summary</h3>
      <div class="resume-item pb-0">
        <h4 id="name">Alex Smith</h4>
        <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
        
      </div>

      <h3 class="resume-title">Education</h3>
      <div class="resume-item">
        <h4>Master of Fine Arts &amp; Graphic Design</h4>
        <h5>2015 - 2016</h5>
        <p><em></em></p>
        <p></p>
      </div>
      <div class="resume-item">
        <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
        <h5>2010 - 2014</h5>
        <p><em></em></p>
        <p></p>
      </div>
      <div class="resume-item">
        <h4>Bachelore of Fine Arts &amp; Graphic Design</h4>
        <h5>20100 - 2014</h5>
        <p><em></em></p>
        <p></p>
      </div>
    </div>
    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      <h3 class="resume-title">Professional Experience</h3>
      <div class="resume-item">
        <h4>Senior graphic design specialist</h4>
        <h5>2019 - Present</h5>
        <p><em>Experion, New York, NY </em></p>
        <ul>
          <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
          
        </ul>
      </div>
      <div class="resume-item">
        <h4>Graphic design specialist</h4>
        <h5>2017 - 2018</h5>
        <p><em>Stepping Stone Advertising, New York, NY</em></p>
        <ul>
          <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
          
        </ul>
      </div>
    </div>
  </div>`;



    var resContent=document.createElement('div');
    var resumeCustomizedContent= resumeOriginalContent;
    resumeCustomizedContent=resumeCustomizedContent.replace('Alex Smith',json[0].nam);
    resumeCustomizedContent=resumeCustomizedContent.replace(`Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.`,json[0].Summary);
    // resumeCustomizedContent=resumeCustomizedContent.replace(`Master of Fine Arts &amp; Graphic Design`,json[0].Education);
    
    console.log(json[0].Summary);
    for(var i=0;i<json.length;i++){
        
        resumeCustomizedContent=resumeCustomizedContent.replace(`Master of Fine Arts &amp; Graphic Design`,json[0].Education);
        resumeCustomizedContent=resumeCustomizedContent.replace(`2015 - 2016`,json[0].DateEd);
        resumeCustomizedContent=resumeCustomizedContent.replace(`Bachelor of Fine Arts &amp; Graphic Design`,json[1].Education);
        resumeCustomizedContent=resumeCustomizedContent.replace(`2010 - 2014`,json[1].DateEd);
        resumeCustomizedContent=resumeCustomizedContent.replace(`Bachelore of Fine Arts &amp; Graphic Design`,json[2].Education);
        resumeCustomizedContent=resumeCustomizedContent.replace(`20100 - 2014`,json[2].DateEd);

        //manipulating Professional Experience 
        resumeCustomizedContent=resumeCustomizedContent.replace(`Senior graphic design specialist`,json[0].Experience);
        resumeCustomizedContent=resumeCustomizedContent.replace(`2019 - Present`,json[0].DateEx);
        resumeCustomizedContent=resumeCustomizedContent.replace(`Experion, New York, NY`,json[0].City);
        resumeCustomizedContent=resumeCustomizedContent.replace(`Lead in the design, development, and implementation of the graphic, layout, and production communication materials`,json[0].Details);
        
        resumeCustomizedContent=resumeCustomizedContent.replace(`Graphic design specialist`,json[1].Experience);
        resumeCustomizedContent=resumeCustomizedContent.replace(`2017 - 2018`,json[1].DateEx);
        resumeCustomizedContent=resumeCustomizedContent.replace(`Stepping Stone Advertising, New York, NY`,json[1].City);
        resumeCustomizedContent=resumeCustomizedContent.replace(`Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements)`,json[1].Details);
        resContent.className='section-title';
        resContent.innerHTML=resumeCustomizedContent;                                               
        res.appendChild(resContent);
    }

})