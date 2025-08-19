"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getUserProfile } from "@/service/api";
import { Profile } from "@/service/models";

type UseUserResult = {
  user: Profile | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const useUser = (): UseUserResult => {
  const { data, isLoading, isError } = useQuery<Profile>({
    queryKey: QUERY_KEYS.PROFILE,
    queryFn: getUserProfile,
  });
  console.log(data);

  return {
    user: data,
    isLoading,
    isError,
  };
};
