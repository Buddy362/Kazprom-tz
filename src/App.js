import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/userReducer";
import SimpleSnackbar from "./components/Snackbar";
import { useEffect, useState } from "react";
import BasicModal from "./components/Modal";

function App() {
  const users = useSelector(state => state.user.users)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState([]);
  const inputValue = useSelector(state => state.input.inputValue)

  useEffect(() => {
    setItem(inputValue)
  }, [openModal])


  const handlerMessage = () => {
    setOpen(true);
    dispatch(fetchUsers())
  }
  const handleDelete = (itemId) => {
    const index = item.findIndex(item => item.id === itemId)
    item.splice(index, 1)
    setItem([...item])
    console.log(item)
  }
  



  return (
    <div>
      <button className="btn" onClick={handlerMessage}>Test GraphQL</button>
      <SimpleSnackbar users={users} open={open} setOpen={setOpen}/>
      <BasicModal openModal={openModal} setOpenModal={setOpenModal}/>
      {item.map((item) => {
        console.log(item);
        return (
          <div key={item.id}>
            <p>{item.value}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
