export interface IAnswer {
  type: any;
}

interface IQuestions {
  questionId: string;
  questionType: string;
  label: string;
  required: boolean;
  attributes?: any;
}
interface IAttributes {
  title: string;
  description: string;
  questions: IQuestions[];
}
export interface ISurvey {
  type: string;
  attributes: IAttributes;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}
