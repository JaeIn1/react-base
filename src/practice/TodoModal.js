import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function TodoModal(props) {
  return (
    <Modal
      open={props.isModalOpen}
      onClose={props.closeModal}
      BackdropComponent={null} // 배경 제거
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: "10px" }}>gello</Box>
    </Modal>
  );
}

export default TodoModal;
