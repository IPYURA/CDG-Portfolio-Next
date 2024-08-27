import { StaticImageData } from "next/image";
import mock1 from "./public/images/mock/banksalad.jpg";
import mock2 from "./public/images/mock/kanban.jpg";
import mock3 from "./public/images/mock/nutrition.jpg";
import mock4 from "./public/images/mock/shoes.jpg";
import mock5 from "./public/images/mock/zzanggu.jpg";
import insightTn from "./public/images/projects/insight-tn.jpg";
import insight1 from "./public/images/projects/insight-1.jpg";
import insight2 from "./public/images/projects/insight-2.jpg";
import insight3 from "./public/images/projects/insight-3.png";
import insight4 from "./public/images/projects/insight-4.png";

interface IData {
  thumbnail: StaticImageData;
  sliderImg: StaticImageData[];
  title: string;
}

//썸네일은 다른 객체로 따로 만들어야할듯
// export const thumbnailData = {

// }

export const mockData: IData = {
  thumbnail: mock1,
  sliderImg: [mock1, mock2, mock3, mock4, mock5],
  title: "MOCKUP",
};

export const insightData: IData = {
  thumbnail: insightTn,
  sliderImg: [insight1, insight2, insight3, insight4],
  title: "Eop Insight : 스타트업 프로젝트 참여",
};
