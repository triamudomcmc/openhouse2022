import dynamic from "next/dynamic"
import { useState, useEffect, useRef, forwardRef, FC } from "react"

const ReactQuill = dynamic(() => import("./QuillCore"), {
  ssr: false,
})

// eslint-disable-next-line react/display-name
const ForwardedReactQuill = forwardRef((props: any, ref) => <ReactQuill {...props} editorRef={ref} />)

const QuillEditor: FC<{
  value: string
  className?: string
  placeholder?: string
  onChange?: (value: string) => void
  readOnly?: boolean
}> = ({ value, className, placeholder, onChange, readOnly }) => {
  const quillRef = useRef(null)

  return (
    <>
      <ForwardedReactQuill
        value={value}
        placeholder={placeholder ?? ""}
        onChange={(v) => {
          onChange ?? false ? onChange(v) : null
        }}
        ref={quillRef}
        readOnly={readOnly}
        className={className}
        modules={{
          toolbar: [
            [
              { header: ["1", "2", false] },
              // { font: [] }
            ],
            // [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
            [
              "link",
              // "image",
              // "video"
            ],
            ["clean"],
          ],
          clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
          },
        }}
        theme="bubble"
        // theme="snow"
        formats={[
          "header",
          // "font",
          // "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]}
      />
    </>
  )
}

export default QuillEditor
