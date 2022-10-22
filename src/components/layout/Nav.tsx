import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Nav = () => {
  const router = useRouter();
  const isRoot = router.pathname === '/';
  const isManage = router.pathname === '/manage';
  return (
    <nav className="w-full border-b border-solid border-slate-200 flex justify-center py-6">
      <div className="flex justify-between max-w-screen-xl w-full">
        <div className="flex gap-5">
          <Link href={'/'}>
            <span
              className={`cursor-pointer hover:text-cyan-500 transition-colors ${
                isRoot && 'text-cyan-500'
              }`}
            >
              문제관리
            </span>
          </Link>
          <Link href={'/manage'}>
            <span
              className={`cursor-pointer hover:text-cyan-500 transition-colors ${
                isManage && 'text-cyan-500'
              }`}
            >
              회원관리
            </span>
          </Link>
        </div>
        <div className="flex gap-5">
          <span className="cursor-pointer hover:text-cyan-500 transition-colors">
            로그인
          </span>
          <span className="cursor-pointer hover:text-cyan-500 transition-colors">
            회원가입
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
