import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { setInputValue } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal({openModal, setOpenModal}) {
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch()
  


  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(setInputValue(event.target.elements.input.value))
    //dispatch(setInputValue(event.target.elements.input.value))
    setOpenModal(false)
  }
  
  //console.log(input);



  return (
    <div>
      <Button onClick={handleOpen}>Добавить</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <input name="input" type="text" defaultValue={input}></input>
            <button type="submit">Окей</button>
            <button onClick={handleClose}>Отмена</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}