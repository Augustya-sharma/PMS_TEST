import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { TextField } from "@mui/material";
import Blueadd from './Reviewericons/Blueadd.svg';
import Blueminus from './Reviewericons/Blueminus.svg';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveIcon from '@mui/icons-material/Remove';
import { useReviewerContext } from "../../context/reviewerContextContext";
import { useNormalizerContext } from '../../context/normalizerContext';


const Contain = styled("div")({
    marginRight: "20px",
    marginLeft: "25px",
    marginTop: "10px",

});
const TrainingRecommendations = styled("div")({
    marginLeft: "25px",
    marginTop: '10px',
    color: '#008E97',
    fontSize: '13px',
    opacity: 0.85
});

const Tfbox = styled('div')({
    width: '400px',
    backgroundColor: '#FFFFFF',
    '& .MuiInputLabel-root': {
        color: '#333333',
        opacity: '0.5',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
    },
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
const Containers = styled('div')({
    marginTop: 18,
    marginLeft: 12,
    marginRight: 16
});
const Griditems1 = styled('div')({
    width: "33%", border: "1px solid #ddd", height: 75,
});
const Griditems2 = styled('div')({
    width: "33%", border: "1px solid #ddd", height: 75,
});
const Griditems3 = styled('div')({
    width: "33%", border: "1px solid #ddd", height: 75,
});

const Typo1 = styled("div")({

    marginTop: "-15px",
    fontSize: '13px',
    opacity: '0.5',
    fontWeight: '400',
    color: '#333333'

});

const NTrainingComments = (props: any) => {
    const { training1Data } = props

    // @ts-ignore
    const { trainingRecommendationComments, setTrainingRecommendationComments } = useNormalizerContext();
    const [ otherTrainingComments, setOtherTrainingComments ] = useState('');

    useEffect(() => {
        //@ts-ignore
        // console.log(checkboxIdHandler(checkboxHandler(users)))
        setOtherTrainingComments(trainingRecommendationComments)
      }, [trainingRecommendationComments]);
    
      const handleTrainingCommentsChange = (e: any) => {
        console.log(e);
        setTrainingRecommendationComments(e.target.value)
    }   

    return (
        <div>
            <TrainingRecommendations>
                Normalizer Training Recommendation(s) Comments
            </TrainingRecommendations>
            <Contain>
                <Box>
                    <Tf>
                        <TextField fullWidth
                            multiline rows={2}
                            size='small'
                            name="comments"
                            value={otherTrainingComments || ""}
                            onChange={e => handleTrainingCommentsChange(e)} />
                    </Tf>
                </Box>
            </Contain>
        </div>
    );
}

export default NTrainingComments

