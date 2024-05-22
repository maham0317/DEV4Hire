import { ErrorResponseModel } from "@/interfaces/error-response.model";
import SkillTypeModel from "@/interfaces/skill/skill.model";
import { useUpdateSkillMutation } from "@/services/skill";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useSkillEdit = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [updateskill, { isLoading, isSuccess, error, isError }] =
    useUpdateSkillMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SkillTypeModel>({
    defaultValues: props.selectedData,
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // Form Validtion

  const onSubmit = async (data: SkillTypeModel) => {
    try {
      await updateskill(data).unwrap();
      toast.success(t("Skill.AddOrEdit.Input.Toast.Success.Update"));
      setIsOpen(false);
      props.refreshResult(data);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`WorkRole.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
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
