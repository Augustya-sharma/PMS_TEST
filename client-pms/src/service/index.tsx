import {
    useDeleteObjectiveGroupMutation,
    useGetObjectiveGroupQuery,
    useCreateObjectiveGroupMutation,
    useUpdateObjectiveGroupMutation
} from "./Objective/ObjectiveGroup";
import {
    useUpdateObjectiveTypeMutation,
    useCreateObjectiveTypeMutation,
    useDeleteObjectiveTypeMutation,
    useGetObjectiveTypeQuery
} from "./Objective/ObjectoveType";

import {
    useCreateObjectiveTitleMutation,
    useGetObjectiveTitleQuery,
    useDeleteObjectiveTitleMutation,
    useUpdateObjectiveTitleMutation
} from './Objective/ObjectiveTitle'


import {
    useDeleteObjectiveDescriptionMutation,
    useGetObjectiveDescriptionQuery,
    useCreateObjectiveDescriptionMutation,
    useUpdateObjectiveDescriptionMutation,
    useGetSingleObjectiveDescriptionQuery
} from "./Objective/ObjectiveDescription";


import {
    useDeleteTrainingRecommendationMutation,
    useCreateOtherRecommendationMutation,
    useCreateTrainingRecommendationMutation,
    useDeleteOtherRecommendationMutation,
    useGetOtherRecommendationQuery,
    useEditOtherRecommendationMutation,
    useGetSingleOtherRecommendationQuery,
    useGetTrainingRecommendationQuery,
    useUpdateTrainingRecommendationMutation,
    useGetSingleTrainingRecommendationQuery
} from './recommendation/recommendation'

import {
    useCreateRatingsMutation,
    useGetRatingsQuery,
    useDeleteRatingsMutation,
    useGetRatingScaleQuery,
    useGetSingleRatingQuery,
    useUpdateRatingMutation
} from "./ratings/ratings";

import {
    useCreateTemplateMutation,
    useGetTemplateQuery,
    useDeleteTemplateMutation,
    useAddWeightageMutation,
    useGetSingleTemplateQuery,
    useCreatePositionTemplateMutation,
    useEditTemplateMutation
} from './template/template'

import {
    useGetEmployeeQuery,
    useGetEmployeeByStatusQuery
} from './employee/employee'

import {

    useGetEmployeeAppraisalQuery,
    useCreateEmployeeAppraisalMutation,
    useUpdateEmployeeAppraisalMutation,
    useStartEmployeeAppraisalMutation,
    useAcceptAppraisalEmployeeMutation,
    useAcceptNormalizerMutation,
    useAcceptReviewerMutation,
    useRejectReviewerAppraisalEmployeeMutation,

    useRejectNormalizerAppraisalEmployeeMutation,

    useReviewerRejectionMutation,
    useNormalizerRejectionMutation,
    useAppraiserAcceptNormalizerMutation,
    useAppraiserAcceptReviewerMutation

} from './employee/appraisal/appraisal'
import
{
    useGetCalenderQuery,
    useCreateCalenderMutation,
    useDeleteCalenderMutation,
    useUpdateCalendarMutation,
    useGetSingleCalenderQuery
} from './calender/Calender'

import {
    useGetFeedBackQuery,
    useDeleteFeedBackMutation,
    useUpdateFeedBackMutation,
    useGetSingleFeedBackQuery
} from './feedBackQuestionnaire/FeedBackQuestionnaire'

import {
    useGetAppraisalCalenderQuery,
    useDeleteAppraisalCalenderMutation,
    useStartAppraisalCalenderMutation,

} from "./appraisalCalender/AppraisalCalender";


export {
    useDeleteObjectiveGroupMutation,
    useCreateObjectiveGroupMutation,
    useGetObjectiveGroupQuery,
    useCreateObjectiveTypeMutation,
    useUpdateObjectiveTypeMutation,
    useDeleteObjectiveTypeMutation,
    useGetObjectiveTypeQuery,
    useCreateObjectiveDescriptionMutation,
    useUpdateObjectiveDescriptionMutation,
    useGetObjectiveDescriptionQuery,
    useDeleteObjectiveDescriptionMutation,
    useDeleteTrainingRecommendationMutation,
    useGetSingleOtherRecommendationQuery,
    useGetTrainingRecommendationQuery,
    useGetRatingsQuery,
    useGetRatingScaleQuery,
    useGetOtherRecommendationQuery,
    useEditOtherRecommendationMutation,
    useDeleteRatingsMutation,
    useGetSingleRatingQuery,
    useCreateTrainingRecommendationMutation,
    useDeleteOtherRecommendationMutation,
    useCreateOtherRecommendationMutation,
    useCreateRatingsMutation,
    useGetSingleTrainingRecommendationQuery,
    useUpdateTrainingRecommendationMutation,
    useUpdateRatingMutation,
    useCreateTemplateMutation,
    useGetTemplateQuery,
    useDeleteTemplateMutation,
    useGetSingleTemplateQuery,
    useCreatePositionTemplateMutation,
    useAddWeightageMutation,
    useGetEmployeeQuery,

    useCreateEmployeeAppraisalMutation,
    useGetEmployeeAppraisalQuery,

    useGetCalenderQuery,
    useGetFeedBackQuery,
    useDeleteFeedBackMutation,
    useGetEmployeeByStatusQuery,
    useCreateCalenderMutation,
    useDeleteCalenderMutation,
    useUpdateCalendarMutation,
    useUpdateFeedBackMutation,
    useGetSingleCalenderQuery,
    useGetSingleFeedBackQuery,
    useGetAppraisalCalenderQuery,
    useDeleteAppraisalCalenderMutation,
    useUpdateObjectiveGroupMutation,
    useStartAppraisalCalenderMutation,
    useGetSingleObjectiveDescriptionQuery,
    useEditTemplateMutation,
    useUpdateEmployeeAppraisalMutation,
    useStartEmployeeAppraisalMutation,
    useAcceptNormalizerMutation,
    useAcceptAppraisalEmployeeMutation,
    useAcceptReviewerMutation,
    useRejectReviewerAppraisalEmployeeMutation,

    useRejectNormalizerAppraisalEmployeeMutation,

    useReviewerRejectionMutation,
    useNormalizerRejectionMutation,
    useUpdateObjectiveTitleMutation,
    useGetObjectiveTitleQuery,
    useDeleteObjectiveTitleMutation,
    useCreateObjectiveTitleMutation,
    



};
