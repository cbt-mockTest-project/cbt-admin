import { CaretUpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ReadMockExamQuery } from '../../lib/grapql/query.generated';
import MockExamQuestionApproveButton from './MockExamQuestionApproveButton';
import MockExamQuestionDeleteButton from './MockExamQuestionDeleteButton';
import MockExamQuestionFeedbackDeleteButton from './MockExamQuestionFeedbackDeleteButton';

interface MockExamQuestionProps {
  question: ReadMockExamQuery['readMockExam']['mockExam']['mockExamQuestion'][0];
}

const MockExamQuestion: React.FC<MockExamQuestionProps> = ({ question }) => {
  const [reportListVisible, setReportListVisible] = useState(false);
  const router = useRouter();
  const onToggleReportList = () => {
    setReportListVisible((state) => !state);
  };
  const gotoEditPage = () => router.push(`/mockExams/edit/${question.id}`);
  return (
    <div className="flex flex-col border-b pb-10 " key={question.id}>
      <div className="flex gap-4 items-center mt-10">
        <Button className="w-20" onClick={gotoEditPage}>
          수정
        </Button>
        <MockExamQuestionDeleteButton questionId={question.id} />
        <MockExamQuestionApproveButton
          questionId={question.id}
          disabled={question.approved}
        />
      </div>
      <div className="flex mt-6 flex-col gap-3">
        <p>
          문제{question.number}. {question.question}
        </p>
        <div className="flex gap-4 ">
          {question.question_img &&
            question.question_img?.length >= 1 &&
            question.question_img.map((image, index) => (
              <a
                href={image.url}
                key={image.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`문제이미지${String(index + 1).padStart(2, '0')}`}
              </a>
            ))}
        </div>
        <span>정답</span>
        <pre>{question.solution}</pre>
        <div className="flex gap-4 ">
          {question.solution_img &&
            question.solution_img?.length >= 1 &&
            question.solution_img.map((image, index) => (
              <a
                href={image.url}
                key={image.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`정답이미지${String(index + 1).padStart(2, '0')}`}
              </a>
            ))}
        </div>
        <div
          className="ml-auto flex items-center gap-2 cursor-pointer hover:text-cyan-500 transition-colors"
          onClick={onToggleReportList}
        >
          접수된 신고
          {reportListVisible ? <CaretUpOutlined /> : <CaretUpOutlined />}
        </div>
        {reportListVisible && (
          <ul className="flex gap-4 flex-col border-solid border p-4 mt-4">
            {question.mockExamQuestionFeedback.map((feedBack) => (
              <MockExamQuestionFeedbackDeleteButton
                feedBack={feedBack}
                key={feedBack.id}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MockExamQuestion;
