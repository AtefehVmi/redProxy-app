"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// Define config interface for optional configuration
interface FetchConfig<T> {
  toastOnError?: boolean;
  toastOnSuccess?: boolean;
  transform?: (data: T) => T;
}

// Define the return type of the hook
interface FetchResult<T> {
  fetch: (...args: any[]) => Promise<T>;
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(
  fetchFunction: (...args: any[]) => Promise<T>,
  shouldFetch: boolean,
  config: FetchConfig<T> = { toastOnError: false, transform: undefined },
  ...args: any[]
): FetchResult<T> {
  const { toastOnError, transform } = config;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(shouldFetch ? true : false);
  const [error, setError] = useState<string | null>(null);

  function fetch(...args: any[]): Promise<T> {
    return new Promise((resolve, reject) => {
      let errorMessage = "";
      setLoading(true);
      setError(null);
      fetchFunction(...args)
        .then((data: T) => {
          setLoading(false);
          let transformed = data;
          if (transform) {
            transformed = transform(data);
          }
          setData(transformed);
          resolve(transformed);
        })
        .catch((err: any) => {
          setLoading(false);
          if (!err?.status) {
            errorMessage = "Something unexpected happened, please try again";
            setError(errorMessage);
          } else {
            const detail = err?.data?.detail || err?.response?.data?.detail;
            if (Array.isArray(detail)) {
              errorMessage = detail[0];
              setError(detail[0]);
            } else {
              errorMessage = detail;
              setError(detail);
            }
          }

          if (toastOnError) {
            if (typeof errorMessage !== "string") {
              errorMessage =
                "Couldn't complete your action. Please try again later.";
            }
            toast.error(errorMessage);
          }
          reject({ err, text: errorMessage });
        });
    });
  }

  useEffect(() => {
    if (shouldFetch) {
      fetch(...args);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldFetch, fetchFunction, ...args]);

  return { fetch, data, loading, error };
}

export default useFetch;
