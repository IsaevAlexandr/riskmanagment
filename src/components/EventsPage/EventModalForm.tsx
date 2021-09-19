import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useFormState } from "../../hooks/useFormState";
import { FormTextField } from "../FormTextField";
import { Event } from "./data";

interface ModalFormProps {
  visible: boolean;
  onClose(): void;
  onSave(v: Event): void;
}

export const EventModalForm: React.FC<ModalFormProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const { form, setField, reset } = useFormState<Event>();

  const handleSave = () => {
    onSave(form as Event);
    reset();
    onClose();
  };
  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle>Добавление нового мероприятия</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Чтобы добавить новое мероприятие, заполните поля ниже
        </DialogContentText>

        <FormTextField
          label="Мероприятие"
          value={form.event}
          onChange={setField("event")}
        />
        <FormTextField
          label="Описание мероприятия"
          value={form.description}
          onChange={setField("description")}
        />
        <FormTextField
          label="Адресуемый риск"
          value={form.risk}
          onChange={setField("risk")}
        />
        <FormTextField
          label="N риска"
          value={form.riskNum}
          onChange={setField("riskNum")}
        />
        <FormTextField
          label="Вероятность до"
          value={form.probabilityBefore}
          onChange={setField("probabilityBefore")}
        />
        <FormTextField
          label="Вероятность после"
          value={form.probabilityAfter}
          onChange={setField("probabilityAfter")}
        />
        <FormTextField
          label="Потери до, тыс. руб"
          value={form.lossesBefore}
          onChange={setField("lossesBefore")}
        />
        <FormTextField
          label="Потери после, тыс. руб"
          value={form.lossesAfter}
          onChange={setField("lossesAfter")}
        />
        <FormTextField
          label="Оценка риска до, тыс. руб"
          value={form.riskAssessmentBefore}
          onChange={setField("riskAssessmentBefore")}
        />
        <FormTextField
          label="Оценка риска после, тыс. руб"
          value={form.riskAssessmentAfter}
          onChange={setField("riskAssessmentAfter")}
        />
        <FormTextField
          label="Дата начала"
          value={form.startDate}
          onChange={setField("startDate")}
        />
        <FormTextField
          label="Дата завершения"
          value={form.endDate}
          onChange={setField("endDate")}
        />
        <FormTextField
          label="Стоимость мероприятия"
          value={form.totalCost}
          onChange={setField("totalCost")}
        />
        <FormTextField
          label="Ответственный"
          value={form.responsible}
          onChange={setField("responsible")}
        />
        <FormTextField
          label="Статус"
          value={form.status}
          onChange={setField("status")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handleSave}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
};
