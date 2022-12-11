import { IAnswer, ISurvey } from "../api-types";
import { axiosBackendClient } from "./axiosServices/axiosBackendClient";

class SurveyRepository {
  getSurveys = async (): Promise<ISurvey[]> => {
    const response = await axiosBackendClient.get("/survey");
    return response.data;
  };

  submitAnswer = async (answers: IAnswer, surveyId: string) => {
    const response = await axiosBackendClient.post(
      `/survey/${surveyId}/answers`,
      answers
    );
    return response.data;
  };
}

export const surveyRepository = new SurveyRepository();
