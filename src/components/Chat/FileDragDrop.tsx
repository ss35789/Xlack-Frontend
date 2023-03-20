import "./drag_drop.css";
import React, { ChangeEvent, DragEvent, useState } from "react";

const DragDrop = () => {
  const [imageList, setImageList] = useState<Array<File>>([]);

  // 이미지 파일 처리 input
  const onInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    handleFiles(e.target.files);
  };

  // 이미지 파일 처리 ondrop
  const onDropFiles = (e: DragEvent<HTMLDivElement>) => {
    console.log({ e }, e.dataTransfer.files);
    e.preventDefault();

    handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (files: FileList) => {
    let fileList: Array<File> = [];

    if (files.length > 2) {
      alert(`이미지 개수가 초과되었습니다.업로드 된 이미지 개수 : ${files.length}개 (최대 2개)`);
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      const format: string = `${file.name.split(".").slice(-1)}`.toUpperCase();
      if (format === "JPG" || format === "JPEG" || format === "PNG" || format === "PDF") {
        fileList = [...fileList, file];
        console.log(file);
      } else {
        alert(`이미지 포맷을 확인해주세요.업로드 된 파일 이름 ${file.name} / 포맷 ${format}`);
        return;
      }
    }

    if (fileList.length > 0) {
      setImageList(fileList);
    }
  };

  // 없으면 drop 작동안함...
  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const getImageUrl = (e: File) => {
    return URL.createObjectURL(e);
  };

  // 이미지 클릭시 새로운 화면
  const openImgFile = (e: File) => {
    window.open(getImageUrl(e), `${e.name}`, "height= 600, width= 600, location=0, titlebar=0 , menubar=0, status=0, toolbar=0");
  };

  return (
    <div className="div_images" onDrop={onDropFiles} onDragOver={dragOver}>
      {imageList.length === 0 ? (
        <>
          <p>이미지 파일을 박스 안으로 드래그 혹은 버튼을 클릭 해주세요.</p>
          <p>(파일 최대 2개, 허용 포맷: jpg/png/pdf)</p>
          <input id="input_file" type="file" multiple onChange={onInputFile} />
          <label htmlFor="input_file">이미지 업로드</label>
        </>
      ) : (
        <>
          <div className="div_preview">
            {imageList.map((e, i) => {
              return (
                <>
                  {e.type.includes("pdf") ? (
                    <div key={`img-${i}`} onClick={() => openImgFile(e)}>
                      <embed src={getImageUrl(e)} type={e.type} />
                    </div>
                  ) : (
                    <img key={`img-${i}`} src={getImageUrl(e)} alt="" onClick={() => openImgFile(e)} />
                  )}
                </>
              );
            })}
          </div>
          <button
            onClick={() => {
              setImageList([]);
            }}
          >
            이미지 삭제
          </button>
        </>
      )}
    </div>
  );
};

export default DragDrop;
