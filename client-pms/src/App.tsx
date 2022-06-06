import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import {
    ForgotPassword,
    Login,
    OtherRecommendationEditPage,
    OtherRecommendationPage,
    OtherRecommendationViewPage,
    RatingsPage,
    Register,
    ResetPassword,
    TrainingRecommendationPage,
    TrainingRecommendationUpdatePage,
    Verify,
    RatingUpdatePage,
    CreateTemplatePage,
    CreateMapping,
    ViewTemplate,
    RatingScaleDescriptionPage,

    DashboardM,
    Appraiser,
    CalenderPage,
    FeedBackQuestionnairePage,
    CreateAppraisal,
    FeedBackQuestionnaireViewPage,
    CalendarViewPage,
    CalendarUpdatePage,
    FeedBackQuestionnaireUpdatePage,
    CreateAppraisalCalender,
    ViewObjectiveDescription, EditTemplate,
    AddObjectiveDescription,
    EditObjectiveDescription,
    ReviewerPage, EditViewTemplate, MidYearPAReportPage,
   

} from "./pages";
import {Objective} from "./pages";
import Dashboard from "./components/dashboard/Dashboard";
import Reviewer from './components/reviewer'
import {
    MasterNav,
    PAMaster,
    RatingScaleDescription,
} from "./components";
import Calendar from "./components/calender/Calender";
import Addemployee from "./components/employee/AddEmployee";
import NavBar from "./components/UI/Header";
import RatingScaleDescriptionViewPage from "./pages/ratings/RatingScaleDescriptionViewPage";
import TrainingView from "./pages/recommendation/TrainingRecommendationViewPage";
import RatingScaleUpdatePage from './pages/ratings/RatingScaleUpdatePage';
import ReviewerMain from './components/reviewerMain/Reviewer'

import {
    LOGIN,
    DASHBOARD,
    REGISTER,
    FORGOT_PASSWORD,
    VERIFY,
    RESET_PASSWORD,
    OBJECTIVE,
    ADD_OBJECTIVE_DESCRIPTION,
    VIEW_OBJECTIVE_DESCRIPTION,
    MASTER_NAV,
    CALENDER,
    ADD_EMPLOYEE,
    OTHER_RECOMMENDATION_PAGE,
    OTHER_RECOMMENDATION_EDIT_PAGE,
    RATING_SCALE_DESCRIPTION,
    RATING_SCALE_DESCRIPTION_VIEW_PAGE,
    TRAINING_RECOMMENDATION_PAGE,
    TRAINING_VIEW,
    OTHER_RECOMMENDATION_VIEW_PAGE,
    RATING_UPDATE_PAGE,
    RATINGS_PAGE,
    TRAINING_RECOMMENDATION_UPDATE_PAGE,
    CREATE_TEMPLATE,
    CREATE_MAPPING,
    CREATE_CALENDER,
    VIEW_TEMPLATE,
    RATING_SCALE_DESCRIPTION_UPDATE_PAGE,

    MANAGER, CREATE_APPRAISAL,

    DASHBOARDM,
    APPRAISER,
    FEEDBACK_QUESTIONNAIRE,
    FEEDBACK_QUESTIONNAIRE_VIEW_lIST,
    CALENDER_VIEWPAGE,

    MIDYEAR_PERFORMANCE,
    MIDYEAR_CHECKBOX,
    MIDYEAR_REJECT_RATING,
    MIDYEAR_PA_REPORT,

    CALENDER_UPDATE_PAGE,
    FEEDBACK_QUESTIONNAIRE_UPDATE_PAGE,
    MIDYEAR_REJECT_SAVE,
    MIDYEAR_SUCCESS,
    EDIT_TEMPLATE,
    EDIT_OBJECTIVE_DESCRIPTION,
    REVIEWER_PAGE, EDIT_VIEW_TEMPLATE, REVIEWER, NORMALIZER, NORMALIZER_PAGE,
    VIEW_ALL,
    EDIT_VIEW_ALL,
    ADD_OBJECTIVE_DESCRIPTION_1,
    VIEW_OBJECTIVE_DESCRIPTION_1,
    EDITVIEW_OBJECTIVE_DESCRIPTION_1,
    LEVELS_VIEW_ALL,
    LEVELS_VIEW_ALL_EDIT,
    OBJECTIVE_VIEW_BUTTON

} from "./constants/routes/Routing";
import CreateCalender from "./components/Template/CreateCalender";

