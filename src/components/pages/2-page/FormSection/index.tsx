import Divider from "components/common/Divider";
import MainInput from "components/common/MainInput";
import PrimaryButton from "components/common/buttons/PrimaryButton";
import CheckBox from "components/pages/2-page/FormSection/CheckBox";
import PasswordInput from "components/pages/2-page/FormSection/PasswordInput";
import { useGetStatesFromSecondPage } from "hooks/useGetStatesFromSecondPage";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISecondPageFormProps, TFormInputsSecondPage } from "types";

export default function FormSection({}: ISecondPageFormProps) {
  const { credentials, setCredentials, setIndex } =
    useGetStatesFromSecondPage();

  const defaultValues = useMemo(
    () => ({
      fullName: credentials.fullName,
      email: credentials.email,
      password: credentials.password,
      toggle: credentials.toggle,
    }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInputsSecondPage>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<TFormInputsSecondPage> = (data) => {
    alert(`
    fullName: ${data.fullName}
    email: ${data.email}
    password : ${data.password}
    checked : ${data.toggle}`);

    setIndex(2);
    setCredentials({
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      toggle: data.toggle,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-Inter space-y-6
    max-2xl:space-y-5"
    >
      {/* inputs */}
      <MainInput
        options={{
          required: {
            message: "Required",
            value: true,
          },
        }}
        label="Your fullname*"
        error={errors.fullName?.message}
        props={{
          type: "text",
          placeholder: "Enter full name",
          maxLength: 20,
        }}
        register={register}
        name="fullName"
      />
      <MainInput
        options={{
          required: {
            value: true,
            message: "Required",
          },
          pattern: {
            message: "Invalid email address",
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          },
        }}
        error={errors.email?.message}
        label="Email address*"
        register={register}
        name="email"
        props={{
          type: "text",
          placeholder: "Enter email address",
        }}
      />
      <PasswordInput register={register} error={errors.password?.message} />
      <CheckBox register={register} error={errors.toggle?.message} />
      {/* buttons */}
      <div
        className="space-y-3
      max-2xl:space-y-2"
      >
        <PrimaryButton text="Register Account" />
        <div className="flex items-center justify-center text-[#BABABA] gap-10">
          <Divider />
          <span className="max-sm:text-[15px]">Or</span>
          <Divider />
        </div>
        <button
          type="button"
          className="flex items-center shadow-[0px_6px_15px_rgba(0,0,0,0.1)] w-full px-11 py-4 rounded-lg gap-16
          max-xl:py-3
          max-sm:px-5 max-sm:gap-10"
        >
          <img src="./google.svg" alt="google" />
          <p className="font-medium">Register with Google</p>
        </button>
      </div>
    </form>
  );
}
