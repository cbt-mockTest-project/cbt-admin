import { Button, Select, Spin } from 'antd';
import * as _ from 'lodash';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import Layout from '../src/components/layout/Layout';
import {
  useReadMockExams,
  useSearchMockExams,
} from '../src/lib/hooks/useMockExams';
import { MockExamRoutes } from '../src/lib/routes';

interface SearchOptionType {
  value: string;
  label: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const { data } = useReadMockExams();
  const [convertedSearchData, setConvertedSearchData] = useState<
    SearchOptionType[]
  >([]);
  const [searchMockExamCall, { loading: searchLoading }] = useSearchMockExams();

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
          </div>
          <Link href={MockExamRoutes.write}>
            <Button>글쓰기</Button>
          </Link>
        </div>
        <div className="flex flex-col">
          <ul className="mt-6 flex flex-col gap-3">
            {data?.readAllMockExam.mockExams.map((exam, index) => {
              return (
                <Link key={exam.id} href={MockExamRoutes.detail(exam.id)}>
                  <li className="border-b pt-5 pb-2 cursor-pointer hover:bg-neutral-50 ">
                    {exam.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
