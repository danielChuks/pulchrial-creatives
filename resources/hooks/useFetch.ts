import React, { useState } from "react";
import { UseFetchProps } from "../interfaces";
import axios from "axios";

export default function useFetch<T>(url: string): UseFetchProps<T[]> {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const respone = await axios.get(url);
      setSuccess(true);
      setData(respone.data);
      setError(false);

      if (!respone) {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(true);
    }
  };

  return {
    data,
    fetchData,
    success,
    loading,
    error,
  };
}
