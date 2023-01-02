import dayjs from "dayjs";
import React, { useState, FC, useRef } from "react";
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
  const filesRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="add-tusk-form"
      onSubmit={(e) => {
        e.preventDefault();
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
        if (filesRef.current) {
          filesRef.current.value = "";
        }
      }}
    >
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
