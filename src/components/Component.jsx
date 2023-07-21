import React from "react";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

import getTokens from "../util/tokens";

const Component = () => {
  const client = ZoomMtgEmbedded.createClient();

  async function startMeeting() {
    const lessonId = "cc1f15f1-1db3-477b-8fce-fbd067fc0d20";

    const { signature, zak_token } = await getTokens(lessonId);

    let meetingSDKElement = document.getElementById("meetingSDKElement");

    client.init({
      debug: true,
      zoomAppRoot: meetingSDKElement,
      language: 'en-US',
      customize: {
        meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
        toolbar: {
          buttons: [
            {
              text: 'Custom Button',
              className: 'CustomButton',
              onClick: () => {
                console.log('custom button');
              }
            }
          ]
        }
      }
    });

    client.join({
      signature: signature,
      sdkKey: process.env.REACT_APP_SDK,
      meetingNumber: lessonId.slice(0, 8),
      password: "",
      userName: "Tobi Olanitori",
      userEmail: "Tobiolanitori@gmail.com",
      tk: "",
      zak: zak_token,
      role: 1,
    });
  }
  return (
    <main>
      <h1>Zoom Meeting Component View</h1>

      {/* For Component View */}
      <div id="meetingSDKElement">
        {/* Zoom Meeting SDK Component View Rendered Here */}
      </div>

      <button onClick={startMeeting}>Join Meeting</button>
    </main>
  );
};

export default Component;
