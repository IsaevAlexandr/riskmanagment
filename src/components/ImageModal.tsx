import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface ImageModalProps {
  visible: boolean;
  onClose(): void;
  image: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  visible,
  onClose,

  image,
}) => {
  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle>Описание риска</DialogTitle>
      <DialogContent>
        <img src={image} alt="description" style={{ width: "100%" }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Ок</Button>
      </DialogActions>
    </Dialog>
  );
};
