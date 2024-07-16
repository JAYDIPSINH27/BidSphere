/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';

function Modal({ title, content }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const formatContentToJSX = () => {
    const sections = content.trim().split(/\n(?=\d+\.)/).map(section => section.trim());

    return sections.map((section, index) => {
      const lines = section.split('\n').map(line => line.trim());
      const heading = lines.shift();
      return (
        <div key={index}>
          <h2>{heading}</h2>
          {lines.map((line, idx) => <p key={idx}>{line}</p>)}
        </div>
      );
    });
  };

  return (
    <>
      <button className="footer-link" onClick={handleOpen}>{title}</button>
      <Dialog open={open} handler={handleOpen} className=" overflow-none">
        <DialogHeader>{title}
          <DialogFooter className="space-x-1">

            <Button variant="text" color="blue-gray" onClick={handleOpen}>
              close
            </Button>
          </DialogFooter>
        </DialogHeader>
        <DialogBody className="h-[40rem] p-10 overflow-scroll mb-10">
          <Typography className="font-normal">
            {formatContentToJSX()}
          </Typography>
        </DialogBody>

      </Dialog>
    </>
  );
}

export default Modal;
