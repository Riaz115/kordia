import React , {useState} from 'react'
import TableMui from '../../mui/TableMuiCustom'
import { Typography } from '@mui/material'
import Paginate from '../../Components/Paginate'
const EventPaymentHistory = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
  // Define new table headers and rows
  const headers = [
    { key: 'eventName', label: 'Event Name' },
    { key: 'organizerName', label: 'Organizer Name' },
    { key: 'paymentDateTime', label: 'Payment Date and Time' },
    { key: 'paymentType', label: 'Payment Type' },
    { key: 'amount', label: 'Amount' },
    { key: 'paymentStatus', label: 'Payment Status' },
    { key: 'eventStatus', label: 'Event Status' },
  ];

  const rows = [
    {
      eventName: "Summer Jazz Festival mokkkkk",
      organizerName: "Event organizer name or username",
      paymentDateTime: "15/12/24, 04:30 PM",
      paymentType: "Advance",
      amount: "$700",
      paymentStatus: "Paid",
      eventStatus: "Ongoing",
    },
    {
      eventName: "Summer Jazz Festival mokkkkk",
      organizerName: "Event organizer name or username",
      paymentDateTime: "15/12/24, 04:30 PM",
      paymentType: "Due Payment",
      amount: "$700",
      paymentStatus: "Refunded",
      eventStatus: "Cancel",
    },
    {
      eventName: "Summer Jazz Festival mokkkkk",
      organizerName: "Event organizer name or username",
      paymentDateTime: "15/12/24, 04:30 PM",
      paymentType: "Due Payment",
      amount: "$700",
      paymentStatus: "Refunded",
      eventStatus: "Completed",
    },
    // ... more rows as needed ...
    ];

  return (
    <div className="container">
      <div className="row pt-3">
        <div className="table">
          <TableMui
            th={headers.reduce((acc, header) => {
              acc[header.key] = header.label;
              return acc;
            }, {})}
            td={rows}
            customFields={[
              {
                name:"amount",
                data: (value) => {
                  return <Typography sx={{ fontSize: "13px", color: '#FF0004', fontFamily: 'Poppins' }}>{value}</Typography>;
                }
              },
              {
                name: "eventStatus",
                data: (value) => {
                  let backgroundColor;
                  let color;
                  switch (value.toLowerCase()) {
                    case "pending":
                      backgroundColor = "#ffffb9";
                      color ='#a0a00c'
                      break;
                    case "cancel":
                      backgroundColor = "#f2cccc";
                      color ='#800000'
                      break;
                    case "completed":
                      backgroundColor = "#d0efcd";
                      color ='#008000'
                      break;
                    case "ongoing":
                      backgroundColor = "#dce7ff";
                      color ='#5088FF'
                      break;
                    default:
                      backgroundColor = "transparent";
                  }
                  return (
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color,
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        backgroundColor,
                        padding: '3px',
                        borderRadius: '25px',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {value}
                    </Typography>
                  );
                },
              },
              
           
              {
                name: "paymentStatus",
                data: (value) => {
                  let backgroundColor;
                  let color;
                  switch (value.toLowerCase()) {
                   
                    case "refunded":
                      backgroundColor = "#e9e9e9";
                      color ='#7C7C7C'
                      break;
                    case "paid":
                      backgroundColor = "#d0efcd";
                      color ='#008000'
                      break;
                    
                    default:
                      backgroundColor = "transparent";
                  }
                  return (
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color,
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        backgroundColor,
                        padding: '3px',
                        borderRadius: '25px',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {value}
                    </Typography>
                  );
                },
              },
              {
                  name:'receipt',
                  data: (value) => {
                      return <Typography sx={{
                          backgroundColor:'#e9e9e9', 
                          color:"#002B46"  ,
                          fontWeight: 600,
                          fontFamily: 'Poppins',
                          padding: '3px',
                          borderRadius: '25px',
                          alignItems: 'center',
                          display: 'flex',
                          fontSize:'13px',
                          justifyContent: 'center',
                      }} >
                          <MdOutlineFileDownload size={20} style={{ marginRight: '5px' }} />
                          {value}
                      </Typography>
                  }
              },
            ]}
            styleTableTh={{ backgroundColor: '#003a5e', color: '#FF9700', fontWeight: 400, fontSize: 20, fontFamily: 'Bebas Neue' }}
          />
        </div>
        <div className="pagination pt-4 justify-content-end">
          <Paginate totalItems={totalItems} itemsPerPage={itemsPerPage} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default EventPaymentHistory;