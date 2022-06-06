import React from "react";
import {
  useCreateObjectiveTypeMutation,
  useGetObjectiveGroupQuery,
  useCreateObjectiveGroupMutation,
  useDeleteObjectiveGroupMutation,
  useGetObjectiveTypeQuery,
  useGetObjectiveDescriptionQuery,
  useDeleteObjectiveDescriptionMutation,
  useDeleteObjectiveTypeMutation,
  useUpdateObjectiveGroupMutation,
  useUpdateObjectiveTypeMutation,
  useCreateObjectiveTitleMutation,
  useGetObjectiveTitleQuery,
  useUpdateObjectiveTitleMutation,
  useDeleteObjectiveTitleMutation,
} from "../../service/";
import Grid from "@mui/material/Grid";
// import {
//     ObjectiveTitle,
//     ObjectiveGroup1,
//     ObjectiveType1,
// } from '../../components/objective1';

import ObjectiveTitle from "../../components/objective1/ObjectiveTitle";
import ObjectiveGroup1 from "../../components/objective1/ObjectiveGroup1";
import ObjectiveType1 from "../../components/objective1/ObjectiveType1";
import Objectiveviewbutton from "../../components/objective1/Objectiveviewbutton";

import { Container } from "@mui/material";
import PAMaster from "../../components/UI/PAMaster";
import { Link, useParams } from "react-router-dom";
import { LEVELS_VIEW_ALL } from "../../constants/routes/Routing";

const Objectives = () => {
  const { id } = useParams();

  const [
    objectiveGroupMutation,
    { data, isLoading, isError: objectiveGroupError1 },
  ] = useCreateObjectiveGroupMutation();
  const [objectiveGroupDelete] = useDeleteObjectiveGroupMutation();

  const {
    data: objectiveType,
    isLoading: ObjectiveTypeLoading,
    refetch: ObjectiveTypeRefetch,
  } = useGetObjectiveTypeQuery("");

  const {
    data: ObjectiveGroupData,
    isLoading: ObjectiveGroupLoading,
    error: ObjectiveGroupError,
    refetch,
  } = useGetObjectiveGroupQuery("");

  console.log(objectiveType, "dta");

  const [
    createObjectiveType,
    {
      data: objectiveGroupData,
      isLoading: objectiveGroupLoading,
      isError: errorObjectiveType1,
    },
  ] = useCreateObjectiveTypeMutation();

  const [editObjectiveGroup, { isError: objectiveGroupError2 }] =
    useUpdateObjectiveGroupMutation();

  const [objectiveDescriptionDelete] = useDeleteObjectiveDescriptionMutation();
  const {
    data: objectiveDescriptionData,
    refetch: ObjectiveDescriptionRefetch,
  } = useGetObjectiveDescriptionQuery("");
  const [objectiveTypeDelete] = useDeleteObjectiveTypeMutation();
  const [objectivetypeEdit, { isError: errorObjectiveType2 }] =
    useUpdateObjectiveTypeMutation();

  const [objectiveTitleCreate, { isError: titleError1 }] =
    useCreateObjectiveTitleMutation();
  const [objectiveTitleEdit, { isError: titleError2 }] =
    useUpdateObjectiveTitleMutation();
  const [objectiveTitleDelete] = useDeleteObjectiveTitleMutation();

  const objectiveGroupClickHandler = (name: string) => {
    objectiveGroupMutation({
      name,
    });
    refetch();
    console.log("objectiveGroupClickHandler");
  };
  const objectiveGroupDeleteHandler = (id: string) => {
    console.log("objectiveGroupDeleteHandler", id);
    const result = objectiveGroupDelete({
      id,
    });

    console.log(result);
    refetch();
  };

  const objectiveTypeClickHandler = (name: string, objective_group: string) => {
    createObjectiveType({
      name,
      objective_group,
    });
    ObjectiveTypeRefetch();
  };

  const objectiveTypeDeleteHandler = (id: string) => {
    console.log("objectiveTypeDeleteHandler", id);
    const result = objectiveTypeDelete(id);

    console.log(result);
  };

  const objectiveGroupEditHandler = (name: string) => {
    editObjectiveGroup({
      name,
      id,
    });
  };

  const objectiveTypeEditHandler = (name: string, objective_group: string) => {
    objectivetypeEdit({
      name,
      objective_group,
      id,
    });
  };

  const objectiveTitleEditHandler = (
    objective_title: any,
    objective_definition: any
  ) => {
    objectiveTitleEdit({
      objective_title,
      objective_definition,
      id,
    });
  };

  const objectiveTitleDeleteHandler = (id: string) => {
    objectiveTitleDelete(id);
  };

  const { data: objectiveDescription } = useGetObjectiveDescriptionQuery("");

  const { data: objectiveTitle } = useGetObjectiveTitleQuery("");

  return (
    <>
      <div style={{ background: "#F1F1F1", height: "54rem" }}>
        <PAMaster name={"Objective Setting"} />
        <Container
          sx={{
            maxWidth: "96.5% !important",
            width: "100%",
            height: "48rem",
            background: "#FFF",
            paddingTop: "5px",
          }}
        >
          <Link to={`${LEVELS_VIEW_ALL}`}>
            <p
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "15px",
              }}
            >
              View All
            </p>
          </Link>
          <Grid>
            <Grid container>
              <Grid item xs={3} paddingLeft="10px" paddingRight="10px">
                <ObjectiveGroup1
                  ObjectiveGroupData={ObjectiveGroupData}
                  loading={ObjectiveGroupLoading}
                  onSubmit={objectiveGroupClickHandler}
                  onDelete={objectiveGroupDeleteHandler}
                  onEdit={objectiveGroupEditHandler}
                  errorGroup1={objectiveGroupError1}
                  errorGroup2={objectiveGroupError2}
                />
              </Grid>
              <Grid item xs={3} paddingLeft="10px" paddingRight="10px">
                <ObjectiveType1
                  ObjectiveGroupData={ObjectiveGroupData}
                  loading={ObjectiveTypeLoading}
                  objectiveTypeData={objectiveType}
                  onSubmit={objectiveTypeClickHandler}
                  onDelete={objectiveTypeDeleteHandler}
                  onEdit={objectiveTypeEditHandler}
                  errorType1={errorObjectiveType1}
                  errorType2={errorObjectiveType2}
                />
              </Grid>
              <Grid item xs={3} paddingLeft="10px" paddingRight="10px">
                <ObjectiveTitle
                  objectiveTitleCreate={objectiveTitleCreate}
                  objectiveTitleData={objectiveTitle}
                  onDelete={objectiveTitleDeleteHandler}
                  onEdit={objectiveTitleEditHandler}
                  titleError1={titleError1}
                  titleError2={titleError2}
                />
              </Grid>

              <Grid item xs={3} paddingLeft="10px" paddingRight="10px">
                <Objectiveviewbutton />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Objectives;
