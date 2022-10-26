import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useMe } from '../../lib/hooks/useAuth';
import { authRoutes } from '../../lib/routes';
import { authTokenVar } from '../../modules/apollo';
import ClientOnly from '../common/ClientOnly';

const Nav = () => {
  const router = useRouter();
  const { refetch } = useMe();
  const isRoot = router.pathname === '/';
  const isManage = router.pathname === '/manage';
  const onLogout = () => {
    authTokenVar('');
    deleteCookie('jwt-token');
    refetch();
  };
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
        <ClientOnly>
          {authTokenVar() ? (
            <span
              onClick={onLogout}
              className="cursor-pointer hover:text-cyan-500 transition-colors"
            >
              로그아웃
            </span>
          ) : (
            <div className="flex gap-5">
              <Link href={authRoutes.login}>
                <span className="cursor-pointer hover:text-cyan-500 transition-colors">
                  로그인
                </span>
              </Link>
              <Link href={authRoutes.register}>
                <span className="cursor-pointer hover:text-cyan-500 transition-colors">
                  회원가입
                </span>
              </Link>
            </div>
          )}
        </ClientOnly>
      </div>
    </nav>
  );
};

export default Nav;
