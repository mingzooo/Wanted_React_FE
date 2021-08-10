import React, { useState } from "react";
import ResumeItemBox from "./ResumeItemBox";
import styled from "styled-components";
// import axios from "axios";

const FileUpload = () => {
  // 처음에는 파일이 선택되지 않게 설정
  const [fileState, setFileState] = useState(null);

  // 팝업에서 파일 선택 할때, 이벤트
  const onFileChange = (event) => {
    setFileState(event.target.files[0]);
  };
  // console.log("fileState", fileState);

  // 파일 업로드 버튼 클릭시 발생하는 이벤트
  // const onFileUpload = () => {
  //   // formData의 객체 생성
  //   const formData = new FormData();

  //   // formData 객체 업데이트
  //   formData.append("myFile", fileState, fileState.name);

  //   // 업로드 된 파일의 세부 사항 확인
  //   console.log(fileState);

  //   // 백엔드 API에 요청, formData 객체 보내기
  //   axios.post("data/teak2Data/ResumeItem.json", formData);
  // };

  // 이후에 표시 될 파일 내용, 파일 업로드 완료!
  const fileData = () => {
    if (fileState) {
      return (
        <ResumeItemBox
          fileName={fileState.name}
          fileDate={fileState.lastModifiedDate.toDateString()}
          fileText="첨부파일"
          fileCheck={true}
        />
      );
    }
  };

  return (
    <>
      <FileUploadButton>
        <label class="btn-file">
          파일 업로드
          <input
            type="file"
            style={{ display: "none" }}
            onChange={onFileChange}
          />
        </label>
        {/* <button onClick={onFileUpload}>Upload!</button> */}
      </FileUploadButton>
      {fileData()}
    </>
  );
};
const FileUploadButton = styled.div`
  .btn-file {
    position: relative;
    overflow: hidden;
    color: #2886fa;
    font-size: 0.9rem;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }
  }

  .btn-file input[type="file"] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
  }
`;

export default FileUpload;
