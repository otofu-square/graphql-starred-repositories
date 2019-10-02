import * as React from "react";
import { useGetUserQuery } from "~/src/generated/graphql";
import { Repository } from "./Repository";
import { PaginationButtons } from "./PaginationButtons";

type Props = {
  login: string;
};

type Variables = {
  login: string;
  first: number | null | undefined;
  last: number | null | undefined;
  after: string | null | undefined;
  before: string | null | undefined;
};

const useQuery = (login: Props["login"]) => {
  const [variables, setVariables] = React.useState<Variables>({
    login,
    first: 5,
    last: null,
    after: null,
    before: null
  });
  const [res] = useGetUserQuery({
    variables,
    requestPolicy: "cache-and-network"
  });

  const edges = (res.data?.user?.starredRepositories?.edges) || [];
  const pageInfo = res.data?.user?.starredRepositories?.pageInfo;
  const hasNextPage = pageInfo?.hasNextPage;
  const hasPreviousPage = pageInfo?.hasPreviousPage;
  const endCursor = pageInfo?.endCursor;
  const startCursor = pageInfo?.startCursor;
  const repositories = edges.map(edge => edge!.node);

  const onFirstClick = React.useCallback(() => {
    setVariables({
      login,
      first: 5,
      last: null,
      after: null,
      before: null
    });
  }, [login]);

  const onNextClick = React.useCallback(() => {
    if (!hasNextPage || !endCursor) return;
    setVariables({
      login,
      first: 5,
      last: null,
      after: endCursor,
      before: null
    });
  }, [endCursor, hasNextPage, login]);

  const onPreviousClick = React.useCallback(() => {
    if (!hasPreviousPage || !startCursor) return;
    setVariables({
      login,
      first: null,
      last: 5,
      after: null,
      before: startCursor
    });
  }, [hasPreviousPage, login, startCursor]);

  const onLastClick = React.useCallback(() => {
    setVariables({
      login,
      first: null,
      last: 5,
      after: null,
      before: null
    });
  }, [login]);

  return {
    fetching: res.fetching,
    error: res.error,
    hasNextPage,
    hasPreviousPage,
    repositories,
    onFirstClick,
    onNextClick,
    onPreviousClick,
    onLastClick
  };
};

export const Repositories: React.FC<Props> = ({ login }) => {
  const {
    fetching,
    error,
    hasNextPage,
    hasPreviousPage,
    repositories,
    onFirstClick,
    onNextClick,
    onPreviousClick,
    onLastClick
  } = useQuery(login);

  if (fetching) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );
  return (
    <div>
      <ul>
        {repositories.map(repository => (
          <Repository
            key={repository.id}
            url={repository.url}
            nameWithOwner={repository.nameWithOwner}
            description={repository.description || ""}
            primaryLanguageName={repository.primaryLanguage?.name || "none"}
          />
        ))}
      </ul>
      <PaginationButtons
        hasNextPage={!!hasNextPage}
        hasPreviousPage={!!hasPreviousPage}
        onFirstClick={onFirstClick}
        onNextClick={onNextClick}
        onPreviousClick={onPreviousClick}
        onLastClick={onLastClick}
      />
    </div>
  );
};
