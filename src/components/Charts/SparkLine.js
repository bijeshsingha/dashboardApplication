import React, {memo} from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, type, data, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      valueType="Numeric"
      border={{color: currentColor, width:2}}
      dataSource={data}
      fill={color}
      xName='xval'
      yName='yval'
      type="Line"
      tooltipSettings={{
            visible: true,
            // eslint-disable-next-line no-template-curly-in-string
            format: '200${xval} : ${yval}k',
            trackLineSettings:{
              visible:true
            }
        }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  );
};

export default memo(SparkLine);
