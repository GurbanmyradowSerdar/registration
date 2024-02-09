import { TFormInputsThirdPage } from "types";
import {
  getCountryCallingCode,
  Country as CountryCode,
} from "react-phone-number-input/input";
import { useState, useMemo } from "react";
import PrimaryButton from "components/common/buttons/PrimaryButton";
import UnderPrimaryButton from "components/common/buttons/UnderPrimaryButton";
import PhoneInput from "components/pages/3-page/FormSection/PhoneInput";
import LocationSelect from "components/pages/3-page/FormSection/LocationSelect";
import { useGetStateForThirdPage } from "hooks/useGetStatesForThirdPage.hooks";
import { useChangeIndexPage } from "hooks/useChangeIndexPage.hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import MainInput from "components/pages/3-page/FormSection/MainInput";

export default function FormSection() {
  const [country, setCountry] = useState<CountryCode>("TM");
  const { info, setInfo } = useGetStateForThirdPage();
  const { setIndex } = useChangeIndexPage();

  const initialValues = useMemo(() => {
    return {
      address: info.address,
      countryOfResidence: info.countryOfResidence,
      phoneNumber:
        info.phoneNumber.length > 0
          ? info.phoneNumber
          : `+${getCountryCallingCode(country)}`,
    };
  }, [info]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
  } = useForm<TFormInputsThirdPage>({
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<TFormInputsThirdPage> = (values) => {
    alert(` 
    phone number: ${values.phoneNumber}
    address: ${values.address}
    country of residence : ${values.countryOfResidence}`);
    // ! going to next page
    setIndex(3);
    setInfo({
      address: values.address,
      countryOfResidence: values.countryOfResidence,
      phoneNumber: values.phoneNumber,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6
      max-2xl:space-y-5"
    >
      <PhoneInput
        setValue={setValue}
        country={country}
        register={register}
        setCountry={setCountry}
        getValues={getValues}
      />
      <MainInput
        label="Your address"
        name="address"
        error={errors.address?.message}
        register={register}
        props={{
          placeholder: "Enter address",
          type: "text",
        }}
        options={{
          required: {
            message: "Required",
            value: true,
          },
        }}
      />
      <LocationSelect
        getValues={getValues}
        register={register}
        error={errors.countryOfResidence?.message}
      />
      <div className="pt-3 space-y-4">
        <PrimaryButton text="Save & Continue" />
        <UnderPrimaryButton />
      </div>
    </form>
  );
}
