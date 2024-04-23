"use client";
import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";
import Content from "../TaskDetails/Content";
import LeftBar from "../TaskDetails/LeftBar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import {
  addTask,
  fetchFlags,
  getAllBoardandTasks,
} from "@/services/serviceHelper";
import useSWR, { mutate,trigger } from "swr";
// import useSWR from 'swr/immutable';
import { revalidateTag } from "next/cache";


const TaskCreateModal = ({ createTaskModalOpen, setCreateTaskModalOpen }) => {
  const [boardData2, setBoardData2] = useState(JSON.parse(localStorage.getItem("boardData")));
  const [flags2, setFlags2] = useState(JSON.parse(localStorage.getItem("flags")));
  const [boardName, setBoardName] = useState();
  const [flagName, setFlagName] = useState();

 const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2 text-sm">
      <h4>Add Task</h4>
    </div>
  );

 

  const toggleVisibility = () => {
    setCreateTaskModalOpen(!createTaskModalOpen); 
  };
 

 

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      boardId: 0,
      flagId: 0,
      startDate: "",
      endDate: "",
    },
    onSubmit: async (values) => {
      const profile = JSON.parse(localStorage.getItem("Auth"));
      const token = profile.data.token;
      try {
        const userData = await addTask(token, values);      
        mutate('/boards');
       
      } catch (error) {
        setError(error);
      }
    },
  });
  return (
    <div className="card flex justify-content-center ">
      <Dialog
        closable
        visible={createTaskModalOpen}
        modal
        header={headerElement}      
        style={{ width: "30%", maxWidth: "400px", height: "full" }}
        onHide={() => setCreateTaskModalOpen(false)}
      >
        <div className="flex w-full">
          <form
            onSubmit={formik.handleSubmit}
            className="mt-10 w-full flex flex-col gap-4"
          >
            <div className="flex gap-2 justify-between">
              <label for="name">Başlık</label>
              <InputText
                className=""
                variant="filled"
                id="name"
                value={formik.values.name}
                onChange={(e) => formik.setFieldValue("name", e.target.value)}
              />
            </div>
            <div className="flex gap-2 justify-between">
              <label for="description">Açıklama</label>
              <InputTextarea
                className="w-60"
                variant="filled"
                id="description"
                value={formik.values.description}
                onChange={(e) =>
                  formik.setFieldValue("description", e.target.value)
                }
                rows={5}
                cols={20}
              />
            </div>

            <div className="flex gap-2 justify-between items-center">
              <label for="board">Board</label>
              <Dropdown
                id="board"
                value={boardName}
                onChange={(e) => (
                  setBoardName(e.target.value),
                  formik.setFieldValue("boardId", e.target.value.id)
                )}
                options={boardData2?.data}
                optionLabel="name"
                placeholder="Select a Board"
                className=""
              />
            </div>

            <div className="flex gap-2 justify-between items-center">
              <label for="flag">Flag</label>
              <Dropdown
                id="flag"
                value={flagName}
                onChange={(e) => (
                  setFlagName(e.target.value),
                  formik.setFieldValue("flagId", e.target.value.id)
                )}
                options={flags2?.data}
                optionLabel="name"
                placeholder="Select a Flag"
                className=""
              />
            </div>
            <div className="flex gap-2 justify-between items-center">
              <label for="startDate">Start Date</label>
              <Calendar
                id="startDate"
                value={formik.values.startDate}
                onChange={(e) => formik.setFieldValue("startDate", e.value)}
              />
            </div>
            <div className="flex gap-2 justify-between items-center">
              <label for="endDate">End Date</label>
              <Calendar
                id="endDate"
                value={formik.values.endDate}
                onChange={(e) => formik.setFieldValue("endDate", e.value)}
              />
            </div>

            <Button
              label="Kaydet"
              icon="pi pi-check"
              onClick={toggleVisibility}
              autoFocus
              type="submit"
            />
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default TaskCreateModal;
