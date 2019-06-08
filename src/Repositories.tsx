import * as React from "react";
import { useGetUserQuery } from "~/src/generated/graphql";
import { Repository } from "./Repository";

export const Repositories: React.FC = () => {
  const [res] = useGetUserQuery({ variables: { login: "otofu-square" } });

  const edges =
    res.data &&
    res.data.user &&
    res.data.user.starredRepositories &&
    res.data.user.starredRepositories.edges;

  if (res.fetching) return <div>Loading...</div>;
  if (res.error)
    return (
      <div>
        <p>{res.error.name}</p>
        <p>{res.error.message}</p>
      </div>
    );
  return (
    <ul>
      {edges &&
        edges.map(
          edge =>
            edge && (
              <Repository
                key={edge.node.id}
                url={edge.node.url}
                nameWithOwner={edge.node.nameWithOwner}
                description={edge.node.description || ""}
                primaryLanguageName={
                  edge.node.primaryLanguage
                    ? edge.node.primaryLanguage.name
                    : "none"
                }
              />
            )
        )}
    </ul>
  );
};
