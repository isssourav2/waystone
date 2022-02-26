import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FixedTags from '../Common/FixedTags';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import { HocExecute } from './Service/HocExecute';
import {
  FileProcessingValidation,
  Post,
  PostFile,
  DownloaDable,
  FundScheduler,
  FundSchedulerSubmit,
  FileProcessingTagManipulation,
  FileProcessingDMSApplication,
  FileProcessingTagManipulationArr,
  FileProcessingTagManipulationArray,
  FileProcessingDMSApplicationArray,
  FileProcessingTagManipulationArrData,
} from './Service/FileProcessingService';

import {
  SetFileProcessingTemplateLocalStorage,
  GetFileProcessingTemplateLocalStorage,
} from './Service/localstore';
import { GetEditRiskTemplate } from './Service/RiskCoreEditService.';
const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));
function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <StyledFormControlLabel className="btn" checked={checked} {...props} />
  );
}
MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

function RiskCoreTemplate() {
  const [Tagged, setTagged] = React.useState([]);
  const [EditTags, SetEditTags] = React.useState([]);
  const [EditApplications, SetApplications] = React.useState([]);
  console.log('Tag Records:', Tagged);
  const [Application, setApplication] = React.useState([]);
  console.log('Tag Records:', Application);
  let i = 0;
  const AllValidation = () => {
    if (PostFile.fileProcessingTemplateName == '') {
      setvalidationfileProcessingTemplateName(true);
      setValidateCount(++i);
      return false;
    } else {
      setValidateCount(0);
      return true;
    }
  };
  const handleNext = () => {
    if (AllValidation) {
      SetFileProcessingTemplateLocalStorage(PostFile.id);
      Post(PostFile);
    }
  };
  const GetTagged = () => {
    fetch('https://localhost:7056/api/Tag')
      .then((res) => res.json())
      .then((result) => {
        result.map((res) => {
          res['name'] = res.tagName;
        });
        setTagged(result);
      });
  };
  const GetApplication = () => {
    fetch('https://localhost:7056/api/Application')
      .then((res) => res.json())
      .then((result) => {
        result.map((res) => {
          res['name'] = res.applicationName;
        });
        setApplication(result);
      });
  };
  const EditRiskCoreTemplate = () => {
    const objValue = GetEditRiskTemplate();
    return objValue;
  };
  const GetFileProcessTem = (fileProcess) => {
    PostFile.id = fileProcess;
    fetch(`https://localhost:7056/api/FileProcessingTemplate/${fileProcess}`)
      .then((res) => res.json())
      .then((result) => {
        //setEditFileProcess(result)
        if (result.tags != undefined) {
          result.tags.map((res) => {
            res['name'] = res.tagName;
          });
        }
        if (result.applications != undefined) {
          result.applications.map((res) => {
            res['tagId'] = res.applicationId;
            res['name'] = res.applicationName;
          });
        }
        SetEditTags(result.tags);
        SetApplications(result.applications);
        SetFileProcessingTemplateName(result.fileProcessingTemplateName);
        SetSelectRiskCoreTemplate(result.riskCoreImportTemplateId);
      });
  };
  const GetFileProcessTemplate = () => {
    let val = GetFileProcessingTemplateLocalStorage();
    if (val != null && val != undefined) {
      GetFileProcessTem(val);
    }
  };
  React.useEffect(() => {
    GetTagged();
    GetApplication();
    GetRiskCoreTemplate();
    GetFileProcessTemplate();
    EditRiskCoreTemplate();
  }, [0]);

  const [Tag, SetTag] = React.useState(0);

  const [application, Setapplication] = React.useState(0);

  const [RiskTemplate, SetRiskTemplate] = React.useState(0);

  const [validateCount, setValidateCount] = React.useState(1);
  const onFileProcessingTemplateNameChange = (val) => {
    if (val === '') {
      setvalidationfileProcessingTemplateName(true);
      setValidateCount(++i);
    } else {
      setvalidationfileProcessingTemplateName(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetFileProcessingTemplateName(val);
    PostFile.fileProcessingTemplateName = val;
    //user.userName = val;
  };
  const onTagChange = (val) => {
    SetTag(val);
    PostFile.tagId = val;
    FileProcessingTagManipulationArray.push(val);
    //user.userName = val;
  };
  const onTagRemove = (val) => {
    SetTag(val);
    PostFile.tagId = val;
    //FileProcessingTagManipulationArr();
    console.log('ArrB4Del', FileProcessingTagManipulationArray);
    FileProcessingTagManipulationArrData(
      FileProcessingTagManipulationArray.filter((tagId) => tagId !== val)
    );
    console.log('ArrAfterDel', FileProcessingTagManipulationArray);
  };
  const onApplicationChange = (val) => {
    Setapplication(val);
    PostFile.applicationId = val;
    //FileProcessingDMSApplicationArr();
    FileProcessingDMSApplicationArray.push(val);
    //user.userName = val;
  };
  const onRiskCoreTemplateChange = (val) => {
    SetRiskTemplate(val);
    PostFile.riskCoreImportTemplateId = val;
    //user.userName = val;
  };
  const fixedOptions = [Tagged[0]];
  const [tagValue, setTagValue] = React.useState([...fixedOptions, Tagged[5]]);
  const handleTaggedChange = (event, newValueArr) => {
    if (newValueArr.length != 0) {
      if (newValueArr.some((ele) => ele.name === 'All')) {
        setTagValue([
          // ...fixedOptions,
        ]);
      } else {
        setTagValue([
          // ...fixedOptions,
          ...newValueArr.filter(
            (option) => fixedOptions.indexOf(option) === -1
          ),
        ]);
      }

      FileProcessingTagManipulationArr();
      newValueArr.forEach((newValue) => {
        onTagChange(newValue.tagId);
      });
    }
  };
  const handleTagDelete = (event, tagId) => {
    onTagRemove(tagId);
  };
  const fixedAppOptions = [Application[0]];
  const [appValue, setAppValue] = React.useState([
    ...fixedAppOptions,
    Application[5],
  ]);
  const handleApplicationChange = (event, newValue) => {
    if (newValue[0].name === 'All') {
      setAppValue([
        // ...fixedOptions,
      ]);
    } else {
      setAppValue([
        // ...fixedOptions,
        ...newValue.filter((option) => fixedAppOptions.indexOf(option) === -1),
      ]);
    }
    onApplicationChange(newValue[0].applicationId);
  };
  const [SelectRiskCoreTemplate, SetSelectRiskCoreTemplate] = React.useState(0);
  const [RiskCoreTemplate, SetRiskCoreTemplate] = React.useState([]);

  // const [RiskCoreTemplate, SetRiskCoreTemplate] = React.useState([]);
  const [DownloadManipulate, SetDownloadManipulate] = React.useState(true);
  const [DownloadableDelivery, SetDownloadableDelivery] = React.useState(false);

  const GetRiskCoreTemplate = () => {
    fetch('https://localhost:7056/api/RiskCoreTemplate')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        const Options = [{ id: 0, name: 'Select' }, ...result];
        SetRiskCoreTemplate(Options);
      });
  };

  const [fileProcessingTemplateName, SetFileProcessingTemplateName] =
    React.useState('');
  const [
    validationfileProcessingTemplateName,
    setvalidationfileProcessingTemplateName,
  ] = React.useState(false);

  const downloadManipulate = () => {
    SetDownloadManipulate(true);
    SetDownloadableDelivery(false);
    PostFile.isManipulation = true;
  };
  const downloadDelivery = () => {
    SetDownloadableDelivery(true);
    SetDownloadManipulate(false);
    PostFile.isManipulation = true;
  };

  PostFile.riskCoreImportTemplateId = SelectRiskCoreTemplate;

  console.log('Tags', EditTags);
  console.log('Applications', EditApplications);

  return (
    <>
      <RadioGroup
        className="text-center"
        name="use-radio-group"
        defaultValue=""
      >
        <div className="radio-flex">
          <MyFormControlLabel
            className="btn"
            value="Download Manipulate and Delivery"
            label=" Download Manipulate and Delivery"
            control={<Radio checked={DownloadManipulate} />}
            onChange={downloadManipulate}
          />
          <MyFormControlLabel
            value="Download Delivery"
            label="Download Delivery"
            control={<Radio checked={DownloadableDelivery} />}
            onChange={downloadDelivery}
          />
        </div>
      </RadioGroup>

      <div className="two-col-form">
        {validationfileProcessingTemplateName ? (
          <TextField
            error
            className="form-col-single"
            id="outlined-name"
            // label="Job Name *"
            value={fileProcessingTemplateName}
            onChange={(e) => onFileProcessingTemplateNameChange(e.target.value)}
          />
        ) : (
          <TextField
            className="form-col-single"
            id="outlined-name"
            value={fileProcessingTemplateName}
            // label="Job Name *"
            //value={EditRiskCoreTemplate().fileProcessingTemplateName}
            onChange={(e) => onFileProcessingTemplateNameChange(e.target.value)}
          />
        )}

        <div className="form-col">
          <FixedTags
            tags={Tagged}
            editTags={EditTags}
            label="Select Tags(s)"
            value={EditRiskCoreTemplate().tag}
            onTagChangeHandler={handleTaggedChange}
            onTagDeleteHandler={handleTagDelete}
          />
        </div>
        {/* <TextField
      className="form-col"
      id="outlined-uncontrolled"
      label="Tag(a)"
    /> */}
        <div className="form-col">
          <FixedTags
            tags={Application}
            editTags={EditApplications}
            label="Select Application(s)"
            value={EditRiskCoreTemplate().application}
            onTagChangeHandler={handleApplicationChange}
            onTagDeleteHandler={handleTagDelete}
          />
        </div>
        {/* <TextField
      className="form-col"
      id="outlined-name"
      label="Application(s)"
    /> */}

        <FormControl className="form-col-single label-box">
          <InputLabel htmlFor="grouped-native-select">
            RiskCore Import Template
          </InputLabel>
          <Select
            value={SelectRiskCoreTemplate}
            //label={SelectRiskCoreTemplate}
            onChange={(e) => SetSelectRiskCoreTemplate(e.target.value)}
          >
            {RiskCoreTemplate.map((freq) => {
              return <MenuItem value={freq.id}>{freq.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default RiskCoreTemplate;
