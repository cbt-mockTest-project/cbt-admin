import { message } from 'antd';

export const isServer = () => typeof window === 'undefined';

interface ConvertWithErrorHandlingFuncParams<
  T extends (...args: any[]) => ReturnType<T>
> {
  callback: T | ((...args: any[]) => ReturnType<T>);
  errorCallback?: (...args: any[]) => ReturnType<T>;
}

declare type ConvertWithErrorHandlingFunc = <
  T extends (...args: any[]) => ReturnType<T>
>({
  callback,
  errorCallback,
}: ConvertWithErrorHandlingFuncParams<T>) => () => Promise<
  ReturnType<T> | undefined
>;

export const convertWithErrorHandlingFunc: ConvertWithErrorHandlingFunc =
  ({ callback, errorCallback }) =>
  async () => {
    try {
      return await callback();
    } catch (error: any) {
      if (error.message === 'Forbidden resource') {
        message.error({ content: '로그인이 필요합니다' });
      }
      if (errorCallback) {
        return await errorCallback(error);
      }
    }
  };
