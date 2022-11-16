import { CaretUpOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
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

  const onToggleReportList = () => {
    setReportListVisible((state) => !state);
  };

  return (
    <div className="flex flex-col border-b pb-10 " key={question.id}>
      <div className="flex gap-4 items-center mt-10">
        <Button className="w-20">수정</Button>
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
            question.question_img.map((image) => (
              <Image
                key={image.url}
                src={image.url}
                width="300px"
                height="300px"
                alt="qusetionImage"
              />
            ))}
        </div>
        <span>정답</span>
        <pre>{question.solution}</pre>
        <div className="flex gap-4 ">
          {question.solution_img &&
            question.solution_img?.length >= 1 &&
            question.solution_img.map((image) => (
              <Image
                key={image.url}
                src={image.url}
                width="300px"
                height="300px"
                alt="qusetionImage"
              />
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
