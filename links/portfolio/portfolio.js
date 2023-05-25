var scrollCount = 0;


function scrollDown(){
  scrollCount += 25;
  document.getElementById('portfolio2').classList.remove('hide')

  if (window.pageYOffset < document.getElementById('portfolio2').clientHeight){
  window.scrollTo(0,scrollCount);
  window.requestAnimationFrame(function(){
    scrollDown();
  });
  }
  else {
  }
};
