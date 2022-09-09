import { useEffect } from "react";
import React from "react";
import JSONApiResults from "../data-db/api-results.json";

type PropsTypes = {
  ApiResults?: object[];
  setApiResults?: (value: object[]) => void;
  setShowCards?: (value: boolean) => void;
};

export default function CreditSearch(props: PropsTypes) {
  useEffect(() => {
    for (
      let index = 0;
      index < JSONApiResults["results"][0]["applications"].length;
      index++
    ) {
      try {
        const element = JSONApiResults["results"][0]["applications"][index];
        props.ApiResults.push(element);
        props.setApiResults(props.ApiResults);
        props.setShowCards(true);
      } catch (error) {
      }
    }

  }, []);

  return <div></div>;
}
