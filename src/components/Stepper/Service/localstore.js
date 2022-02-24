import React from 'react';

export const SetJobNameLocalStorage = (value) => {
  localStorage.setItem('JobName', value);
};
export const GetJobNameLocalStorage = () => {
  let JobName = localStorage.getItem('JobName');
  return JobName;
};
