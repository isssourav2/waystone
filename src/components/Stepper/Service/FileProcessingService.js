import { HocExecute } from './HocExecute';
import axios from 'axios';
const postFileProcess = async (fileProcess) => {
  const res = await axios.post(
    'https://localhost:7056/api/FileProcessingTemplate',
    fileProcess
  );
  return res.data;
};

const submitHandler = (fileProcess) => {
  debugger;
  const response = postFileProcess(fileProcess);
  response.then((save) => {
    console.log('reponse:', save);
  });
};

const Validation = (PostFile) => {
  if (PostFile.fileProcessingTemplateName == '') {
    return false;
  } else {
    return true;
  }
};

export const FileProcessingValidation = HocExecute(Validation);

export const PostFile = {
  id: 0,
  riskCoreImportTemplateId: 0,
  fileProcessingTemplateName: '',
  csvDelimiter: '',
  textDelimiter: '',
  preprocessedDeliveryPath: '',
  username: '',
  password: '',
  isManipulation: false,
  tagId: 0,
  applicationId: 0,
  tag: '',
  application: '',
  riskCoreTemplate: '',
  riskCoreTemplateId: 0,
};

export const DownloaDable = { isDownloadable: false };

export const Post = HocExecute(submitHandler);
