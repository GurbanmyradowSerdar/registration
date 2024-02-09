import { useFormik } from "formik";
import CustomInput from "components/common/CustomInput";
import PrimaryButton from "components/common/buttons/PrimaryButton";
import UnderPrimaryButton from "components/common/buttons/UnderPrimaryButton";
import { useState, useCallback } from "react";

export default function FormSection() {
  const [isRightInput, setIsRightInput] = useState(false);

  const handleChangeTrue = useCallback(() => {
    setIsRightInput(true);
  }, []);

  const handleChangeFalse = useCallback(() => {
    setIsRightInput(false);
  }, []);

  const formik = useFormik({
    initialValues: {
      bvn: "",
    },
    validate: ({ bvn }) => {
      const errors: { bvn?: string } = {};

      if (bvn.length < 12) {
        errors.bvn = "Required";
        handleChangeFalse();
      } else {
        handleChangeTrue();
      }

      if (isNaN(Number(bvn))) {
        errors.bvn = "Invalid number";
        handleChangeFalse();
      }

      return errors;
    },
    onSubmit: ({ bvn }) => {
      alert(`Bank verification number : ${JSON.stringify(bvn)}`);
    },
  });

  const handleChangeInput = useCallback(formik.handleChange, []);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-20 max-2xl:space-y-16"
    >
      <CustomInput
        label="Bank verification number (BVN)"
        name="bvn"
        error={formik.errors.bvn}
        anotherInput={
          <div className="relative">
            <input
              maxLength={12}
              name="bvn"
              id="bvn"
              type="tel"
              placeholder="Enter BVN"
              value={formik.values.bvn}
              onChange={handleChangeInput}
              className="w-full border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all 
                placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
                max-2xl:px-5 max-2xl:py-3"
            />
            <img
              src="./check.svg"
              alt="check"
              className="w-6 h-6 absolute top-2/4 right-6
                opacity-0  transition-all duration-300"
              style={{
                opacity: isRightInput ? 1 : 0,
                transform: `translateY(-50%) ${
                  isRightInput ? "scale(1)" : "scale(0.5)"
                }`,
              }}
            />
          </div>
        }
      />
      <div className="pt-3 space-y-4">
        <PrimaryButton text="Save & Continue" />
        <UnderPrimaryButton />
      </div>
    </form>
  );
}
