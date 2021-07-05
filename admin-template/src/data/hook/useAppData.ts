import { useContext } from "react";
import AppContext from '../context/AppContext'

const useAppData = () => useContext(AppContext)

export default useAppData