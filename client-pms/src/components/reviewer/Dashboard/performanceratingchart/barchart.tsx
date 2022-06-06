import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Stack } from "@mui/material";
import {useGetEmployeeQuery} from "../../../../service";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 12,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ffffff",

    borderRadius: 1,
    height: "20px",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: "#C00000",
  },
}));

const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 12,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ffffff",

    borderRadius: 1,
    height: "20px",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: "#EE8A1E",
  },
}));

const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 12,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ffffff",

    borderRadius: 1,
    height: "20px",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: "#00B050",
  },
}));

const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 12,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ffffff",

    borderRadius: 1,
    height: "20px",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: "#00B0F0",
  },
}));

const BorderLinearProgress4 = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 12,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ffffff",

    borderRadius: 1,
    height: "20px",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: "#004C75",
  },
}));

const Para = styled("div")({
  display: "flex",
});

const  BarChartUsing = () => {
  const {data, isLoading} = useGetEmployeeQuery('all')
  console.log(data, 'data')

  const checklengthinRange = (min:number, max:number) => {
    return data.data.filter((item:any) => {
      console.log(item.appraisal.appraiser_rating, 'appraisal_rating')
      return  item.appraisal.appraiser_rating >= min && item.appraisal.appraiser_rating <= max
    }).length * 100 / data.data.length


  }



  if(isLoading) {
    return <p>Loading </p>
  }

    return (
      <>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
          marginTop="40px"
        >
          <div style={{ width: " 50px" }}>
            <BorderLinearProgress variant="determinate" value={checklengthinRange(1,1.9)} />

            <span>
              <p
                style={{
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#333333",
                  opacity: "75%",
                }}
              >
                1-1.9
              </p>
            </span>
          </div>

          <div style={{ width: " 50px" }}>
            <BorderLinearProgress1 variant="determinate" value={checklengthinRange(2,2.9)} />
            <span>
              <p
                style={{
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#333333",
                  opacity: "75%",
                }}
              >
                2-2.9
              </p>
            </span>
          </div>

          <div style={{ width: " 100px" }}>
            <BorderLinearProgress2 variant="determinate" value={checklengthinRange(3,3.9)} />
            <span>
              <p
                style={{
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#333333",
                  opacity: "75%",
                }}
              >
                3-3.9
              </p>
            </span>
          </div>

          <div style={{ width: " 50px" }}>
            <BorderLinearProgress3 variant="determinate" value={checklengthinRange(4,4.9)} />
            <span>
              <p
                style={{
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#333333",
                  opacity: "75%",
                }}
              >
                4-4.9
              </p>
            </span>
          </div>
          <div style={{ width: " 50px" }}>
            <BorderLinearProgress4 variant="determinate" value={checklengthinRange(5, 5)} />
            <span>
              <p
                style={{
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#333333",
                  opacity: "75%",
                }}
              >
                5
              </p>
            </span>
          </div>
        </Stack>
      </>
    );

}
export default  BarChartUsing
