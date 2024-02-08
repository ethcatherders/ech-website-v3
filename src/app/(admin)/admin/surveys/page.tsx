"use client";
import { useState, useEffect } from "react";
import {
  getAllSurveys,
  getSurvey,
  addSurvey,
  updateSurvey,
  deleteSurvey,
  toggleSurveyState,
} from "@/app/_action";
import { IoTrashBinOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SurveyAdmin() {
  const [surveyData, setSurveyData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [survey, setSurvey] = useState<any>({
    id: 0,
    title: "",
    link: "",
    completed: false,
  });

  const [newSurvey, setnewSurvey] = useState(false);

  const [selectedSurveyId, setSelectedSurveyId] = useState(0);

  useEffect(() => {
    getAllSurveys().then((res) => {
      setSurveyData(res);
      if (res.length > 0) {
        setSelectedSurveyId(res[0].id);
      }
    });
  }, []);

  useEffect(() => {
    getSurvey(selectedSurveyId).then((res) => {
      if (res) {
        setSurvey(res);
      }
    });
  }, [selectedSurveyId]);
  return (
    <>
      <div className="flex justify-center min-h-screen w-full md:pt-[20dvh] pt-[15dvh]">
        <div className="lg:max-w-[65vw] md:max-w-[75vw] sm:max-w-[85vw] max-w-[95vw] left-0">
          <div className="flex flex-col gap-y-8">
            <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
              ECH Surveys Admin
            </h1>

            <div className="border-b border-lightGray pb-2 flex flex-col gap-2">
              <span
                className={`${
                  newSurvey ? "text-darkGray font-semibold" : "text-lightGray"
                } cursor-pointer`}
                onClick={() => {
                  setnewSurvey(true);
                  setSelectedSurveyId(0);
                  setSurvey({
                    id: 0,
                    title: "",
                    link: "",
                    completed: false,
                  });
                }}
              >
                + Add New Survey
              </span>
              {surveyData ? (
                <div className="flex flex-col gap-2">
                  {surveyData.map((survey, index) => {
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <p
                          onClick={() => {
                            setSelectedSurveyId(survey.id);
                          }}
                          className={`${
                            selectedSurveyId === survey.id
                              ? "text-darkGray font-semibold"
                              : "text-lightGray"
                          } cursor-pointer`}
                        >
                          {survey.title}
                        </p>
                        <span
                          onClick={() => {
                            deleteSurvey(survey.id);
                            getAllSurveys().then((res) => {
                              setSurveyData(res);
                              if (res.length > 0) {
                                setSelectedSurveyId(res[0].id);
                              }
                            });
                          }}
                          className="cursor-pointer"
                        >
                          <IoTrashBinOutline size={15} />
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={survey.title}
                onChange={(e) => {
                  setSurvey({ ...survey, title: e.target.value });
                }}
                placeholder="Title"
                className="border border-lightGray focus:border-darkGray rounded-lg p-2"
              />
              <input
                type="text"
                value={survey.link}
                onChange={(e) => {
                  setSurvey({ ...survey, link: e.target.value });
                }}
                placeholder="Link"
                className="border border-lightGray focus:border-darkGray rounded-lg p-2"
              />
              <Dialog open={open}>
                <DialogTrigger>
                  <button
                    className="bg-darkGray text-white rounded-lg p-2"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Set survey as{" "}
                    {survey.completed ? "incomplete" : "completed"}
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Are you sure you want to change it to{" "}
                      {survey.completed ? "incomplete" : "completed"}?
                    </DialogTitle>
                    <DialogDescription className="justify-center w-full flex pt-8">
                      <button
                        className="bg-darkGray text-white rounded-lg p-2"
                        onClick={() => {
                          toggleSurveyState(survey.id);
                          getSurvey(survey.id).then((res) => {
                            if (res) {
                              setSurvey(res);
                            }
                          });
                          setOpen(false);
                        }}
                      >
                        Yes! I am sure
                      </button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <button
                onClick={() => {
                  if (newSurvey) {
                    addSurvey(survey);
                  } else {
                    updateSurvey(selectedSurveyId, survey);
                  }
                  getAllSurveys().then((res) => {
                    setSurveyData(res);
                  });
                  setSurvey({
                    id: 0,
                    title: "",
                    link: "",
                    completed: false,
                  });
                }}
                className="bg-darkGray text-white rounded-lg p-2"
              >
                {newSurvey ? "Add" : "Update"}
                <span className="pl-2">Survey</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
