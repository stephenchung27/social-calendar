import React, {useState, useEffect} from 'react';

export default function () {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(res => setText(res));
  });

  return <div>{text}</div>
}