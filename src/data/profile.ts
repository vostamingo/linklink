// 페이지에 표시할 프로필과 링크 목록. 이 파일만 고치면 내용이 바뀐다.

export type LinkItem = {
  /** 클릭 수를 저장할 때 쓰는 고유 키 (영문·숫자·하이픈) */
  id: string;
  title: string;
  url: string;
  /** 상호 앞에 붙는 이모지 (선택) */
  emoji?: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public 폴더 기준 경로. 비워 두면 이름 첫 글자로 대신 표시한다. */
  image?: string;
};

export const profile: Profile = {
  name: "갓성비 로스터리",
  bio: "검증된 갓성비 로스터리",
};

export const links: LinkItem[] = [
  { id: "gadelo", emoji: "🐦", title: "가델로", url: "https://smartstore.naver.com/gadelo" },
  { id: "whichcoffee", emoji: "🦥", title: "어떤커피", url: "https://smartstore.naver.com/whichcoffee" },
  { id: "hyangcho", emoji: "🕯️", title: "향초", url: "https://smartstore.naver.com/hyangcho" },
  { id: "rick", emoji: "🫙", title: "로스터릭", url: "https://smartstore.naver.com/rick" },
  { id: "underbean", emoji: "🍑", title: "언더빈", url: "https://smartstore.naver.com/underbean" },
  { id: "haraneza", emoji: "🪨", title: "타셋", url: "https://smartstore.naver.com/haraneza" },
  { id: "58coffee", emoji: "🍪", title: "58mm", url: "https://smartstore.naver.com/58coffee" },
  { id: "monoscope", emoji: "🥺", title: "모노스코프", url: "https://smartstore.naver.com/monoscope" },
  { id: "realbean", emoji: "🫘", title: "리얼빈", url: "https://smartstore.naver.com/realbean" },
];
