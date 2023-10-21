import React,{ useState, useEffect } from 'react';
import TableData from '../data/data.json';
import DataTable from 'react-data-table-component';
import "./style.css";
import { useNavigate } from "react-router-dom";
const TableComponent = () => {
    
const [tableData, setTableData] = useState();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState("none");
  const [toDate, setToDate] = useState("none");

   const onDateChange = (event) => {
   if(event.target.name==="fromDate"){
    setFromDate(event.target.value);
   }
   if(event.target.name==="toDate"){
    setToDate(event.target.value);
   }
   };

  const viewDetails = (e,record)=>{
    e.preventDefault();
    console.log(record);
    navigate('/details',{state: record});
  }

  console.log(fromDate,toDate);
    useEffect(() => {
        if (TableData?.data) {
            let tempData = TableData.data;
            if(searchText){
                 tempData = TableData.data.filter(record => record.applicantName.toLowerCase().includes(searchText.toLowerCase()));
              }
          let electricityList = [];
          tempData.map((record, index) => {
            let option = {
              id: index + 1,
              applicantName: record.applicantName,
              gender: record.gender,
              district: record.district,
              state:record.state,
              pincode:record.pincode,
              ownership:record.ownership,
              govtIdType : record.govtIdType,
              idNumber: record.idNumber,
              category: record.category,
              loadApplied: record.loadApplied,
              dateOfApplication:record.dateOfApplication,
              dateOfApproval : record.dateOfApproval,
              modifiedDate:record.modifiedDate,
              status:record.status,
              reviewerId:record.reviewerId,
              reviewerName:record.reviewerName,
              reviewerComments:record.reviewerComments,
              view: <button onClick={(e)=>viewDetails(e,record)}>View</button>,
              edit: <button>Edit</button>
            };
            electricityList.push(option);
          });
          setTableData(electricityList);
        }
      }, [searchText]);
      

    const columns = [
        {name:'ID',selector:row=>row.id},
        {name:'Applicant Name',selector:row=>row.applicantName},
        {name:'Gender',selector:row=>row.gender},
        {name:'District',selector:row=>row.district},
        {name:'State',selector:row=>row.state},
        {name:'Pincode',selector:row=>row.pincode},
        {name:'Ownership',selector:row=>row.ownership},
        {name:'Gov Id Type',selector:row=>row.govtIdType},
        {name:'ID Number',selector:row=>row.idNumber},
        {name:'Category',selector:row=>row.category},
        {name:'Load(KV)',selector:row=>row.loadApplied},
        {name:'Date of Application',selector:row=>row.dateOfApplication},
        {name:'Date of Approval',selector:row=>row.dateOfApproval},
        {name:'Modified Date',selector:row=>row.modifiedDate},
        {name:'Status',selector:row=>row.status},
        {name:'Reviewer Id',selector:row=>row.reviewerId},
        {name:'Reviewer Name',selector:row=>row.reviewerName},
        {name:'Reviewer Commentst',selector:row=>row.reviewerComments},
        {name:'View',selector:row=>row.view },
        {name:'Edit',selector:row=>row.edit }
    ]
    const handleChange = e => {
        console.log(e.target.value)
        setSearchText(e.target.value);
      };
     
  return (
    
    <div> 
        <div style={{"marginTop":"20px","marginBottom":"20px",display:"flex",flexDirection:"row","justifyContent": "space-between","alignItems": "center"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
         <div style={{"marginRight":"8px"}}>Search User :</div>
        
        <input
          type="text"
          name="Search"
          value={searchText}
          onChange={handleChange}
          placeholder="Search by user"
          style={{ minHeight:"20px"}}
        />
        </div>
        <div style={{display:"flex",flexDirection:"row",alignItems: "center"}}>
        From Date : <input type="date" id="fromDate" name="fromDate"  style={{ minHeight:"20px", marginRight:"20px",marginLeft:"8px"}} onChange={onDateChange}></input>
        To Date : <input type="date" id="toDate" name="toDate"  style={{ minHeight:"20px",marginLeft:"8px"}} onChange={onDateChange}></input>
        
        </div>
      </div>

    <DataTable
        title="Electricity Board"
        columns={columns}
        data={tableData} 
        responsive="true"
        striped="true"
        highlightOnHover="true"
        pagination="true"
       
      />

    </div>
  );
};
export default TableComponent;
