import { ICustomInputProps1 } from "types";

export default function CheckBox({ register, error }: ICustomInputProps1) {
  return (
    <div className="flex items-center gap-5">
      <input
        type="checkbox"
        {...register("toggle", {
          required: {
            message: "Required",
            value: true,
          },
        })}
        className="w-4 h-4 rounded-lg focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-primary-color"
      />
      <p
        className="text-bold-gray font-medium max-2xl:text-sm"
        style={{ color: error ? "red" : "" }}
      >
        I agree to terms & conditions
      </p>
    </div>
  );
}
