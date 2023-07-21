import React from "react";

import { ZoomMtg } from "@zoomus/websdk";

import getTokens from "../util/tokens";
import "../css/client.css";

const Client = () => {
  // Load library
  ZoomMtg.setZoomJSLib("https://source.zoom.us/2.14.0/lib", "/av");

  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareWebSDK();

  // loads language files, also passes any error messages to the ui
  ZoomMtg.i18n.load("en-US");
  ZoomMtg.i18n.reload("en-US");

  async function startMeeting() {
    const lessonId = "cc1f15f1-1db3-477b-8fce-fbd067fc0d20";

    const { signature, zak_token } = await getTokens(lessonId);

    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: "http://localhost:3000/client",
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          sdkKey: process.env.REACT_APP_SDK,
          meetingNumber: lessonId.slice(0, 8),
          userName: "Tobi Olanitori",
          passWord: "",
          userEmail: "Tobiolanitori@gmail.com",
          zak: zak_token,
          tk: "",
          role: 1,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log("failed to join 1", error);
          },
        });
      },
      error: (error) => {
        console.log("failed to join 2", error);
      },
    });
  }

  return (
    <main>
      <h1>Zoom Meeting Client View</h1>

      <button onClick={startMeeting}>Join Meeting</button>
    </main>
  );
};

export default Client;
