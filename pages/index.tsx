import React from "react";

export default function Home() {
  return <div>hey</div>;
}

//  ----------- runs tsc command on cli and pretty pring any warnings/error-------------------
//  "check-types": "tsc --pretty --noEmit"
//
//  ----------- checks all the file for formatting issues excluding the ones in prettier ignore file---------
// "check-format": "prettier --check ."
//
//  ----------- check ofr any linting errors in any ts js tsx file ---------------------------
//  "check-lint": "eslint . --ext ts --ext tsx --ext js",
//
//  ----------- run all of the commands in sequence ---------------------
//  "test-all": "npm run check-format && npm run check-lint && npm run check-types && npm run build "