import ViewTemplatePage from './pages/template/ViewTemplate';

import Manager from './components/manager/AppraiserOverviewOld';
import AppraiserOverViewPage from './pages/dashboard/AppraiserOverviewPage';
import CalenderViewList from './components/calender/CalenderViewList';


import SolidTalents from './components/solidTalents';
import Appraiser1 from './components/reviewer/appraiser1';

import MidyearPerformance from './components/midyearperformanceappraisal/MidyearPerformance';
import MidyearCheckbox from './components/midyearperformanceappraisal/MidyearCheckbox';
import MidyearRejectRating from './components/midyearperformanceappraisal/MidyearRejectRating';
import MidyearPAreport from './components/midyearperformanceappraisal/midyearPAreport/midYearPAreport/MidyearPAreport';
import MidyearRejectSave from './components/midyearperformanceappraisal/MidyearRejectSave';
import MidyearSuccess from './components/midyearperformanceappraisal/MidyearSuccess';
import Dashboardreview from './components/reviewer/Dashboard/Dashboardreview';

import MyTeamreviewer from './components/Newreviewer/Myteamreviewer';

import NormalizerMain from './components/normalizerMain/Normalizer';
import PerformancePage from './pages/employee/PerformancePage';
import NormalizerPage from './pages/normalizer/NormalizerPage';

import Objective1 from'./components/../pages/objective/Objective1';
import AddObjectiveDescription1 from './components/objective1/AddObjectiveDescription1';
import ViewObjectiveDescription1 from './components/objective1/ViewObjectiveDescription1';
import EditViewObjectiveDescription1 from './components/objective1/EditViewObjectiveDescription1';
import ViewAll from './components/objective1/Viewall';
import EditViewall from './components/objective1/EditViewall';
import ObjectiveTitle from './components/Template/ObjectiveTitle';
import Practice from './components/Practice';
import MidYearCheckboxPage from './pages/employee/MidYearCheckboxPage';
import MidYearRejectRating from './pages/employee/MidYearRejectRating';
import AppraiserPAreport from "./components/Newreviewer/midYearPAreport/MidyearPAreport";
import ReviewerPAreport from "./components/reviewerMain/midYearPAreport/MidyearPAreport";
import ReviewerRejection1 from "./components/manager/ReviewerRejection/ReviewerRejection1";
import ReviewerRejectionPage from './pages/reviewer/ReviewerRejection';
import AppraiserRejectsReviewer from "./pages/appraisal/AppraiserRejectsReviewer";
import AppraiserRejectsNormalizer from "./pages/appraisal/AppraiserRejectsNormalizer";
// import New from "./components/new/New";
import Rating from "./components/manager/ReviewerRejection/Rating/Rating";

// import NormalRating from './components/manager/NormalizerRejection/Rating/NormalRating';
import Levelsviewall from './components/objective1/Levelsviewall';
import Levelsviewalledit from './components/objective1/Levelsviewalledit';

import Objectiveviewbutton from './components/objective1/Objectiveviewbutton';

