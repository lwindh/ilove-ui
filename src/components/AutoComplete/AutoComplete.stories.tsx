import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AutoComplete } from "./AutoComplete";
interface LakerPlayerProps {
  value: string;
  number: number;
}
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}
const SimpleComplete = () => {
  const lakers = [
    "bradley",
    "pope",
    "caruso",
    "cook",
    "cousins",
    "james",
    "AD",
    "green",
    "howard",
    "kuzma",
    "McGee",
    "rando",
  ];
  const handleFetch = (query: string) => {
    return lakers
      .filter((name) => name.includes(query))
      .map((name) => ({ value: name }));
  };
  /* const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  }; */

  // const renderOption = (item: DataSourceType) => {
  //   const itemWithGithub = item as DataSourceType<GithubUserProps>
  //   return (
  //     <>
  //       <h2>Name: {itemWithGithub.value}</h2>
  //       <p>url: {itemWithGithub.url}</p>
  //     </>
  //   )
  // }
  return (
    <AutoComplete
      style={{ width: "300px" }}
      fetchSuggestions={handleFetch}
      onSelect={action("selected")}
      //renderOption={renderOption}
    />
  );
};

storiesOf("AutoComplete Component", module).add("AutoComplete", SimpleComplete);
