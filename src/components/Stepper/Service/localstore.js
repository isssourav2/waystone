import React from 'react';

export const SetJobNameLocalStorage = (value) => {
  localStorage.setItem('JobName', value);
};
export const GetJobNameLocalStorage = () => {
  let JobName = localStorage.getItem('JobName');
  return JobName;
};
//Valiation Start
export const SetValidationTemplateNameStorage = (value) => {
  localStorage.setItem('TemplateNameValidation', value);
};
export const GetValidationTemplateNameStorage = () => {
  let JobName = localStorage.getItem('TemplateNameValidation');
  return JobName;
};
export const SetValidationStatus = (value) => {
  localStorage.setItem('isValidation', value);
};
export const GetValidationStatus = () => {
  let JobName = localStorage.getItem('isValidation');
  return JobName;
};
//validation End
export const SetFileProcessingTemplateLocalStorage = (value) => {
  localStorage.setItem('FileProcessingTemplateId', value);
};

export const GetFileProcessingTemplateLocalStorage = () => {
  let fileProcessingTemplateId = localStorage.getItem(
    'FileProcessingTemplateId'
  );
  return fileProcessingTemplateId;
};
