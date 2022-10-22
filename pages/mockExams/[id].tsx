import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../src/components/layout/Layout';

const MockExamsDetail = () => {
  const router = useRouter();
  return <Layout>{router.query.id}</Layout>;
};

export default MockExamsDetail;
