import { UploadFile } from 'antd';
import Upload, { RcFile } from 'antd/lib/upload';
import axios, { AxiosProgressEvent } from 'axios';
import React, { useEffect, useState } from 'react';
import { UploadRequestOption } from '../../customTypes';

interface UploadImageProps {
  onFileChange?: (fileList: UploadFile[]) => void;
}

const UploadImages: React.FC<UploadImageProps> = ({ onFileChange }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  useEffect(() => {
    if (onFileChange) {
      onFileChange(fileList);
    }
  }, [fileList]);

  const onPreview = async (file: UploadFile) => {
    const src = fileList.filter((prevFile) => prevFile.uid === file.uid)[0].url;
    const image = new Image();
    if (src) {
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    }
  };
  const customRequest = async (options: UploadRequestOption) => {
    const { onSuccess, onError, onProgress, file } = options;
    try {
      const form = new FormData();
      const config = {
        onUploadProgress: (event: AxiosProgressEvent) => {
          if (event.total && onProgress) {
            onProgress({ percent: (event.loaded / event.total) * 100 });
          }
        },
      };
      if (file) {
        form.append('file', file);
        const { data } = await axios.post(
          'http://localhost:8070/uploads',
          form,
          config
        );
        if (data) {
          setFileList((prevFileList) => [
            ...prevFileList,
            {
              name: (file as RcFile).name,
              url: data.url,
              uid: (file as RcFile).uid,
            },
          ]);
        }
      }

      if (onSuccess) onSuccess('Ok');
    } catch (e) {
      console.log(e);
      onError && onError({ e } as any);
    }
  };

  const onRemove = (file: UploadFile<any>) => {
    setFileList((prevFileList) =>
      prevFileList.filter((prevFile) => prevFile.uid !== file.uid)
    );
  };
  return (
    <div>
      <Upload
        accept="image/*"
        listType="picture-card"
        defaultFileList={fileList}
        onPreview={onPreview}
        onRemove={onRemove}
        customRequest={customRequest}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </div>
  );
};

export default UploadImages;
