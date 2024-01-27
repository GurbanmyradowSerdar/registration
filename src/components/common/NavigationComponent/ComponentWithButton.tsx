import { IClassName } from "types";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  credentialsState,
  additionalInfoState,
  pageIndexState,
} from "store/atoms";
import { navigationInfoArr } from "data";
import { getPrevPageIndex } from "utils";
import { twMerge as tw } from "tailwind-merge";

export default function ComponentWithButton({ className }: IClassName) {
  const [index, setIndex] = useRecoilState(pageIndexState);
  const setCredentials = useSetRecoilState(credentialsState);
  const setAdditionalInfo = useSetRecoilState(additionalInfoState);

  const currentNavItem = navigationInfoArr[index];
  const step = currentNavItem.step;
  const info = currentNavItem.info;

  function handleClickBackButton() {
    setIndex(getPrevPageIndex(index, setCredentials, setAdditionalInfo));
  }

  return (
    <div
      className={tw(
        className,
        "flex items-center justify-between font-Inter max-sm:justify-between"
      )}
    >
      <button
        className="flex items-center justify-center gap-2 group"
        onClick={handleClickBackButton}
      >
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-md:w-4 max-md:h-4"
        >
          <path
            d="M9.86251 2.225L8.37918 0.75L0.137512 9L8.38751 17.25L9.86251 15.775L3.08751 9L9.86251 2.225Z"
            className="fill-bold-gray transition-colors duration-300 group-hover:fill-[#626973] group-active:fill-bold-gray"
          />
        </svg>
        <p
          className="text-bold-gray font-semibold text-lg transition-colors duration-300 group-hover:text-[#626973] group-active:text-bold-gray
      max-xl:text-base
      max-md:text-sm"
        >
          Back
        </p>
      </button>
      <div className="flex flex-col gap-1">
        <p
          className="text-[#BDBDBD] font-medium text-sm uppercase
      max-xl:text-xs
      max-md:text-[11px]"
        >
          step {step}/03
        </p>
        <p
          className="text-bold-gray font-semibold
      max-xl:text-sm
      max-md:text-[13px]"
        >
          {info}
        </p>
      </div>
    </div>
  );
}
