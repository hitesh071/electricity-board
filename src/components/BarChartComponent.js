import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const BarChartComponent = () =>{
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        title: {
          text: "Monthly Connections"
        },
        data: [{
          type: "column",
          dataPoints: [
            { label: "Jan",  y: 16  },
            { label: "Feb", y: 15  },
            { label: "Mar", y: 25  },
            { label: "Apr",  y: 30  },
            { label: "May",  y: 28  },
            { label: "Jun",  y: 10  },
            { label: "Jul", y: 15  },
            { label: "Aug", y: 25  },
            { label: "Sep",  y: 30  },
            { label: "Oct",  y: 28  },
            { label: "Nov",  y: 28  },
            { label: "Dec",  y: 10  },
          ]
        }]
      }

    return(
        <div style={{width:"500px",margin:"auto"}}>
            <CanvasJSChart options = {options}/>
        </div>
    );
}
export default BarChartComponent;