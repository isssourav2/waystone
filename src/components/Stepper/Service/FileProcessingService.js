import { HocExecute } from './HocExecute';
import axios from 'axios';
import React from 'react';
import { SetFileProcessingTemplateLocalStorage } from './localstore';
const postFileProcess = async (fileProcess) => {
  const res = await axios.post(
    'https://localhost:7056/api/FileProcessingTemplate',
    fileProcess
  );
  return res.data;
};

const submitHandler = (fileProcess) => {
  const response = postFileProcess(fileProcess);
  response.then((save) => {
    SetFileProcessingTemplateLocalStorage(save.message);
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

export const FileProcessingTagManipulationArray = [];

export const FileProcessingDMSApplicationArray = [];

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
    .then((save) => {})
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
    .then((save) => {})
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
  response
    .then((save) => {})
    .catch((error) => {
      console.log(error);
    });
};

export const FundSchedulerSubmit = HocExecute(FundSchedulerSubmitHandler);
export const FileFetchSubmit = HocExecute(FileFetchSubmitHandler);
export const FProcessingTagManipulationHandlerSubmit = HocExecute(
  PostFileProcessingTagManipulationHandler
);
export const FProcessingDMSApplicationSubmit = HocExecute(
  PostFileProcessingDMSApplicationHandler
);

export const DownloaDable = { isDownloadable: false };

export const Post = HocExecute(submitHandler);
