import React from "react";
import style from "./Slider.module.css";

const Slider = ({ projectName }: { projectName: string }) => {
  return (
    <article className={style.sliderArea}>
      <h3>{projectName}</h3>
      <div className={style.sliderFrame}>
        <button>이전</button>
        <button>다음</button>
        <ul className="pager">
            <li></li>
            
        </ul>
      </div>

    </article>
  );
};

export default Slider;

//pager
//buttons
//컴포넌트 슬라이더 만드는 중이었음
//너무 시간 오래걸리는데 성과가 적은 것 같아서 나중에 생각날떄마다 진행하는걸로..!