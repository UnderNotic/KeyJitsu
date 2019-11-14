import React from "react";
import { useParams } from "react-router-dom";

export default function() {
  const { encodedCategories } = useParams();

  return (
    <div className="row">
      <div className="col-12">{encodedCategories}</div>
    </div>
  );
}
