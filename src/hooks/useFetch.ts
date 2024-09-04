import { useState, useEffect } from "react";
import { api } from "../service/axios.config";
import {useFetchType} from '../types'

export const useFetch = (endPoint: string):useFetchType =>{

    const [data, setData] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  

    const dataFetch = async (): Promise<any> => {
        try {
          const response = await api.get(endPoint);
          setData(response.data);
          setLoading(false);
        } catch (error: any) {
          setError(error.message);
          throw new Error(error.message);
        }
      };
    
      useEffect(() => {
        dataFetch();
      });


      return {
        data,
        error,
        loading
    }
}