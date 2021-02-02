import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Upload, { UploadFile } from "./Upload";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const defaultFileList: UploadFile[] = [
  {
    uid: "123",
    size: 1234,
    name: "hello.md",
    status: "uploading",
    percent: 30,
  },
  { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
  { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 },
];

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert("file too big");
    return false;
  }
  return true;
};

const defaultUpload = () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="file"
    defaultFileList={defaultFileList}
    onChange={function noRefCheck() {}}
    onProgress={function noRefCheck() {}}
    onRemove={function noRefCheck() {}}
    onSuccess={function noRefCheck() {}}
  >
    <Button disabled={false} size="lg">
      <Icon icon="upload" theme="secondary"/> 点击上传
    </Button>
  </Upload>
);

const uploadSize = () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="file"
    defaultFileList={defaultFileList}
    onChange={action("changed")}
    beforeUpload={checkFileSize}
  >
    <Button size="lg">
      <Icon icon="upload" theme="secondary"/> 不能传大于50Kb！{" "}
    </Button>
  </Upload>
);

const uploadDrag = () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    defaultFileList={defaultFileList}
    drag
    multiple
    name="fileName"
    onChange={function noRefCheck() {}}
    onRemove={function noRefCheck() {}}
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>点击或者拖动到此区域进行上传</p>
  </Upload>
);

storiesOf("Upload 上传", module)
  .add("Upload", defaultUpload)
  .add("上传前检查文件大小", uploadSize)
  .add("拖动上传", uploadDrag);
