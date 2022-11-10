import { RcFile } from 'antd/lib/upload';

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

export interface UploadProgressEvent extends Partial<ProgressEvent> {
  percent?: number;
}

export declare type UploadRequestMethod =
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'post'
  | 'put'
  | 'patch';

export declare type UploadRequestHeader = Record<string, string>;
export interface UploadRequestError extends Error {
  status?: number;
  method?: UploadRequestMethod;
  url?: string;
}

export declare type BeforeUploadFileType = File | Blob | boolean | string;
export interface UploadRequestOption<T = any> {
  onProgress?: (event: UploadProgressEvent) => void;
  onError?: (event: UploadRequestError | ProgressEvent, body?: T) => void;
  onSuccess?: (body: T, xhr?: XMLHttpRequest) => void;
  data?: Record<string, unknown>;
  filename?: string;
  file: Exclude<BeforeUploadFileType, File | boolean> | RcFile;
  withCredentials?: boolean;
  action: string;
  headers?: UploadRequestHeader;
  method: UploadRequestMethod;
}
