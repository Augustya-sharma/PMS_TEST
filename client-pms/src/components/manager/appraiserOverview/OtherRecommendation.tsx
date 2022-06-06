import * as React from 'react';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box'
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import {useAppraisalContext} from "../../../context/appraiserOverviewContext";



const Contain = styled("div")({
  marginLeft: "25px",
  marginRight: "20px",
  marginTop: '10px',
  width: '100%',
  paddingTop: '0px'

});
const Checkcontainer = styled("div")({

  width: '1000',


});
const Labels = styled("div")({
  fontSize: '14px',
  color: 'rgb(0 142 151/84%)',
 // opacity: 0.84,
  marginLeft: '5px'
});
const HRActions = styled("div")({
  marginLeft: "25px",
  marginTop: '25px',
  color: '#008E97',
  fontSize: '13px',
 // opacity: 0.85,

});
const Checkboxs = (props: any) => {
  const { other2Data } = props
  // const [otherRecommendation, setOtherRecommendation] = useState<any>([])
  //@ts-ignore
  const {otherRecommendation,setOtherRecommendation } = useAppraisalContext()



  console.log(otherRecommendation,'``````````````````````````````````````````````````')
  //
  // useEffect(() => {
  //   console.log('useeffect run')
  //   if (other2Data) {
  //     setOtherRecommendation(other2Data.data)
  //   }
  //
  // }, [other2Data])

  const handleOnCheck = (e: any) => {
    const { name, checked } = e.target

    const tempUser = otherRecommendation.map((OtherData: any) => {
      return OtherData._id === name ? { ...OtherData, isChecked: checked } : OtherData
    });
    setOtherRecommendation(tempUser)
    console.log(tempUser, 'temp')

  }
  const checkboxHandler = (checkbox: any[]) => {
    if (checkbox) {
      const res = checkbox.filter((i: any) => {
        return i.isChecked === true;
      });
      return res;
    }
  };

  const checkboxIdHandler = (res: any[]) => {
    if (res) {
      const check = res.map((i: any) => {
        return i._id;
      });
      return check;
    }
  };

  useEffect(() => {

    // console.log(checkboxIdHandler(checkboxHandler(otherRecommendation)))
    //@ts-ignore
    // setOtherRecommendation(checkboxIdHandler(checkboxHandler(otherRecommendation)))
  }, [otherRecommendation])

  return (
    <div>
      <HRActions>
        Other Recommendation(s)
      </HRActions>
      <Contain>
        <Box   >
          {/* <Stack direction="row" spacing={15} sx={{ flexWrap: 'wrap' }} > */}
            {otherRecommendation && otherRecommendation.map((OtherData: any) => {
              return (
                // <Checkcontainer>
                //   <Stack direction="row" spacing={0} >
                //     <input
                //       name={OtherData._id}
                //       checked={OtherData?.isChecked || false}
                //       onChange={handleOnCheck}
                //       type="checkbox" />
                //     <Labels> <label> {OtherData.name}</label>  </Labels>
                //   </Stack>
                // </Checkcontainer>

                <Box >
                  <Box
                 
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      // width: '201px',
                      width:"20%",
                      float: 'left',
                      
                    }}
                  >
                    <input
                      name={OtherData._id}
                      checked={OtherData?.isChecked || false}
                      onChange={handleOnCheck}
                      type="checkbox" />
                    <Labels> <label> {OtherData.name}</label>  </Labels>


                  </Box>

                  </Box>
                // <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                //   <Grid item sx={{ display: 'flex', float: 'right' }}>
                //     <input
                //       name={OtherData._id}
                //       checked={OtherData?.isChecked || false}
                //       onChange={handleOnCheck}
                //       type="checkbox" />
                //     <Labels> <label> {OtherData.name}</label>  </Labels>
                //   </Grid>
                // </Grid>
                // <Box
                //   sx={{
                //     display: "grid",
                //     gridTemplateColumns: "repeat(3, 1fr)",
                //     gridTemplateRows: "repeat(2, 1fr)",
                //     columnGap: 1,
                //     rowGap: 1,
                   
                //     float:'right'

                //   }}
                // >
                //   <input
                //     name={OtherData._id}
                //     checked={OtherData?.isChecked || false}
                //     onChange={handleOnCheck}
                //     type="checkbox" />
                //   <Labels> <label> {OtherData.name}</label>  </Labels>
                // </Box>

                // <div>
                //   <input
                //     name={OtherData._id}
                //     checked={OtherData?.isChecked || false}
                //     onChange={handleOnCheck}
                //     type="checkbox" />
                //   <Labels> <label> {OtherData.name}</label>  </Labels>
                // </div>
              )
            })}
          {/* </Stack> */}


        </Box>
      </Contain>
    </div>
  );
}

export default Checkboxs