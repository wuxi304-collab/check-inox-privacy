const _renderLesson2=renderLesson2;
renderLesson2=function(){
  _renderLesson2();
  if(currentLesson===2&&currentStage===5){
    const footer=document.querySelector('#stageContent .stage-footer');
    if(footer){
      footer.innerHTML='<button class="btn secondary" onclick="prevStage()">上一步</button><span>6 / 6</span><button class="btn primary" onclick="finishLesson(2)">完成本讲并保存能力</button>';
    }
  }
};