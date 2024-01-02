/* eslint-disable @next/next/no-img-element */
'use client';

import { axiosInstance } from '@/lib/axios';
import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineClose, AiOutlineCamera } from 'react-icons/ai';

interface FileWithPreview extends File {
  preview: string;
  path?: string;
}

export default function FileUpload() {
  const [myFiles, setMyFiles] = useState<FileWithPreview[]>([]);

  // 메모리 누수를 방지
  useEffect(() => {
    return () => myFiles.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [myFiles]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setMyFiles((prevFiles) => {
      // 이미 선택된 파일과 새로운 파일을 합침
      const allFiles = prevFiles.concat(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      // 최대 허용 파일 갯수를 초과하는 경우 초과한 파일들을 제거
      const truncatedFiles = allFiles.slice(0, 5);

      // 중복 파일 제거
      const uniqueFiles = truncatedFiles.filter(
        (file, index, self) => index === self.findIndex((f) => f.name === file.name)
      );

      return uniqueFiles;
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file: FileWithPreview) => () => {
    const newFiles = myFiles.filter((f) => f !== file);
    setMyFiles(newFiles);
  };

  const files = myFiles.map((file) => (
    <li key={file.path} className="relative">
      <img
        src={file.preview}
        className="w-32 h-[72px]"
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        alt="상품 이미지"
      />
      <button
        className="absolute right-1 top-1 rounded-full w-6 h-6 bg-white opacity-70 border flex justify-center items-center border-black"
        onClick={removeFile(file)}
      >
        <AiOutlineClose />
      </button>
    </li>
  ));

  const remainingCameraIcons = Math.max(5 - myFiles.length, 0);
  const cameraIcons = Array.from({ length: remainingCameraIcons }, (_, index) => (
    <li key={`camera-${index}`}>
      <AiOutlineCamera className="w-32 h-[72px] text-slate-300" />
    </li>
  ));

  const handleUpload = async () => {
    const formData = new FormData();

    myFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
      // 실제 서버 엔드포인트 및 파일 전송 방식에 맞게 수정
      const response = await axiosInstance.post('/admin/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        // 서버에서 파일 처리가 성공적으로 이루어진 경우
        // 여기서 필요한 로직 추가 가능
        console.log('File upload successful');
      } else {
        // 서버에서 파일 처리가 실패한 경우
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>이미지</div>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <span className="text-[#1A6DFF] cursor-pointer">Image 추가</span>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex gap-4">
          {files} {cameraIcons}
        </ul>
      </div>
      <button onClick={handleUpload} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        전송
      </button>
    </div>
  );
}
