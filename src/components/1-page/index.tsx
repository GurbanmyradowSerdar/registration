import MainTitle from "../common/MainTitle";
import SubtitleTextComponent from "../common/SubtitleTextComponent";

const FirstPageContent = () => {
  return (
    <div className="flex flex-col max-w-md gap-9 mt-36">
      <div className="flex flex-col gap-2">
        <MainTitle text="Join us!" />
        <SubtitleTextComponent
          className="leading-9"
          text="To begin this journey, tell us what type of account you’d be opening."
        />
      </div>
      <div className="flex flex-col gap-7">
        <OptionButton
          title="Individual"
          text="Personal account to manage all you activities."
          hasUserIcon
        />
        <OptionButton
          title="Business"
          text="Own or belong to a company, this is for you."
          hasUserIcon={false}
        />
      </div>
    </div>
  );
};

export default FirstPageContent;

type TProps<T> = {
  title: T;
  text: T;
  hasUserIcon: boolean;
};

function OptionButton({ hasUserIcon, text, title }: TProps<string>) {
  return (
    <button
      className="group shadow-xl rounded-lg p-7 flex items-center justify-between transition-all duration-300 outline outline-[#fff] 
    hover:outline-2 hover:outline-primary-color hover:bg-[#F5F9FF]"
    >
      <div className="flex items-center justify-center gap-7">
        <div className="flex items-center justify-center relative">
          <svg
            width="50"
            height="48"
            viewBox="0 0 50 48"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 fill-[#000]/0 duration-300 transition-all
            group-hover:fill-primary-color"
          >
            <path
              d="M1.09543 18.2329L25 0.865247L48.9046 18.2329L39.7738 46.3344H10.2262L1.09543 18.2329Z"
              stroke="#1565D8"
              strokeWidth="1.4"
            />
          </svg>
          {/* ! icon handling */}
          <>
            {hasUserIcon ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 p-2 z-10"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.72039 12.8871C4.50179 12.1057 5.5616 11.6667 6.66667 11.6667H13.3333C14.4384 11.6667 15.4982 12.1057 16.2796 12.8871C17.061 13.6685 17.5 14.7283 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0656C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0656C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7283 2.93899 13.6685 3.72039 12.8871Z"
                  className="fill-[#1565D8] group-hover:fill-[#fff] transition-all duration-300"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.99992 3.33333C8.61921 3.33333 7.49992 4.45262 7.49992 5.83333C7.49992 7.21404 8.61921 8.33333 9.99992 8.33333C11.3806 8.33333 12.4999 7.21404 12.4999 5.83333C12.4999 4.45262 11.3806 3.33333 9.99992 3.33333ZM5.83325 5.83333C5.83325 3.53214 7.69873 1.66666 9.99992 1.66666C12.3011 1.66666 14.1666 3.53214 14.1666 5.83333C14.1666 8.13452 12.3011 10 9.99992 10C7.69873 10 5.83325 8.13452 5.83325 5.83333Z"
                  className="fill-[#1565D8] group-hover:fill-[#fff] transition-all duration-300"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 p-2 z-10"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33325 6.66667C2.87301 6.66667 2.49992 7.03976 2.49992 7.5V15.8333C2.49992 16.2936 2.87301 16.6667 3.33325 16.6667H16.6666C17.1268 16.6667 17.4999 16.2936 17.4999 15.8333V7.5C17.4999 7.03976 17.1268 6.66667 16.6666 6.66667H3.33325ZM0.833252 7.5C0.833252 6.11929 1.95254 5 3.33325 5H16.6666C18.0473 5 19.1666 6.11929 19.1666 7.5V15.8333C19.1666 17.214 18.0473 18.3333 16.6666 18.3333H3.33325C1.95254 18.3333 0.833252 17.214 0.833252 15.8333V7.5Z"
                  className="fill-[#1565D8] group-hover:fill-[#fff] transition-all duration-300"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.56549 2.3989C7.03433 1.93006 7.67021 1.66667 8.33325 1.66667H11.6666C12.3296 1.66667 12.9655 1.93006 13.4344 2.3989C13.9032 2.86774 14.1666 3.50363 14.1666 4.16667V17.5C14.1666 17.9602 13.7935 18.3333 13.3333 18.3333C12.873 18.3333 12.4999 17.9602 12.4999 17.5V4.16667C12.4999 3.94565 12.4121 3.73369 12.2558 3.57741C12.0996 3.42113 11.8876 3.33333 11.6666 3.33333H8.33325C8.11224 3.33333 7.90028 3.42113 7.744 3.57741C7.58772 3.73369 7.49992 3.94565 7.49992 4.16667V17.5C7.49992 17.9602 7.12682 18.3333 6.66658 18.3333C6.20635 18.3333 5.83325 17.9602 5.83325 17.5V4.16667C5.83325 3.50363 6.09664 2.86774 6.56549 2.3989Z"
                  className="fill-[#1565D8] group-hover:fill-[#fff] transition-all duration-300"
                />
              </svg>
            )}
          </>
        </div>
        <div className="flex flex-col text-left max-w-[280px]">
          <MainTitle text={title} className="text-base" />
          <SubtitleTextComponent text={text} className="text-sm leading-6" />
        </div>
      </div>
      <img
        src="./arrow-right.svg"
        alt="arrow"
        className="opacity-0 duration-300 transition-opacity group-hover:opacity-100 w-6"
      />
    </button>
  );
}
