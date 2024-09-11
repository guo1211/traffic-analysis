import { Chart } from "@antv/g2";
import React from 'react'

// const chart = new Chart({ container: "container" });

// chart.options({
//   type: "view",
//   autoFit: true,
//   data: [
//     { year: "1991", value: 3 },
//     { year: "1992", value: 4 },
//     { year: "1993", value: 3.5 },
//     { year: "1994", value: 5 },
//     { year: "1995", value: 4.9 },
//     { year: "1996", value: 6 },
//     { year: "1997", value: 7 },
//     { year: "1998", value: 9 },
//     { year: "1999", value: 13 },
//   ],
//   encode: { x: "year", y: "value" },
//   scale: { x: { range: [0, 1] }, y: { domainMin: 0, nice: true } },
//   children: [
//     { type: "line", labels: [{ text: "value", style: { dx: -10, dy: -12 } }] },
//     { type: "point", style: { fill: "white" }, tooltip: false },
//   ],
// });

// export {
//     chart
// }

class ChartComponent extends React.Component {  
  componentDidMount() {  
    const chart = new Chart({ container: "container" });

    chart.options({
      type: "view",
      autoFit: true,
      height: 200,
      data: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
      ],
      encode: { x: "year", y: "value" },
      scale: { x: { range: [0, 1] }, y: { domainMin: 0, nice: true } },
      children: [
        { type: "line", labels: [{ text: "value", style: { dx: -10, dy: -12 } }] },
        { type: "point", style: { fill: "white" }, tooltip: false },
      ],
    });

    // chart.
    //   encode('shape', 'area'),
    chart.line().encode('shape', 'area');


    chart.render()
  }  
  
  componentWillUnmount() {  
    // 清理工作，比如销毁图表实例  
  }  
  
  render() {  
    return <div ref={this.lineRef} id="container"/>;  
  }  
  
  // // 使用createRef创建引用  
  lineRef = React.createRef();  
}  
  
export default ChartComponent;