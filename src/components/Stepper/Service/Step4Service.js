import React from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Step4Service = () => {
  var i = 0;

  //create an object model
  const [fileReadModel, setFileReadModel] = React.useState({
    id: 0,
    basedOn: '',
    cellOrHeaderValue: '',
    checkIn: '',
    cellOrHeader: '',
    operation: '',
    searchValue: '',
    readFromNextColCell: '',
    sheetName: '',
  });

  React.useEffect(() => {
    GetFileReadData();
  }, [0]);

  const [rows, setRows] = React.useState([]);
  const [row, setRow] = React.useState({
    id: 0,
  });

  const [BasedOn, setBasedOn] = React.useState('');
  const [CellOrHeaderValue, setCellOrHeaderValue] = React.useState('');
  const [CheckIn, setCheckIn] = React.useState('');
  const [CellOrHeader, setCellOrHeader] = React.useState('');
  const [Operation, setOperation] = React.useState('');
  const [ReadFromNextColCell, setReadFromNextColCell] = React.useState('');
  const [SearchValue, setSearchValue] = React.useState('');
  const [SheetName, setSheetName] = React.useState('');

  //validation function
  const [validationBasedOn, setvalidationBasedOn] = React.useState(false);
  const [validationCheckIn, setvalidationCheckIn] = React.useState(false);
  const [validationOperation, setvalidationOperation] = React.useState(false);
  const [validationSearchValue, setvalidationSearchValue] =
    React.useState(false);

  // const [validationCellOrHeader, setvalidationCellOrHeader] = React.useState(false);
  // const [validationCellOrHeaderValue, setvalidationCellOrHeaderValue] = React.useState(false);
  // const [validationReadFromNextColCell, setvalidationReadFromNextColCell] = React.useState(false);
  // const [validationSheetName, setvalidationSheetName] = React.useState(false);

  const [validateCount, setValidateCount] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const id = open ? 'simple-popover' : undefined;

  //Get Data from database through api
  const GetFileReadData = () => {
    //// debugger;;
    fetch('https://localhost:7056/api/FileRead')
      .then((res) => res.json())
      .then((result) => {
        result.map((res) => {
          res['id'] = res.id;
        });
        //send the list of data
        setRows(result);
      });
  };

  //Post Data to database through api
  const SaveFileReadData = async (fileReadModel) => {
    //// debugger;;
    const res = await axios.post(
      'https://localhost:7056/api/FileRead',
      fileReadModel
    );
    return res.data;
  };

  //Update Data to database through api
  const UpdateFileReadDate = async (fileReadModel) => {
    //// debugger;;
    const res = await axios.put(
      'https://localhost:7056/api/FileRead',
      fileReadModel
    );
    return res.data;
  };

  //Delete Data from database through api
  const DeleteFileReadData = async (fileReadModel) => {
    // debugger;;
    const res = await axios.delete(
      `https://localhost:7056/api/FileRead/${fileReadModel.id}`
    );
    return res.data;
  };

  //Insert Data
  const submitHandler = () => {
    fileReadModel.cellOrHeader = CellOrHeader;
    fileReadModel.cellOrHeaderValue = CellOrHeaderValue;
    fileReadModel.readFromNextColCell = ReadFromNextColCell;
    fileReadModel.sheetName = SheetName;

    if (Validation(BasedOn, CheckIn, Operation, SearchValue)) {
      fileReadModel.basedOn = BasedOn;
      fileReadModel.checkIn = CheckIn;
      fileReadModel.operation = Operation;
      fileReadModel.searchValue = SearchValue;

      console.log('insert', fileReadModel);
      const response = SaveFileReadData(fileReadModel);
      response
        .then((save) => {
          //window.alert('Insert Successfully done!!');
          msgDialog('Insert Successfully done!!');
          clearData();
          handleClose();
          GetFileReadData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //Edit Data
  const EditHandler = (param) => {
    // debugger;;
    alert(param.id);
    setRow(param);
    setBasedOn(param.basedOn);
    setCheckIn(param.checkIn);
    setOperation(param.operation);
    setSearchValue(param.searchValue);
    setCellOrHeader(param.cellOrHeader);
    setCellOrHeaderValue(param.cellOrHeaderValue);
    setReadFromNextColCell(param.readFromNextColCell);
    setSheetName(param.sheetName);
    fileReadModel.id = param.id;

    setOpen(true);
  };

  //Update data
  const UpdateHandler = () => {
    // debugger;;
    alert(fileReadModel.id);
    console.log('update');
    fileReadModel.cellOrHeader = CellOrHeader;
    fileReadModel.cellOrHeaderValue = CellOrHeaderValue;
    fileReadModel.readFromNextColCell = ReadFromNextColCell;
    fileReadModel.sheetName = SheetName;
    if (Validation(BasedOn, CheckIn, Operation, SearchValue)) {
      fileReadModel.basedOn = BasedOn;
      fileReadModel.checkIn = CheckIn;
      fileReadModel.operation = Operation;
      fileReadModel.searchValue = SearchValue;

      console.log('update', fileReadModel);
      const response = UpdateFileReadDate(fileReadModel);
      response
        .then((update) => {
          clearData();
          handleClose();
          //window.alert('Update Successfully done!!');
          msgDialog('Update Successfully done!!');
          GetFileReadData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //delete data
  const deleteHandleClose = () => {
    console.log('delete data:', row);
    DeleteFileReadData(row).then((del) => {
      GetFileReadData();
      clearData();
      //window.alert('Delete Successfully done!!');
      msgDialog('Delete Successfully done!!');
      dialogHandleClose();
    });
  };

  //clear all data
  const clearData = () => {
    row.id = 0;
    fileReadModel.id = 0;

    //validation
    setvalidationBasedOn(false);
    setvalidationCheckIn(false);
    setvalidationSearchValue(false);
    setvalidationOperation(false);

    //data
    setBasedOn('');
    setCheckIn('');
    setOperation('');
    setSearchValue('');
    setCellOrHeader('');
    setCellOrHeaderValue('');
    setReadFromNextColCell('');
    setSheetName('');

    //set validate counter
    setValidateCount(0);
  };

  //set validation
  const Validation = (BasedOn, CheckIn, Operation, SearchValue) => {
    // debugger;;
    if (
      BasedOn == '' &&
      CheckIn == '' &&
      Operation == '' &&
      SearchValue == ''
    ) {
      setvalidationBasedOn(true);
      setvalidationCheckIn(true);
      setvalidationOperation(true);
      setvalidationSearchValue(true);
      setValidateCount(++i);
      return false;
    } else if (BasedOn == '') {
      setvalidationBasedOn(true);
      setValidateCount(++i);
      return false;
    } else if (CheckIn == '') {
      setvalidationCheckIn(true);
      setValidateCount(++i);
      return false;
    } else if (Operation == '') {
      setvalidationOperation(true);
      setValidateCount(++i);
      return false;
    } else if (SearchValue == '') {
      setvalidationSearchValue(true);
      setValidateCount(++i);
      return false;
    } else {
      setValidateCount(0);
      return true;
    }
  };

  //open Modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  //close modal
  const handleClose = () => {
    setOpen(false);
    clearData();
  };

  //Dialog Modal
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const dialogHandleClose = () => {
    // debugger;;
    setdialogOpen(false);
    setMsgOpen(false);
  };
  const dialogHandleOpen = (param) => {
    deleteHandler(param);
    setdialogOpen(true);
  };

  const deleteHandler = (param) => {
    setRow(param);
  };

  /*****msg dialog*****/
  const [msg, setMsg] = React.useState('');
  const [msgOpen, setMsgOpen] = React.useState(false);
  const msgDialog = (param) => {
    // debugger;;
    setMsg(param);
    setMsgOpen(true);
  };

  /*****msg dialog*****/

  //on input change
  const CellOrHeaderValueInputChange = (val) => {
    setCellOrHeaderValue(val);
    // if(val=="" || val==0){
    //   setvalidationCellOrHeaderValue(true);
    //     setValidateCount(++i);
    // }
    // else
    // {
    //   setvalidationCellOrHeaderValue(false);
    //     setValidateCount(++i);
    //     setCellOrHeaderValue(val);
    // }
  };
  const SearchValueInputChange = (val) => {
    if (val == '') {
      setvalidationSearchValue(true);
      setValidateCount(++i);
    } else {
      setvalidationSearchValue(false);
      setValidateCount(++i);
      setSearchValue(val);
    }
  };
  const SheetNameInputChange = (val) => {
    setSheetName(val);
    // if(val===''){
    //   setvalidationUserName(true);
    //     setValidateCount(++i);

    // }
    // else
    // {
    //   setvalidationUserName(false);
    //     setValidateCount(++i);
    //     setBasedOn(val);
    // }
  };

  //on dropdown change
  const BasedOnChange = (val) => {
    if (val == '' || val == 0) {
      setvalidationBasedOn(true);
      setValidateCount(++i);
    } else {
      setvalidationBasedOn(false);
      setValidateCount(++i);
      setBasedOn(val);
    }
    //setBasedOn(val);
  };

  const CheckInOnChange = (val) => {
    if (val == '' || val == 0) {
      setvalidationCheckIn(true);
      setValidateCount(++i);
    } else {
      setvalidationCheckIn(false);
      setValidateCount(++i);
      setCheckIn(val);
    }
    //setCheckIn(val);
  };
  const CellOrHeaderOnChange = (val) => {
    setCellOrHeader(val);
    // if(val=="" || val==0){
    //   setvalidationCellOrHeader(true);
    //     setValidateCount(++i);

    // }
    // else
    // {
    //   setvalidationCellOrHeader(false);
    //     setValidateCount(++i);
    //     setCellOrHeader(val);
    // }
  };
  const OperationOnChange = (val) => {
    if (val == '' || val == 0) {
      setvalidationOperation(true);
      setValidateCount(++i);
    } else {
      setvalidationOperation(false);
      setValidateCount(++i);
      setOperation(val);
    }
  };
  const ReadFromNextColCellOnChange = (val) => {
    setReadFromNextColCell(val);
    // if(val=="" || val==0){
    //   setvalidationReadFromNextColCell(true);
    //     setValidateCount(++i);

    // }
    // else
    // {
    //   setvalidationReadFromNextColCell(false);
    //     setValidateCount(++i);
    //     setReadFromNextColCell(val);
    // }
  };

  const columns = [
    { field: 'basedOn', headerName: 'Based On', width: 180, editable: true },
    { field: 'checkIn', headerName: 'CheckIn', width: 180, editable: true },
    {
      field: 'cellOrHeader',
      headerName: 'Cell Or Header',
      width: 180,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      flex: 1,
      disableClickEventBubbling: true,
      getActions: (params) => [
        // <IconButton
        //   className="link-tool"
        //   //onClick={() => viewHandleOpen(params)}
        // >
        //   <RemoveRedEyeIcon />
        // </IconButton>,
        <IconButton
          className="link-tool"
          onClick={() => EditHandler(params.row)}
        >
          <EditIcon />
        </IconButton>,
        <IconButton
          className="link-tool"
          onClick={() => dialogHandleOpen(params.row)}
        >
          <DeleteIcon />
        </IconButton>,
      ],
    },
  ];
};

export default Step4Service;
