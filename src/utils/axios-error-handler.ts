import { AxiosError } from "axios";
import { UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";
import { ISurveyFormError } from "../api-types";
import { ISurveyForm } from "../types";

class AxiosErrorHandler {
  handleFormSubmitResponse = (
    error: AxiosError,
    methods: UseFormReturn<ISurveyForm, any>
  ) => {
    const { response } = error;
    if (response!.status === 422) {
      toast.error(response?.statusText);

      (response!.data as ISurveyFormError[]).forEach((error: any) => {
        if (error.source.pointer.includes("film")) {
          methods.setError("film", {
            type: "custom",
            message: "Field is required",
          });
        }
        if (error.source.pointer.includes("review")) {
          methods.setError("review", {
            type: "custom",
            message: "Field is required",
          });
        }
      });
    }
    if (response!.status === 500) {
      toast.error(response?.statusText);
    }
  };
}

export const axiosErrorHandler = new AxiosErrorHandler();
