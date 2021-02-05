import React from "react";
import { UploadFile } from "./Upload";
interface UploadListProps {
    /**上传的文件列表 */
    fileList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
}
export declare const UploadList: React.FC<UploadListProps>;
export default UploadList;
