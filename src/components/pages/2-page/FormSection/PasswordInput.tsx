import { ICustomInputProps1 } from "types";
import { usePasswordVisibility } from "hooks/usePasswordVisibility";

export default function PasswordInput({ register, error }: ICustomInputProps1) {
  const { togglePasswordVisibility, visible } = usePasswordVisibility();

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="password"
        className="font-medium text-bold-gray
        max-2xl:text-sm"
      >
        Create password*{" "}
        {error && (
          <span
            className="text-red-500 text-sm
          max-2xl:text-xs"
          >
            {error}
          </span>
        )}
      </label>
      <div className="relative">
        <input
          {...register("password", {
            required: {
              value: true,
              message: "Required",
            },
            minLength: {
              value: 15,
              message: "Password must be at least 15 characters",
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]/,
              message: "Use these too : A-Z, 0-9 and signs",
            },
          })}
          id="password"
          type={visible}
          className="border border-bold-gray pl-6 pr-20 py-4 rounded-lg duration-300 transition-all w-full
            placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
            max-2xl:pl-5 max-2xl:py-3"
          placeholder="Enter password"
        />
        <button
          className="absolute top-2/4 -translate-y-2/4 right-0 text-sm cursor-pointer hover:font-mediumpx-6 py-4
            max-2xl:px-5 max-2xl:py-3"
          onClick={togglePasswordVisibility}
          type="button"
        >
          {visible === "password" ? "Show" : "Hide"}
        </button>
      </div>
    </div>
  );
}
