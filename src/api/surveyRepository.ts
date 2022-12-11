import { axiosBackendClient } from "./axiosServices/axiosBackendClient";

class SurveyRepository {
  getSurveys = async () => {
    return axiosBackendClient.get("/survey");
  };
}

export const surveyRepository = new SurveyRepository();
