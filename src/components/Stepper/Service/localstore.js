import React from 'react';

export const SetJobNameLocalStorage = (value) => {
  localStorage.setItem('JobName', value);
};
export const GetJobNameLocalStorage = () => {
  let JobName = localStorage.getItem('JobName');
  return JobName;
};
export const SetFileProcessingTemplateLocalStorage = (value) => {
  localStorage.setItem('FileProcessingTemplateId', value);
};
export const GetFileProcessingTemplateLocalStorage = () => {
  let fileProcessingTemplateId = localStorage.getItem(
    'FileProcessingTemplateId'
  );
  return fileProcessingTemplateId;
};
