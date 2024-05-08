import { ErrorResponseModel } from "@/interfaces/error-response.model";
import SkillTypeModel from "@/interfaces/skill/skill.model";
import { useCreateSkillMutation } from "@/services/skill";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useSkillAdd = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [createSkill, { isLoading, isSuccess, error, isError, data }] =
    useCreateSkillMutation();

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // Form Validtion

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SkillTypeModel>();

  const onSubmit = async (data: SkillTypeModel) => {
    try {
      await createSkill(data).unwrap();
      toast.success(t("Skill.AddOrEdit.Input.Toast.Success.Save"));
      setIsOpen(false);
      props.refreshResult(data);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`Skill.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
      );
    }
  };
  const MaxLength = {
    Name: 25,
  };
  return {
    onSubmit,
    handleSubmit,
    handleCloseModal,
    register,
    errors,
    MaxLength,
    isLoading,
    isOpen,
    t,
  };
};
