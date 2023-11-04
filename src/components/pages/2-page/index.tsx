import { useState } from "react";
import CustomInput from "../../common/CustomInput";
import Divider from "../../common/Divider";
import MainTitle from "../../common/text/MainTitle";
import PrimaryButton from "../../common/buttons/PrimaryButton";
import SubtitleTextComponent from "../../common/text/SubtitleTextComponent";
import { useFormik } from "formik";
import { TFormikInitialValuesSecondPage, TVisible } from "../../../types";
import { validate } from "./validation";
import { useSetRecoilState, useRecoilState } from "recoil";
import { pageIndexState, credentialsState } from "../../../store/atoms";

const SecondPageContent = () => {
  const [visible, setVisible] = useState<TVisible>("password");
  const setIndex = useSetRecoilState(pageIndexState);
  const [credentials, setCredentials] = useRecoilState(credentialsState);
  const formik = useFormik<TFormikInitialValuesSecondPage>({
    initialValues: {
      fullName: credentials.fullName,
      email: credentials.email,
      password: credentials.password,
      toggle: credentials.toggle,
    },
    validate,
    onSubmit: (values) => {
      alert(` 
        fullName: ${values.fullName}
        email: ${values.email}
        password : ${values.password}
        checked : ${values.toggle}`);
      setIndex(2);
      setCredentials({
        email: values.email,
        fullName: values.fullName,
        password: values.password,
        toggle: values.toggle,
      });
    },
  });
  return (
    <div className="mt-14 space-y-4 max-w-md">
      <div className="space-y-2">
        <MainTitle text="Register Individual Accaunt!" />
        <SubtitleTextComponent text="For the purpose of industry regulation, your details are required." />
      </div>
      <Divider />
      {/* ! form start */}
      <form onSubmit={formik.handleSubmit} className="font-Inter space-y-6">
        <CustomInput
          label="Your fullname*"
          name="fullName"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.fullName}
          maxLength={20}
          error={formik.errors.fullName}
          placeholder="Enter full name"
        />
        <CustomInput
          label="Email address*"
          name="email"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.email}
          error={formik.errors.email}
          placeholder="Enter email address"
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-medium text-bold-gray">
            Create password*{" "}
            <span className="text-red-500 text-sm">
              {formik.errors.password}
            </span>
          </label>
          <div className="relative">
            <input
              id="password"
              type={visible}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="border border-bold-gray pl-6 pr-20 py-4 rounded-lg duration-300 transition-all w-full
              placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl"
              placeholder="Enter password"
            />
            <button
              className="absolute top-2/4 -translate-y-2/4 right-5 text-sm cursor-pointer hover:font-medium"
              onClick={() =>
                setVisible(visible === "text" ? "password" : "text")
              }
              type="button"
            >
              {visible === "password" ? "Show" : "Hide"}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <input
            type="checkbox"
            name="toggle"
            onChange={formik.handleChange}
            checked={formik.values.toggle}
            className="w-4 h-4 rounded-lg focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-primary-color"
          />
          <p
            className="text-bold-gray font-medium"
            style={{ color: formik.errors.toggle ? "red" : "" }}
          >
            I agree to terms & conditions
          </p>
        </div>

        <div className="space-y-3">
          <PrimaryButton text="Register Account" />
          <div className="flex items-center justify-center text-[#BABABA] gap-10">
            <Divider />
            Or
            <Divider />
          </div>
          <button
            type="button"
            className="flex items-center shadow-[0px_6px_15px_rgba(0,0,0,0.1)] w-full px-11 py-4 rounded-lg gap-16"
          >
            <img src="./google.svg" alt="google" />
            <p className="font-medium">Register with Google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondPageContent;
