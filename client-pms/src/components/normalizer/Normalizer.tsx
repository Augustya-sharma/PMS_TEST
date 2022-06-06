import * as React from 'react';
import { styled } from "@mui/material/styles";
import HeaderTabs from './HeaderTabs';
import Table2 from './Table2';
import RTrecommandation from './NormalizerTrainingRecommendation';
import Checkboxs from './NormalizerOtherRecommendation';
import Footerbuttons from './Footerbuttons';
import Performancefeedbacksummary from './Performancefeedbacksummary';
import AppraiserOtherRecommendations from './AppraiserOtherRecommendations';
import { Navcancelbuttons } from './Navcancelbuttons';
import ReviewerOtherRecommendations from './ReviewerOtherRecommendation';
import ReviewerTraining from './ReviewerTraining';
import Table1 from './AppraiserArea';
import AppraiserArea from './AppraiserArea';
import ReviewerArea from './ReviewerArea';
import NormalizerOtherComments from './NormalizerOtherRecommendation';
import NTrainingComments from './NormalizerTrainingRecommendationComments';
import NormalizerRating from "./Rating/ReviewerRating";


const Container1 = styled("div")({
    // position: "relative",
    background: "#fff",
    // width: "96%",
    // height: "1907px",
    marginLeft: "25px",
    marginRight:"25px",
    marginTop: "10px",
    textTransform: 'none'

});
const Container2 = styled("div")({
    // marginLeft: "25px",
    // marginRight:"25px",
    background: "#F2F9FA",
    // width: "100%",
    //height: "1280px",
    // marginLeft: "25px",
    marginTop: "0px",
});

const Footer = styled("div")({
    // marginLeft: "450px",
    paddingTop: "200px",
    paddingBottom: "45px",
  });
const Normalizer = (props:any) => {
    const {employeeData, trainingData,ratingData,otherData} = props
    console.log(employeeData, 'dddd')
    const checkIfRejected = (value: string) => {
        if (employeeData !== undefined ) {
            return employeeData.data.normalizer.normalizer_rejected_value.filter((j:any) => j.value === value)[0].isChecked
        }
    }
    
    return (
        <div style={{backgroundColor:"#F1F1F1"}}>
            <Container1>
                
            {employeeData && checkIfRejected('rating') && <NormalizerRating />}
               {employeeData && checkIfRejected('rating') &&<Navcancelbuttons/>}
                  <Container2>
                    <Performancefeedbacksummary  employeeData={employeeData} />
                    {employeeData && checkIfRejected('training_recommendation(s)') &&<Table2 />}
                    {employeeData && checkIfRejected('training_recommendation(s)') &&<NTrainingComments />}
                    {/*{employeeData && checkIfRejected('training_recommendation(s)') &&<ReviewerTraining/>}*/}
                    {/*{employeeData && checkIfRejected('training_recommendation(s)') &&<RTrecommandation training1Data = {trainingData}/>}*/}
                    
                    {/* <Table2 />
                    <ReviewerTraining/>
                    <RTrecommandation training1Data = {trainingData}/> */}
                    
                    
                    
                    {employeeData && checkIfRejected('other_recommendation(s)') &&<AppraiserOtherRecommendations />}
                    {employeeData && checkIfRejected('training_recommendation(s)') &&<NormalizerOtherComments />}
                    {/*{employeeData && checkIfRejected('other_recommendation(s)') &&<ReviewerOtherRecommendations />}*/}
                    {/*{employeeData && checkIfRejected('other_recommendation(s)') &&<Checkboxs other1Data = {otherData}/>}*/}

                    {/* <ReviewerOtherRecommendations />
                    <ReviewerOtherRecommendations />
                    <Checkboxs other1Data = {otherData}/> */}

                    <Footer>
                    <Footerbuttons />
                    </Footer>
                </Container2>
               
            </Container1>
        </div>
    )
}

export default Normalizer;
