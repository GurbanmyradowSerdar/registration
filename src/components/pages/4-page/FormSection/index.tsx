import PrimaryButton from "components/common/buttons/PrimaryButton";
import UnderPrimaryButton from "components/common/buttons/UnderPrimaryButton";
import { useForm } from "react-hook-form";
import { IFormInputsFourthPage } from "types";
import BankNumberInput from "components/pages/4-page/FormSection/BankNumberInput";
import { useCallback, useState } from "react";

export default function FormSection() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputsFourthPage>();

  const onSubmit = ({ bvn }: IFormInputsFourthPage) => {
    alert(`Bank verification number : ${JSON.stringify(bvn)}`);
  };

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleChangeTrue = useCallback(() => {
    setIsCorrectAnswer(true);
  }, []);

  const handleChangeFalse = useCallback(() => {
    setIsCorrectAnswer(false);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-20 max-2xl:space-y-16"
    >
      <BankNumberInput
        isCorrectAnswer={isCorrectAnswer}
        name="bvn"
        label="Bank verification number (BVN)"
        register={register}
        error={errors.bvn?.message}
        props={{
          type: "tel",
          maxLength: 12,
          placeholder: "Enter BVN",
        }}
        options={{
          validate: (value) => {
            if (value.length < 12) {
              handleChangeFalse();
              return "Required";
            } else {
              handleChangeTrue();
            }
            if (isNaN(Number(value))) {
              handleChangeFalse();
              return "Invalid number";
            }
          },
        }}
      />

      <div className="pt-3 space-y-4">
        <PrimaryButton text="Save & Continue" />
        <UnderPrimaryButton />
      </div>
    </form>
  );
}
