'use client'
import dynamic from "next/dynamic";
import { useState } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import parse from 'html-react-parser';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function Home() {
  const [content, setContent] = useState("");

  return (
    <main className="lg:w-[1440px] mx-auto flex">
      <div className="w-[45%]">
        
      <SunEditor
        name="content"
        defaultValue={content}
        onChange={(text) => {
          console.log('-------------->', text);
          
          setContent(text)
        }}
        setOptions={{
          height: "200",
          buttonList: [
            [
              "formatBlock",
              "font",
              "fontSize",
              "fontColor",
              "align",
              "paragraphStyle",
              "blockquote",
            ],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["removeFormat"],
            ["outdent", "indent"],
            ["table", "list"],
            ["link", "image", "video"],
          ],
        }}
      />
      </div>

      <div className="w-[45%]">
        {parse(content)}
      </div>
    </main>
  );
}
