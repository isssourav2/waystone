import { HocExecute } from './HocExecute';
import axios from 'axios';
import React from 'react';
import {
  SetFileProcessingTemplateLocalStorage,
  SetValidationStatus,
  SetValidationTemplateNameStorage,
} from './localstore';
const postFileProcess = async (fileProcess) => {
  const res = await axios.post(
    'https://localhost:7056/api/FileProcessingTemplate',
    fileProcess
  );
  return res.data;
};

const submitHandler = (fileProcess) => {
  const response = postFileProcess(fileProcess);
  return response;
  // response.then((save) => {
  //   if (save.isValidation) {
  //     SetValidationStatus(save.isValidation);
  //     SetValidationTemplateNameStorage(save.validation);
  //   } else {
  //     SetFileProcessingTemplateLocalStorage(save.message);
  //   }
  // });
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
//Fund Schedule
export const FundScheduler = {
  id: 0,
  fileProcessingTemplateId: 0,
  frequencyTagId: 0,
  asAt: 0,
  fromTo: 0,
  fromToRange: 0,
  note: '',
};
//File Fetch
export const FileFetch = {
  id: 0,
  fileProcessingTemplateId: 0,
  connectionId: 0,
  sourcePathFormat: '',
  fileName: '',
  receivedFrom: '',
  subjectHeader: '',
  sentTo: '',
};
//File password
export const FileProcessingTagManipulation = {
  id: 0,
  fileProcessingTemplateId: 0,
  tagId: 0,
};
export const FileProcessingDMSApplication = {
  id: 0,
  fileProcessingTemplateId: 0,
  dmsApplicationId: 0,
};

export const LastElementForStep8={
  element:''
}

export const FileProcessingTagManipulationArray = [];

export let FileProcessingDMSApplicationArray = [];

export const FileProcessingTagManipulationArr = () => {
  FileProcessingTagManipulationArray = [];
};
export const FileProcessingTagManipulationArrData = (data) => {
  FileProcessingTagManipulationArray = data;
};
export const FileProcessingDMSApplicationArr = () => {
  return (FileProcessingDMSApplicationArray = []);
};

const PostFileProcessingTagManipulation = async (
  FileProcessingTagManipulation
) => {
  const res = await axios.post(
    'https://localhost:7056/api/FileProcessingTemplateTagMapping',
    FileProcessingTagManipulation
  );
  return res.data;
};
const PostFileProcessingDMSApplication = async (
  FileProcessingDMSApplication
) => {
  const res = await axios.post(
    'https://localhost:7056/api/FileProcessingTemplateDMSApplication',
    FileProcessingDMSApplication
  );
  return res.data;
};
const PostFileProcessingTagManipulationHandler = (
  FileProcessingTagManipulation
) => {
  const response = PostFileProcessingTagManipulation(
    FileProcessingTagManipulation
  );
  response
    .then((save) => {
      // FileProcessingTagManipulationArray = [];
    })
    .catch((error) => {
      console.log(error);
    });
};
const PostFileProcessingDMSApplicationHandler = (
  FileProcessingDMSApplication
) => {
  const response = PostFileProcessingDMSApplication(
    FileProcessingDMSApplication
  );
  response
    .then((save) => {
      // FileProcessingDMSApplicationArray = [];
    })
    .catch((error) => {
      console.log(error);
    });
};
//Tag manipulation

const postFundScheduler = async (FundScheduler) => {
  const res = await axios.post(
    'https://localhost:7056/api/FundScheduler',
    FundScheduler
  );
  return res.data;
};
const FundSchedulerSubmitHandler = (FundScheduler) => {
  const response = postFundScheduler(FundScheduler);
  response
    .then((save) => {
      console.log('Fund Scheduler Save', save);
    })
    .catch((error) => {
      console.log(error);
    });
};
//File Post
const postFileFetch = async (FileFetch) => {
  const res = await axios.post(
    'https://localhost:7056/api/FileFetch',
    FileFetch
  );
  return res.data;
};

const FileFetchSubmitHandler = (FileFetch) => {
  const response = postFileFetch(FileFetch);
  return response;
};

const UpdateFileProcess1 = async (fileProcess) => {
  const res = await axios.put(
    'https://localhost:7056/api/FileProcessingTemplate',
    fileProcess
  );
  return res.data;
};

const UpdateFileProcessHandler = (FileFetch) => {
  const response = UpdateFileProcess1(FileFetch);
  return response;
};

export const UpdateFileProcess = HocExecute(UpdateFileProcessHandler);
export const FundSchedulerSubmit = HocExecute(FundSchedulerSubmitHandler);
export const FileFetchSubmit = HocExecute(FileFetchSubmitHandler);
export const FProcessingTagManipulationHandlerSubmit = HocExecute(PostFileProcessingTagManipulationHandler);
export const FProcessingDMSApplicationSubmit = HocExecute(PostFileProcessingDMSApplicationHandler);


export const DownloaDable = { isDownloadable: false };

export const Post = HocExecute(submitHandler);



/*****File Validation*****/

//FileValidation
export const FileValidation = {
  id: 0,
 fileProcessingTemplateId: 0,
 columnOrder:0,
 columnName:'',
 dataType:''
  // id: 0,
  // fileProcessingTemplateId: 0,
  // columnOrder: 0,
  // columnName: '',
  // dataType: '',
  // receivedFrom: '',
  // subjectHeader: '',
  // sentTo: '',
};

export const FileValidationArray = [];

const postFileValidation = async (FileValidation) => {
  const res = await axios.post('https://localhost:7056/api/FileValidation',FileValidation);
  return res.data;
};

const FileValidationSubmitHandler = (FileValidation) => {
  debugger;
  const response = postFileValidation(FileValidation);
  response
    .then((save) => {
      FileValidationArray = [];
    })
    .catch((error) => {
      console.log(error);
    });
};

export const FileValidationSubmit = HocExecute(FileValidationSubmitHandler);
//export const FileValidationSubmit = HocExecute(FileValidationSubmitHandler);

/*****File Validation*****/