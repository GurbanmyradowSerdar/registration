import { IClassName } from "types";
import { twMerge as tw } from "tailwind-merge";

export default function ComponentWithoutButton({ className }: IClassName) {
  return (
    <div className={tw("flex items-center justify-end font-Inter", className)}>
      <p
        className="text-bold-gray text-lg
    max-xl:text-base
    max-md:text-sm"
      >
        Already have an account?{" "}
        <button className="text-[#1565D8] font-medium cursor-pointer">
          Sign in
        </button>
      </p>
    </div>
  );
}
