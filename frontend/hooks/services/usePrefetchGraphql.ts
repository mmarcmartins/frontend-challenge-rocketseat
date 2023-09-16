import { ExecutionResult } from 'graphql';
import { TypedDocumentString } from '@/gql/graphql';
import getQueryClient from '@/utils/getQueryClient';



export async function usePrefetchGraphql<TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    [
      // This logic can be customized as desired
      document,
      variables,
    ] as const,
    async ({ queryKey }) => {
      return fetch('http://localhost:3333', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: queryKey[0].toString(),
          variables: queryKey[1],
        }),
      }).then(response => response.json()) as Promise<ExecutionResult<TResult>>;
    }
  );
  return queryClient;
}