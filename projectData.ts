import { StaticImageData } from "next/image";
import mock1 from "./public/images/mock/banksalad.jpg";
import mock2 from "./public/images/mock/kanban.jpg";
import mock3 from "./public/images/mock/nutrition.jpg";
import mock4 from "./public/images/mock/shoes.jpg";
import mock5 from "./public/images/mock/zzanggu.jpg";

import insightTn from "./public/images/projects/insight-tn.png";
import insight1 from "./public/images/projects/insight-1.jpg";
import insight2 from "./public/images/projects/insight-2.jpg";
import insight3 from "./public/images/projects/insight-3.png";
import insight4 from "./public/images/projects/insight-4.png";

import proteinTn from "./public/images/projects/protein-tn.png";
import protein1 from "./public/images/projects/protein-1.png";
import protein2 from "./public/images/projects/protein-2.png";
import protein3 from "./public/images/projects/protein-3.jpg";
import protein4 from "./public/images/projects/protein-4.jpg";

import zzanggu1 from "./public/images/projects/zzanggu-1.png";
import zzanggu2 from "./public/images/projects/zzanggu-2.png";
import zzanggu3 from "./public/images/projects/zzanggu-3.png";

import banksalad1 from "./public/images/projects/banksalad-1.png";
import banksalad2 from "./public/images/projects/banksalad-2.png";
import banksalad3 from "./public/images/projects/banksalad-3.png";
import banksalad4 from "./public/images/projects/banksalad-4.png";
import banksalad5 from "./public/images/projects/banksalad-5.png";

import wordle1 from "./public/images/projects/wordle-1.png";
import wordle2 from "./public/images/projects/wordle-2.png";
import wordle3 from "./public/images/projects/wordle-3.png";
import wordle4 from "./public/images/projects/wordle-4.png";

import kanban1 from "./public/images/projects/kanban-1.png";
import kanban2 from "./public/images/projects/kanban-2.png";
import kanban3 from "./public/images/projects/kanban-3.png";

import shoes1 from "./public/images/projects/shoes-1.png";
import shoes2 from "./public/images/projects/shoes-2.png";
import shoes3 from "./public/images/projects/shoes-3.png";
import shoes4 from "./public/images/projects/shoes-4.png";
import shoes5 from "./public/images/projects/shoes-5.png";
import shoes6 from "./public/images/projects/shoes-6.png";

import portfolio1 from "./public/images/projects/portfolio-1.png";

import customer1 from "./public/images/projects/customer-1.png";

export interface ImgNaming {
  [key: string]: StaticImageData;
}

interface IData {
  sliderImg: StaticImageData[];
  title: string;
}

//목업 Data
export const mockData: IData = {
  sliderImg: [mock1, mock2, mock3, mock4, mock5],
  title: "MOCKUP",
};

//썸네일 Data
export const tnData: ImgNaming = {
  insight: insightTn,
  protein: proteinTn,
  wordle: wordle1,
  kanban: kanban1,
  shoes: shoes1,
  banksalad: banksalad1,
  zzanggu: zzanggu1,
  portfolio: portfolio1,
  customer: customer1,
};

export const insightData: IData = {
  sliderImg: [insight1, insight2, insight3, insight4],
  title: "Eop Insight : 스타트업 프로젝트 참여",
};

export const proteinData: IData = {
  sliderImg: [protein1, protein2, protein3, protein4],
  title: "단백질 기록하기",
};

export const wordleData: IData = {
  sliderImg: [wordle1, wordle2, wordle3, wordle4],
  title: "웹 게임 Wordle!",
};

export const kanbanData: IData = {
  sliderImg: [kanban1, kanban2, kanban3],
  title: "칸반 보드",
};

export const shoesData: IData = {
  sliderImg: [shoes1, shoes2, shoes3, shoes4, shoes5, shoes6],
  title: "SHOES : 쇼핑몰 홈페이지",
};

export const zzangguData: IData = {
  sliderImg: [zzanggu1, zzanggu2, zzanggu3],
  title: "내가 짱구 속 인물이라면?",
};

export const banksaladData: IData = {
  sliderImg: [banksalad1, banksalad2, banksalad3, banksalad4, banksalad5],
  title: "뱅크샐러드",
};

export const portfolioData: IData = {
  sliderImg: [portfolio1],
  title: "조동건의 포트폴리오 홈페이지",
};

export const customerData: IData = {
  sliderImg: [customer1],
  title: "고객 관리 시스템",
};
