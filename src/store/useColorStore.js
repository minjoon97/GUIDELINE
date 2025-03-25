import { create } from "zustand";
import { persist } from "zustand/middleware";

// 색상 세트 정의
const colorSets = [
  {
    backgroundColor: "#F1F1F1",
    pointColor: "#003099",
    blackOrWhite: "#000000",
  },
  {
    backgroundColor: "#86D7FF",
    pointColor: "#FF006F",
    blackOrWhite: "#000000",
  },
  {
    backgroundColor: "#1E6DFF",
    pointColor: "#FFF9D6",
    blackOrWhite: "#ffffff",
  },
  {
    backgroundColor: "#0143BE",
    pointColor: "#FF9D00",
    blackOrWhite: "#ffffff",
  },
  {
    backgroundColor: "#142B6F",
    pointColor: "#FED603",
    blackOrWhite: "#ffffff",
  },
  {
    backgroundColor: "#101E2B",
    pointColor: "#E9AAB2",
    blackOrWhite: "#ffffff",
  },
];

// persist 미들웨어를 사용하여 localStorage에 상태 저장
const useColorStore = create(
  persist(
    (set) => ({
      ...colorSets[4],
      currentSetIndex: 4, // 현재 사용 중인 세트 인덱스

      // 액션: 색상 세트로 모든 색상 한번에 변경
      setColorSet: (index) =>
        set({
          ...colorSets[index],
          currentSetIndex: index,
        }),

      // 개별 색상 변경 함수들도 유지
      setBackgroundColor: (color) => set({ backgroundColor: color }),
      setPointColor: (color) => set({ pointColor: color }),
      setBlackOrWhite: (color) => set({ blackOrWhite: color }),
    }),
    {
      name: "color-settings", // localStorage에 저장될 키 이름
      getStorage: () => localStorage, // 사용할 스토리지 지정
    }
  )
);

export default useColorStore;
