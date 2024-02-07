"use client";

import { useEffect, useState } from "react";

const ConditionalRendering = ({ id }) => {
  const [something, setSomething] = useState("blabla");

  useEffect(() => {}, [something]);

  return <section>{!id ? "no id provided" : "id provided : " + id}</section>;
};

export default ConditionalRendering;
