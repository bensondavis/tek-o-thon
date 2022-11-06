import { useEffect, useState } from "react";
import { useColorScheme } from "@mui/joy/styles";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import poster from "../../assets/tot-img/poster.jpg";
import schedule from "../../assets/tot-img/schedule.jpg";
import guidelines from "../../assets/tot-img/guidelines.jpg";

export default function ImageView({ imgType, open, onClose }) {
  const [currImg, setCurrImg] = useState("");
  const { mode, setMode } = useColorScheme('dark');
  useEffect(() => {

    switch (imgType) {
      case "poster":
        setCurrImg(poster);
        break;
      case "guidelines":
        setCurrImg(guidelines);
        break;
      case "schedule":
        setCurrImg(schedule);
        break;
      default: break;
    }
  }, [imgType]);

  const handleClose = () => {
    onClose(false);
  };
  return (
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ maxWidth: "60vw", margin: "auto", zIndex: "10"}}
        variant="soft"
      >
        <ModalDialog
          aria-labelledby="variant-modal-title"
          aria-describedby="variant-modal-description"
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
            <img src={currImg} alt={"img"} />
        </ModalDialog>
      </Modal>
  );
}
