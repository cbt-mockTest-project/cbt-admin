import { Button, message, Select, Spin } from 'antd';
import * as _ from 'lodash';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import ConfirmButton from '../src/components/common/ConfirmButton';
import ExamList from '../src/components/index/ExamList';
import Layout from '../src/components/layout/Layout';
import {
  useReadAllMockExams,
  useSearchMockExams,
} from '../src/lib/hooks/useMockExams';
import { useRevalidate } from '../src/lib/hooks/useRevalidate';
import { MockExamRoutes } from '../src/lib/routes';
import { convertWithErrorHandlingFunc } from '../src/lib/utils/utils';

export interface SearchOptionType {
  value: any;
  label: any;
}

const Home: NextPage = () => {
  const router = useRouter();
  const { data } = useReadAllMockExams();
  const [revalidateMutation] = useRevalidate();
  const [convertedSearchData, setConvertedSearchData] = useState<
    SearchOptionType[]
  >([]);
  const [searchMockExamCall, { loading: searchLoading }] = useSearchMockExams();

  const requestIndexPageRevalidate = async () => {
    const res = await revalidateMutation({
      variables: {
        input: {
          path: `/`,
        },
      },
    });
    if (res.data?.revalidate.ok) {
      return message.success('index revalidation success');
    }
    return message.error(res.data?.revalidate.error);
  };

  const tryIndexPageRevalidate = convertWithErrorHandlingFunc({
    callback: requestIndexPageRevalidate,
  });

  const debounceOnSearch = useMemo(() => {
    const onSearch = async (query: string) => {
      await searchMockExamCall({
        variables: {
          input: {
            query,
          },
        },
        onCompleted: (data) => {
          const typedSearchData = data.searchMockExam.mockExams.map((data) => {
            return { label: data.title, value: data.title };
          });
          setConvertedSearchData(typedSearchData);
        },
      });
    };
    return _.debounce(onSearch, 500);
  }, [searchMockExamCall]);

  const onSelect = ({ value }: SearchOptionType) =>
    router.push({ pathname: router.pathname, query: { s: value } });

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <span>문제선택</span>
            <Select
              labelInValue
              showSearch={true}
              className=" w-52 "
              onSearch={debounceOnSearch}
              onSelect={onSelect}
              options={convertedSearchData}
              notFoundContent={searchLoading ? <Spin size="small" /> : null}
            />
            <Button type="primary" onClick={tryIndexPageRevalidate}>
              index-Revalidate
            </Button>
          </div>
          <Link href={MockExamRoutes.write}>
            <Button>글쓰기</Button>
          </Link>
        </div>
        <div className="flex flex-col">
          <ul className="mt-6 flex flex-col gap-3">
            {data?.readAllMockExam.mockExams.map((exam, index) => (
              <ExamList exam={exam} key={exam.id} />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
