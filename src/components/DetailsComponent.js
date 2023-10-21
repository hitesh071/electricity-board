import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

const DetailsComponent = () =>{
 
    const {state} = useLocation();
    return (
        <div style={{"alignItems":"center"}}> 
        <div style={{margin:"20px", "fontSize":"18px", "fontWeight":"500"}}>Connection Details of {state?.applicantName}</div>
             <table>
               <tr>
                <td className='td'>Applicant Name</td>
                <td>{state?.applicantName}</td>
               </tr>
               <tr>
                <td>Gender</td>
                <td>{state?.gender}</td>
               </tr>
               <tr>
                <td>District</td>
                <td>{state?.district}</td>
               </tr>
               <tr>
                <td>State</td>
                <td>{state?.state}</td>
               </tr>
               <tr>
                <td>Pincode</td>
                <td>{state?.pincode}</td>
               </tr>
               <tr>
                <td>ownership</td>
                <td>{state?.ownership}</td>
               </tr>
               <tr>
                <td>Govenment ID Type</td>
                <td>{state?.govtIdType}</td>
               </tr>
               <tr>
                <td>Id Number</td>
                <td>{state?.idNumber}</td>
               </tr>
               <tr>
                <td>Category</td>
                <td>{state?.category}</td>
               </tr>
               <tr>
                <td>Load Applied(KV)</td>
                <td>{state?.loadApplied}</td>
               </tr>
               <tr>
                <td>Date Of Application</td>
                <td>{state?.dateOfApplication}</td>
               </tr>
               <tr>
                <td>Date Of Approval</td>
                <td>{state?.dateOfApproval}</td>
               </tr>
               <tr>
                <td>Modified Date</td>
                <td>{state?.modifiedDate}</td>
               </tr>
               <tr>
                <td>Status</td>
                <td>{state?.status}</td>
               </tr>
               <tr>
                <td>Reviewer Id</td>
                <td>{state?.reviewerId}</td>
               </tr>
               <tr>
                <td>Reviewer Name</td>
                <td>{state?.reviewerName}</td>
               </tr>
               <tr>
                <td>Reviewer Comments</td>
                <td>{state?.reviewerComments}</td>
               </tr>
             </table>
        </div>
    )
}
export default DetailsComponent;