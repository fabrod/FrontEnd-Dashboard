import { useEffect } from "react";
import axios from "axios";
import React from "react";

export default function CreditSearch() {
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}`, {
        SearchDate: "2022-06-06",
        IncludeInactive: true,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return <div></div>;
}
