import React from "react";
import { useQuery } from "react-query";
import { surveyRepository } from "../api/surveyRepository";

export const useSurveys = () =>
  useQuery("surveys", () =>
    surveyRepository.getSurveys().then((res) => res.data)
  );
