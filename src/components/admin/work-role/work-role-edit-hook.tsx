import { ErrorResponseModel } from "@/interfaces/error-response.model";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { useUpdateWorkRoleMutation } from "@/services/work-roles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useWorkRoleEdit = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [updateWorkRole, { isLoading, isSuccess, error, isError }] =
    useUpdateWorkRoleMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkRoleModel>({
    defaultValues: props.selectedData,
  });
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // Form Validtion
  const onSubmit = async (data: WorkRoleModel) => {
    try {
      await updateWorkRole(data).unwrap();
      toast.success(t("WorkRole.AddOrEdit.Input.Toast.Success.Update"));
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
