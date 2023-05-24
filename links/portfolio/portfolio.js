var scrollCount = 0;


function scrollDown(){
  scrollCount += 25;
  document.getElementById('portfolio').classList.remove('hide')

  if (window.pageYOffset < document.getElementById('portfolio').clientHeight){
  window.scrollTo(0,scrollCount);
  window.requestAnimationFrame(function(){
    scrollDown();
  });
  }
  else {
  }
};