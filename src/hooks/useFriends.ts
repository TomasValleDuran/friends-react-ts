import axios from 'axios';
import { Friend } from "../types/Friend";
import { BASE_API_URL } from "../config/constants.ts";
import {useEffect, useState} from "react";

const fetchFriends = async (): Promise<Friend[]> => {
    const response = await axios.get(BASE_API_URL + "/friends");

    if (response.status !== 200) {
        throw new Error('Network response was not ok');
    }

    return response.data;
}

export const useFriends = () => {
    const [data, setData] = useState<Friend[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchFriends()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return { data, error, isLoading };
}