function App() {
    return (
        <>
            {/*First map the entire objective group */}
            <NavBar/>
            <Routes>
                <Route path={`${LOGIN}`} element={<Login/>}/>
                <Route path={`${REGISTER}`} element={<Register/>}/>
                <Route path={`${DASHBOARD}`} element={<Dashboard/>}/>
                <Route path={`${FORGOT_PASSWORD}`} element={<ForgotPassword/>}/>
                <Route path={`${VERIFY}`} element={<Verify/>}/>
                <Route path={`${RESET_PASSWORD}`} element={<ResetPassword/>}/>
                <Route path={`${OBJECTIVE}`} element={<Objective1/>}/>
                <Route path={`${OBJECTIVE}/:id`} element={<Objective1/>}/>
                <Route path={`${ADD_OBJECTIVE_DESCRIPTION}`} element={<AddObjectiveDescription/>}/>
                <Route path={`${EDIT_OBJECTIVE_DESCRIPTION}/:id`} element={<EditObjectiveDescription/>}/>
                <Route path={`${VIEW_OBJECTIVE_DESCRIPTION}`} element={<ViewObjectiveDescription/>}/>
                <Route path={`${MASTER_NAV}`} element={<MasterNav/>}/>
                <Route path={`${CALENDER}`} element={<CalenderPage/>}/>
                <Route path={`${CALENDER_UPDATE_PAGE}`} element={<CalendarUpdatePage/>}/>
                <Route path={`${CALENDER_VIEWPAGE}`} element={<CalendarViewPage/>}/>
                <Route path={`${ADD_EMPLOYEE}`} element={<Addemployee/>}/>
                <Route path={`${OTHER_RECOMMENDATION_PAGE}`} element={<OtherRecommendationPage/>}/>
                <Route path={`${OTHER_RECOMMENDATION_EDIT_PAGE}`} element={<OtherRecommendationEditPage/>}/>
                <Route path={`${RATING_SCALE_DESCRIPTION}`} element={<RatingScaleDescriptionPage/>}/>
                <Route path={`${RATING_SCALE_DESCRIPTION_VIEW_PAGE}`} element={<RatingScaleDescriptionViewPage/>}/>
                <Route path={`${CREATE_TEMPLATE}`} element={<CreateTemplatePage/>}/>
                <Route path={`${TRAINING_VIEW}`} element={<TrainingView/>}/>
                <Route path={`${TRAINING_RECOMMENDATION_PAGE}`} element={<TrainingRecommendationPage/>}/>
                <Route path={`${OTHER_RECOMMENDATION_VIEW_PAGE}`} element={<OtherRecommendationViewPage/>}/>
                <Route path={`${RATING_UPDATE_PAGE}`} element={<RatingsPage/>}/>
                <Route path={`${RATINGS_PAGE}`} element={<RatingsPage/>}/>
                <Route path={`${TRAINING_RECOMMENDATION_UPDATE_PAGE}`} element={<TrainingRecommendationUpdatePage/>}/>
                <Route path={`${CREATE_TEMPLATE}`} element={<CreateTemplatePage/>}/>

                <Route path={`${CREATE_MAPPING}`} element={<CreateMapping/>}/>
                <Route path={`${CREATE_MAPPING}/:id`} element={<CreateMapping/>}/>
                <Route path={`${CREATE_CALENDER}`} element={<CreateAppraisalCalender/>}/>
                <Route path={`${VIEW_TEMPLATE}`} element={<ViewTemplatePage/>}/>
                <Route path={`${VIEW_TEMPLATE}/v`} element={<ViewTemplate/>}/>
                <Route path={`${EDIT_TEMPLATE}/:id`} element={<EditTemplate/>}/>
                <Route path={`${RATING_SCALE_DESCRIPTION_UPDATE_PAGE}`} element={<RatingScaleUpdatePage/>}/>

                <Route path={`${DASHBOARDM}`} element={<DashboardM/>}/>
                <Route path={`${APPRAISER}/employee/:employee_id`} element={<AppraiserOverViewPage/>}/>
                <Route path={`${FEEDBACK_QUESTIONNAIRE}`} element={<FeedBackQuestionnairePage/>}/>
                <Route path={`${FEEDBACK_QUESTIONNAIRE_VIEW_lIST}`} element={<FeedBackQuestionnaireViewPage/>}/>
                <Route path={`${FEEDBACK_QUESTIONNAIRE_UPDATE_PAGE}`} element={<FeedBackQuestionnaireUpdatePage/>}/>


                <Route path={`${MANAGER}`} element={<Manager/>}/>

                <Route path={`${CREATE_APPRAISAL}`} element={<CreateAppraisal/>}/>
                <Route
                    path={`${CREATE_APPRAISAL}/employee/:employee_id/objective-description/:objective_description_id/objective-description-name/:objective_description_name`}
                    element={<CreateAppraisal/>}/>
                <Route path={`${CREATE_APPRAISAL}/employee/:employee_id`} element={<CreateAppraisal/>}/>
                <Route path="/appriser/dashboard" element={<Dashboard/>}/>
                {/* <Route path="/appraiser/test" element = {<Appr/>}/> */}

                <Route path={`${MIDYEAR_PERFORMANCE}/employee/:employee_id`} element={<PerformancePage/>}/>
                <Route path={`${MIDYEAR_CHECKBOX}/employee/:employee_id`} element={<MidYearCheckboxPage/>}/>
                <Route path={`${MIDYEAR_REJECT_RATING}/employee/:employee_id`} element={<MidYearRejectRating/>}/>
                <Route path={`${MIDYEAR_PA_REPORT}/employee/:employee_id`} element={<MidYearPAReportPage/>}/>
                <Route path={`${MIDYEAR_REJECT_SAVE}`} element={<MidyearRejectSave/>}/>
                <Route path={`${MIDYEAR_SUCCESS}`} element={<MidyearSuccess/>}/>
                <Route path={`${REVIEWER_PAGE}/employee/:employee_id`} element={<ReviewerPage/>}/>
                <Route path={`${NORMALIZER_PAGE}/employee/:employee_id`} element={<NormalizerPage/>}/>
                {/*<Route path={`${EDIT_VIEW_TEMPLATE}`} element={<EditViewTemplate/>}/>*/}
                <Route path={`${EDIT_VIEW_TEMPLATE}/:id`} element={<EditViewTemplate/>}/>
                <Route path={`${EDIT_VIEW_TEMPLATE}`} element={<EditViewTemplate/>}/>
                <Route path={`${REVIEWER}`} element={<ReviewerMain/>}/>
                <Route path={`${REVIEWER}/:id`} element={<ReviewerMain/>}/>
                <Route path={`${NORMALIZER}`} element={<NormalizerMain/>}/>
                <Route path={`${NORMALIZER}/:id`} element={<NormalizerMain/>}/>


                <Route path="/reviewer" element={<Reviewer/>}/>
                <Route path="/solidTalents" element={<SolidTalents/>}/>
                <Route path="/appraiser1" element={<Appraiser1/>}/>
                <Route path="/dashboardreview" element={<Dashboardreview/>}/>
                <Route path="/myteamreviewer" element={<MyTeamreviewer/>}/>
                <Route path="/objective1" element={<Objective1/>}/>
                {/* <Route path={`${ ADD_OBJECTIVE_DESCRIPTION_1}`} element={<AddObjectiveDescription1/>}/> */}
                <Route path={`${ ADD_OBJECTIVE_DESCRIPTION_1}`} element={<EditViewObjectiveDescription1/>}/>
                <Route path={`${ VIEW_OBJECTIVE_DESCRIPTION_1}`} element={<ViewObjectiveDescription1/>}/>
                <Route path={`${ EDITVIEW_OBJECTIVE_DESCRIPTION_1}`} element={<EditViewObjectiveDescription1/>}/>
                <Route path={`${ ADD_OBJECTIVE_DESCRIPTION_1}/:id`} element={<EditViewObjectiveDescription1/>}/>
                <Route path={`${VIEW_ALL}`} element={<ViewAll/>}/>
                <Route path={`${EDIT_VIEW_ALL}`} element={<EditViewall/>}/>
                <Route path="/objectivetitle" element={<ObjectiveTitle/>}/>
                <Route path="/practice" element={<Practice/>}/>
                <Route path="appraiser/employee/:employee_id" element={<AppraiserPAreport/>}/>
                <Route path="reviewer/employee/:employee_id" element={<ReviewerPAreport/>}/>
                <Route path="/reviewerrejection/employee/:employee_id" element={<AppraiserRejectsReviewer/>}/>
                <Route path="/appraiser/normalizer-rejection/employee/:employee_id" element={<AppraiserRejectsNormalizer/>}/>
                {/* <Route path="/new" element={<New/>}/> */}
                <Route path="/rating" element={<Rating/>}/>

                {/* <Route path="/normalrating" element={<NormalRating/>}/> */}
                    <Route path={`${LEVELS_VIEW_ALL}`} element={<Levelsviewall/>}/>
                    <Route path={`${LEVELS_VIEW_ALL_EDIT}`} element={<Levelsviewalledit/>}/>

                    <Route path={`${ OBJECTIVE_VIEW_BUTTON}`} element={<Objectiveviewbutton/>}/>

            </Routes>
        </>
    );
}

export default App;
