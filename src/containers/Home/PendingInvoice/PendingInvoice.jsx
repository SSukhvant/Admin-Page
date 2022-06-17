import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './PendingInvoice.scss';
import invoice from '../../../assets/invoice.png';

const PendingInvoice = () => {
  return (
    <div className='app__pending-invoice'>
    <div className='app__pending-invoice-head'>
    <div className='app__pending-invoice-headings'>
      <h2>Pending Invoice</h2>
      <p>Invoices that are currently pending</p>
    </div>
    <div className='app__pending-invoice-btns'>
    <button type='button' className='app__pending-invoice-dots-btn'><BsThreeDotsVertical/></button>
    </div>
    </div>

    <div className='app__pending-invoice-card'>
    {InvoiceList.map((index,key) => {
        return (
            <div className='invoice-card' key={key}>
            <h2>${index.price}</h2>
            <div className='amount-approved'>
            <p>Amount</p>
            <button type='button' className='approved-btn' style={{background:`${index.bgColor}`,border:"none",color:"white",padding:"10px",width:"74px",height:"27px",borderRadius:"2px",display:"flex",justifyContent:"center",alignItems:"center",textTransform:"capitalize"}}>{index.status}</button>
            </div>
            <div className='invoice-profile'>
            <img src={index.invoiceImg} alt="invoice"/>
            <div className='invoice-profile-details'>
            <h4>{index.name}</h4>
            <div className='id-date'>
            <h4>#{index.id}</h4>
            <p>Date: {index.date}</p>
            </div>
            </div>
            </div>
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default PendingInvoice;

const InvoiceList = [
    {
        price:"137.00",
        status:"approved",
        bgColor:"#15c15d",
        invoiceImg:`${invoice}`,
        name:"Erin Gonzales",
        id:"5331",
        date:"25 May"
    },
    {
        price:"137.00",
        status:"pending",
        bgColor:"#14a9f9",
        invoiceImg:`${invoice}`,
        name:"Erin Gonzales",
        id:"5331",
        date:"25 May"
    },
    {
        price:"137.00",
        status:"pending",
        bgColor:"#14a9f9",
        invoiceImg:`${invoice}`,
        name:"Erin Gonzales",
        id:"5331",
        date:"25 May"
    }
]
