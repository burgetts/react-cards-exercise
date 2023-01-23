import {useState} from 'react';
import axios from 'axios';
import { v4 as uuid } from "uuid";

/* Toggle which way card is facing. */
const useFlip = (initialState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialState)
    const toggleIsFlipped = () => {
        setIsFlipped(isFlipped => !isFlipped)
    }
    return [isFlipped, toggleIsFlipped]
}

/* Use axios to get data from an API. */
const useAxios = (BASE_URL) => {
    const [data, setData] = useState([])
    const addData = async (urlParams = '') => {
        const res = await axios.get(`${BASE_URL}${urlParams}`)
        const newData = res.data
        setData([...data, {...newData, id: uuid()}])
    }
    return [data, addData]
}

export {useFlip, useAxios};