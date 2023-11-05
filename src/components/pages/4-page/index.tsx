import { useFormik } from "formik";
import CustomInput from "../../common/CustomInput";
import Divider from "../../common/Divider";
import PrimaryButton from "../../common/buttons/PrimaryButton";
import UnderPrimaryButton from "../../common/buttons/UnderPrimaryButton";
import MainTitle from "../../common/text/MainTitle";
import SubtitleTextComponent from "../../common/text/SubtitleTextComponent";
import { useState } from "react";

const FourthPageComponent = () => {
  const [disabled, setDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      bvn: "",
    },
    validate: ({ bvn }) => {
      let errors: { bvn?: string } = {};

      if (bvn.length < 12) {
        errors.bvn = "Required";
      }

      if (isNaN(Number(bvn))) {
        errors.bvn = "Invalid number";
      }

      return errors;
    },
    onSubmit: ({ bvn }) => {
      setDisabled(true);
      alert(`Bank verification number : ${JSON.stringify(bvn)}`);
    },
  });
  return (
    <div className="space-y-4 max-w-md mt-44">
      <div className="space-y-3">
        <MainTitle text="Complete Your Profile!" />
        <SubtitleTextComponent text="For the purpose of industry regulation, your details are required." />
        <Divider />
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-20">
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
                onChange={formik.handleChange}
                className="w-full border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all 
                placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl"
              />
              <img
                src="./check.svg"
                alt="check"
                className="w-6 h-6 absolute top-2/4 right-6
                opacity-0  transition-all duration-300"
                style={{
                  opacity: formik.values.bvn.length == 12 ? 1 : 0,
                  transform: `translateY(-50%) ${
                    formik.values.bvn.length == 12 ? " scale(1)" : "scale(0.5)"
                  }`,
                }}
              />
            </div>
          }
        />
        <div className="pt-3 space-y-4">
          <PrimaryButton text="Save & Continue" disabled={disabled} />
          <UnderPrimaryButton />
        </div>
      </form>
    </div>
  );
};

export default FourthPageComponent;
