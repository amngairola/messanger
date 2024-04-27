import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ErrorDialog({ open, error, onClose }) {
  return (
    <Dialog
      open={open}
      handler={onClose}
      className="bg-gray-700 rounded-lg border shadow-lg border-gray-200 text-white text-center max-w-md mx-auto p-5 mt-60"
    >
      <DialogHeader className="text-red-700 font-bold">Error..!</DialogHeader>
      <DialogBody className="text-gray-300">{error.message}</DialogBody>
      <DialogFooter>
        <Button
          variant="gradient"
          color="red"
          onClick={onClose}
          className="bg-red-500 p-2 shadow-md hover:bg-red-600"
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
