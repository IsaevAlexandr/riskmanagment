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
import { Risk } from "./data";
import riskSuggest from "./riskSuggest.png";

interface ModalFormProps {
  visible: boolean;
  onClose(): void;
  onSave(v: Risk): void;
}

export const RiskModalForm: React.FC<ModalFormProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const { form, setField, reset } = useFormState<Risk>();

  const handleSave = () => {
    onSave(form as Risk);
    reset();
    onClose();
  };
  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle>Добавление нового риска</DialogTitle>
      <DialogContent>
        <img src={riskSuggest} alt="Risk suggest" style={{ width: "100%" }} />
        <DialogContentText>
          Чтобы добавить новый риск, заполните поля ниже
        </DialogContentText>

        <FormTextField
          label="Название риска"
          value={form.name}
          onChange={setField("name")}
        />
        <FormTextField
          label="Описание"
          value={form.description}
          onChange={setField("description")}
        />
        <FormTextField
          label="Категория"
          value={form.category}
          onChange={setField("category")}
        />
        <FormTextField
          label="Ключевой фактор"
          value={form.reason}
          onChange={setField("reason")}
        />
        <FormTextField
          label="Среднее НПВ"
          value={form.time_recovery_before}
          onChange={setField("time_recovery_before")}
        />
        <FormTextField
          label="Затраты на восстановление"
          value={form.costs_recovery_after}
          onChange={setField("costs_recovery_after")}
        />
        <FormTextField
          label="Текущий ущерб"
          value={form.costs_recovery_before}
          onChange={setField("costs_recovery_before")}
        />
        <FormTextField
          label="Мероприятие"
          value={form.measure_probability_presence}
          onChange={setField("measure_probability_presence")}
        />
        <FormTextField
          label="Вероятность после мероприятия"
          value={form.probability_after}
          onChange={setField("probability_after")}
        />
        <FormTextField
          label="Потери времени на восстановление после мероприятия"
          value={form.time_recovery_after}
          onChange={setField("time_recovery_after")}
        />
        <FormTextField
          label="Бизнес-процесс"
          value={form.business_process}
          onChange={setField("business_process")}
        />
        <FormTextField
          label="Владелец риска"
          value={form.risk_owner}
          onChange={setField("risk_owner")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handleSave}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
};
