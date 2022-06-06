import * as React from 'react';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box'
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import { useReviewerContext } from '../../context/reviewerContextContext';
import { useNormalizerContext } from '../../context/normalizerContext';

const Contain = styled("div")({
  marginLeft: "25px",
  marginRight: "20px",
  marginTop: '10px',
  width: '1200',
  paddingTop: '0px'

});
const Tf = styled('div')({
  fontSize: '13x',

  backgroundColor: '#FFFFFF',
  '& .MuiInputLabel-root': {
    color: '#333333',
    opacity: '0.5',
    fontSize: '13px',
    fontWeight: '400',
    textTransform: 'none',
  },
});
const I1 = styled("div")({
  fontSize: '14px',
  color: '#008E97',
  opacity: 0.84
});
const ROrecommendation = styled("div")({
  marginLeft: "25px",
  marginTop: '25px',
  color: '#008E97',
  fontSize: '13px',
  opacity: 0.85,

});
const Labels = styled("div")({
  fontSize: '14px',
  color: 'rgb(0 142 151/84%)',
  // opacity: 0.84,
  marginLeft: '5px'
});
const NormalizerOtherComments = (props: any) => {
  const { other1Data } = props
  // const [users, setUsers] = useState<any>([])
  //@ts-ignore
  const { otherRecommendationComments, setOtherRecommendationComments } = useNormalizerContext();
  const [ otherRComments, setOtherRComments ] = useState('');


  useEffect(() => {
    //@ts-ignore
    // console.log(checkboxIdHandler(checkboxHandler(users)))
    setOtherRComments(otherRecommendationComments)
  }, [otherRecommendationComments]);

  const handleOtherCommentsChange = (e: any) => {
    console.log(e);
    setOtherRecommendationComments(e.target.value)
}   



  return (
    <div>
      <ROrecommendation>
        Normalizer Other Recommendation(s) Comments
      </ROrecommendation>
      <Contain>

        <Box>
          <Tf>
            <TextField fullWidth
              multiline rows={2}
              size='small'
              name="comments"
              value={otherRComments || ""}
              onChange={e => handleOtherCommentsChange(e)} />
          </Tf>
        </Box>
      </Contain>
    </div>
  );
}

export default NormalizerOtherComments
