import dayjs from "dayjs";
import React, { useState, FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createTaskAction } from "../../../redux/actions/tusksActionCreater";
import { DashBoardHeaders } from "../../../types/dashboard";
import { Task } from "../../../types/tusks/task";
import "./add-task-form.sass";

interface AddTaskFormProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ setModalActive }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [startDay, setStartDay] = useState<dayjs.Dayjs | undefined>(undefined);
  const [finishDay, setFinishDay] = useState<dayjs.Dayjs | undefined>(
    undefined
  );
  const startDayRef = useRef<HTMLInputElement>(null);
  const finishDayRef = useRef<HTMLInputElement>(null);
  let { id } = useParams();
  const dispatch = useDispatch();

  const submitNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDay || !finishDay) {
      return;
    }
    const newTask = {
      header: name,
      description: desc,
      dateStart: startDay.toString(),
      dateFinished: finishDay.toString(),
      projectID: id,
      status: DashBoardHeaders.QUEUE,
    } as Task;
    dispatch(createTaskAction(newTask));
    setName("");
    setDesc("");
    setStartDay(undefined);
    setFinishDay(undefined);
    if (startDayRef.current) {
      startDayRef.current.value = "";
    }
    if (finishDayRef.current) {
      finishDayRef.current.value = "";
    }
  };

  return (
    <form className="add-tusk-form" onSubmit={submitNewTask}>
      <label className="add-tusk-form__label" htmlFor="name">
        Название задачи
      </label>
      <input
        className="add-tusk-form__input"
        id="name"
        type="text"
        value={name}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
        }}
        placeholder="Введите название задачи"
      />
      <label className="add-tusk-form__label" htmlFor="description">
        Описание задачи
      </label>
      <input
        className="add-tusk-form__input"
        id="description"
        type="text"
        value={desc}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setDesc(e.currentTarget.value);
        }}
        placeholder="Введите описание задачи"
      />
      <label className="add-tusk-form__label" htmlFor="start-day">
        День начала задачи
      </label>
      <input
        className="add-tusk-form__input"
        id="start-day"
        type="date"
        ref={startDayRef}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setStartDay(dayjs(e.currentTarget.value));
        }}
      />
      <label className="add-tusk-form__label" htmlFor="finish-day">
        День окончания задачи
      </label>
      <input
        className="add-tusk-form__input"
        id="finish-day"
        type="date"
        ref={finishDayRef}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setFinishDay(dayjs(e.currentTarget.value));
        }}
      />
      <div className="add-tusk-form__buttons">
        <button
          className="add-tusk-form__button"
          onClick={() => {
            // dispatch(createProjectAction(name));
            setModalActive(false);
          }}
        >
          Отправить
        </button>
        <button
          className="add-tusk-form__button"
          onClick={() => {
            setModalActive(false);
          }}
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
