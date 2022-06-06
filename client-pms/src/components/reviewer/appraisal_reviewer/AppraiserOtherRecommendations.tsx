import React from 'react';
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import { useReviewerContext } from '../../../context/reviewerContextContext';

const Typo7 = styled("div")({
    marginLeft: "25px",
    // position: "absolute",
    marginTop: '290x',
    color: '#008E97',
    fontSize: '13px',
    opacity: 0.85
});
const Typos1 = styled("div")({
    // marginLeft: "25px",
    // position: "absolute",
    //marginTop: '15px',
    fontSize: '13px',
    color: '#333333',
    opacity: '0.7'
});
const Typos2 = styled("div")({
    // marginLeft: "250px",
    // position: "absolute",
    // marginTop: '325px',
    fontSize: '13px',
    color: '#333333',
    opacity: '0.7'
});

const AppraiserOtherRecommendations = (props:any) =>  {
     // @ts-ignore
    const { appraiserOtherRecommendation, setAppraiserOtherRecommendation} = useReviewerContext()
    return (
        <div>
            <Typo7>
                <p>Appraiser Other Recommendation(s)</p>
            </Typo7>
            <Stack
                direction="row"
                alignItems="center"
                marginLeft='25px'
                marginTop='15px'
                spacing={25}
            >
                {appraiserOtherRecommendation && appraiserOtherRecommendation.map((i:any,index:any)=> {
                    return (
                          <Typos1>{i.name.name}</Typos1>
                    )
                })}
              
               
            </Stack>
        </div>
    )
}

export default AppraiserOtherRecommendations;