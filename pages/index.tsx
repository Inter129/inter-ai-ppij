import { Button, Textarea, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function App() {
  let [ppv, setppv] = useState("");
  return (
    <>
      <div
        style={{
          top: "42%",
          left: "42%",
          position: "fixed",
        }}
      >
        <Textarea
          defaultValue={ppv}
          onChange={(v) => {
            setppv(v.target.value || ppv || "");
          }}
          placeholder="질문"
        />
        <Spacer y={0.5} />
        <Button
          onClick={() => {
            console.log(ppv);
            var config = {
              method: "get",
              maxBodyLength: Infinity,
              url: `/api/chat?query=${ppv}`,
              headers: {
                "sec-ch-ua":
                  '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
                Accept: "application/json, text/plain, */*",
                "sec-ch-ua-mobile": "?0",
                "User-Agent":
                  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                "sec-ch-ua-platform": '"macOS"',
                "Sec-Fetch-Site": "same-site",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Dest": "empty",
                "sec-gpc": "1",
                host: "builder.pingpong.us",
              },
            };

            axios(config)
              .then(function (response) {
                var data = response.data;
                data = JSON.stringify(data)
                  .replace("핑퐁이", "인터")
                  .replace("pingpong.us", "sangho.xyz")
                  .replace("핑퐁", "인터");
                toast(JSON.parse(data).response.replies[0].reply);
              })
              .catch(function (error) {
                toast.error("Error occurred: " + error);
              });
          }}
        >
          제출하기
        </Button>
      </div>
      <ToastContainer />
    </>
  );
}
