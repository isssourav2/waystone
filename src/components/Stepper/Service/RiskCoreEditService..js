import React from 'react';

var EditRiskTemplate = {};

export const SetEditRiskTemplate = (row) => {
  EditRiskTemplate = row;
};

export const GetEditRiskTemplate = () => {
  return EditRiskTemplate;
};
