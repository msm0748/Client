'use client';
import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
      [
        {
          color: [],
        },
        { background: [] },
      ],
      ['clean'],
    ],
  },
};

const Editor = () => {
  const [value, setValue] = useState('');
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  return (
    <div className="h-full">
      <ReactQuill theme="snow" modules={modules} value={value} onChange={setValue} />
    </div>
  );
};

export default Editor;
