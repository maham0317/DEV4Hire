import { ErrorResponseModel } from "@/interfaces/error-response.model";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { useCreateWorkRoleMutation } from "@/services/work-roles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useWorkRoleAdd = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [createWorkrole, { isLoading, isSuccess, error, isError, data }] =
    useCreateWorkRoleMutation();

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // Form Validtion

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkRoleModel>();

  const onSubmit = async (data: WorkRoleModel) => {
    try {
      await createWorkrole(data).unwrap();
      toast.success(t("WorkRole.AddOrEdit.Input.Toast.Success.Save"));
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
