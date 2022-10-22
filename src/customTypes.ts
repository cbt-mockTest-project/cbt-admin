export interface ReadQMockExamQuestionData {
  __typename?: 'MockExamQuestion';
  question: string;
  solution: string;
  id: number;
  question_img?: Array<{
    __typename?: 'MockExamQuestionImage';
    url: string;
  }> | null;
  solution_img?: Array<{
    __typename?: 'MockExamQuestionImage';
    url: string;
  }> | null;
  mockExamQuestionFeedback: Array<{
    __typename?: 'MockExamQuestionFeedback';
    content: string;
    id: number;
  }>;
}
