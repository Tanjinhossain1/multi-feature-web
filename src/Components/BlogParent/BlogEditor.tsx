import React, { useRef, useEffect } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import WordPad, { BlockToolConstructable, LogLevels } from "@editorjs/editorjs";

import List from "@editorjs/list";
import Table from "@editorjs/table";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import Delimiter from "@editorjs/delimiter"; 

interface EditorProps {
  onEditorDataChange: (data: OutputData) => void;
}

const Editor: React.FC<EditorProps> = ({ onEditorDataChange }) => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: "editor",
        autofocus: true,
        onChange: (api) => {
          api.saver.save().then(onEditorDataChange);
        },
        tools: {
          // add list, table, delimiter, quote
          header: Header,
          image: {
            class: Image,
            config: {
              endpoints: {
                byFile: '/api/upload-image', // Use the API route for image upload
              },
            },
          },



          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 3,
              cols: 3,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },
          delimiter: {
            class: Delimiter,
            inlineToolbar: true,
          },
        },
      });
    }

    return () => {
      if (editorRef.current) {
        // editorRef.current?.destroy();
        editorRef.current = null;
      }
    };
  }, [onEditorDataChange]);

  return <div id="editor" />;
};

export default Editor;
