/* eslint-disable */
import * as React from "react";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import _ from "lodash";

import { Alert } from "@mui/material";

/*
By default error should be false so that we don't send requset if fields are empty 
if there is any error we shouldn't send any request 
We also need to check if users has selected any field or not 
if error we need 
*/

const Contain = styled("div")({
  //   // marginLeft: "25px",
  //   // marginRight: "20px",
  //   // marginTop: "10px",
  //   // width: "1000",
  //   // paddingTop: "0px",
});

const OtherRecommendation = (props: any) => {
  const {
    otherData,
    tab,
    setTabs,
    saveDraft,
    singleTemplateData,
    isSuccessOther,
  } = props;
  console.log(otherData);
  const [users, setUsers] = useState<any>([]);
  const [templateData, setTemplateData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [save1, setSave1] = useState(isSuccessOther);
  const [hideAlert, setHideAlert] = useState(false);

  console.log(error, "alert error");
  useEffect(() => {
    if (singleTemplateData) {
      setTemplateData(() => {
        return singleTemplateData.template.other_recommendation.map(
          (item: any) => {
            return {
              ...item.name,
              isChecked: item.isChecked,
            };
          }
        );
      });
    }
  }, [otherData, singleTemplateData]);

  useEffect(() => {
    console.log("useeffect run");

    if (templateData) {
      setUsers((prev: any) => {
        const newArr = [...templateData, ...otherData.data];
        const newA = _.uniqBy(newArr, "_id");
        console.log(newA, "new");
        return newA;
      });
    }
  }, [otherData, templateData]);

  const handleOnCheck = (e: any) => {
    const { name, checked } = e.target;

    if (name === "allSelect") {
      const tempUser = users.map((other: any) => {
        return { ...other, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      const tempUser = users.map((other: any) => {
        return other._id === name ? { ...other, isChecked: checked } : other;
      });
      setUsers(tempUser);
      console.log(tempUser, "temp");
    }
  };

  const checkboxHandler = (checkbox: any) => {
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
        return {
          name: i._id,
          isChecked: i.isChecked,
        };
      });
      return check;
    }
  };

  useEffect(() => {
    //@ts-ignore
    console.log(checkboxIdHandler(checkboxHandler(users)));
  }, [users]);

  const hideAlertHandler = () => {
    setTimeout(() => {
      setHideAlert(false);
    }, 3000);
  };
  const selectOneError = (i: any) => {
    setSave1(false);

    if (i && i.length === 0) {
      setError(true);
      setSave1(false);
    } else if (i && i.length > 0) {
      setError(false);
      setSave1(true);
      setHideAlert(true);
      hideAlertHandler();
      // setTabs(tab + 1);
      console.log(error, "save");
    } else {
      setSave1(false);
    }
    console.log(i, "setSelectedUser");
  };

  // useEffect(() => {
  //   if(isSuccessOther) {
  //     setHideAlert(true)
  //     hideAlertHandler()
  //   }
  // },[isSuccessOther])

  return (
    <div>
      {error && (
        <Alert severity="error">Select atleast 1 Other Recommendation!</Alert>
      )}

      {hideAlert && save1 && <Alert severity="info">Saved as a draft</Alert>}
      {/* <Contain> */}
      <div style={{height:"40px"}}>
        <Box>
          <Stack
            direction="row"
            spacing={4}
            style={{ width: "100%", display: "block"}}
          >
            <input
              name="allSelect"
              checked={
                users &&
                users.filter((employee: any) => employee.isChecked !== true)
                  .length < 1
              }
              onChange={handleOnCheck}
              type="checkbox"
              style={{
                height: "17px",
                width:"17px",
                border: "1px solid #D5D5D5",
               
              }}
            />

            <span>All</span>
            {users.map((i: any) => {
              return (
                <>
                  <li
                    style={{
                      width: "25%",
                      float: "right",
                      marginBottom: "20px",
                      listStyleType: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      name={i._id}
                      checked={i?.isChecked || false}
                      onChange={handleOnCheck}
                      type="checkbox"
                      style={{
                        height: "17px",
                        width: "17px",
                        borderColor: "#D5D5D5",
                      }}
                    />
                    <div>
                      <label>{i.name}</label>
                    </div>
                  </li>
                </>
              );
            })}
          </Stack>
        </Box>
        </div>

        <div
          style={{
            marginTop: "520px",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Button
            style={{
              textTransform: "none",
              backgroundColor: "#014D76",
              fontSize: "16px",
              fontFamily: "sans-serif",
              padding: "4px 19px",
            }}
            variant="contained"
            onClick={() => {
              selectOneError(checkboxIdHandler(checkboxHandler(users)));
              //@ts-ignore
              // if (!error && checkboxIdHandler(checkboxHandler(users))?.length > 0) {
              console.log("runnging");
              saveDraft({
                other_recommendation: checkboxIdHandler(checkboxHandler(users)),
              });
              // }

              // setTabs(tab + 1);
            }}
          >
            Save as Draft
          </Button>
        </div>
      {/* </Contain> */}
    </div>
  );
};

export default OtherRecommendation;
