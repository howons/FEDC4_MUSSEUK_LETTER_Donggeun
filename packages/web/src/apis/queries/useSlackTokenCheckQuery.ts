import { queryOptions } from '@tanstack/react-query';
import { slackInstance } from '@/apis/instance';
import queryKey from '@/apis/queryKeys';
import storage from '@/utils/storage';
import { AUTH_TOKEN } from '@/constants/storageKey';
import { User } from 'common/types';
import queryClient from '@/apis/queryClient';

type ResponseData = {
  user: User;
  token: string;
};

export const getTokenResult = async (slackToken: string) => {
  const { data } = await slackInstance.get<ResponseData>(`/slack/verification/user?token=${slackToken}`);

  storage('local').setItem(AUTH_TOKEN, data.token);
  queryClient.setQueryData(queryKey.auth, data.user);

  return data.user;
};

export const slackTokenCheckQueryOption = (slackToken: string) =>
  queryOptions({
    queryKey: queryKey.slack.token(slackToken),
    queryFn: () => getTokenResult(slackToken),
    staleTime: Infinity
  });
