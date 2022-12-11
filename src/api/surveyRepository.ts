import { ISurvey } from "../api-types";
import { axiosBackendClient } from "./axiosServices/axiosBackendClient";

class SurveyRepository {
  getSurveys = async (): Promise<ISurvey[]> => {
    const response = await axiosBackendClient.get("/survey");
    return response.data;
  };
}

export const surveyRepository = new SurveyRepository();
