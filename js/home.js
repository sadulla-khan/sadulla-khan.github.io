// Progress Bar
let cirpularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
let progressStartvalue = 0;
    progressEndvalue = 90;
    speed = 100;
let progress = setInterval(()=>{
    progressStartvalue++;
    progressValue.textContent = '${progressStartvalue}%'
    if(progressStartvalue == progressEndvalue)
    {
      clearInterval(progress);
    }
    console.log(progressStartvalue);

},speed);