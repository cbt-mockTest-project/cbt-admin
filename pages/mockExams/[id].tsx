import { Button } from 'antd';
import React, { useEffect } from 'react';
import Layout from '../../src/components/layout/Layout';
import MockExamQuestion from '../../src/components/mockExamQuestion/MockExamQuestion';
import { useReadMockExam } from '../../src/lib/hooks/useMockExams';

const MockExamsDetail = () => {
  const { data, loading } = useReadMockExam();

  if (!data || loading) return null;
  const { readMockExam } = data;
  return (
    <Layout>
      <div className="flex gap-8">
        <h2 className="text-2xl my-auto ">{readMockExam.mockExam.title}</h2>
        <Button
          size="large"
          disabled={readMockExam.mockExam.approved}
          className="w-28"
        >
          {readMockExam.mockExam.approved ? '게시중' : '승인하기'}
        </Button>
      </div>
      {readMockExam.mockExam.mockExamQuestion.map((question) => (
        <MockExamQuestion key={question.id} question={question} />
      ))}
    </Layout>
  );
};

export default MockExamsDetail;
