import { Button, Textarea, Spacer } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function App() {
  return (
    <>
      <div
        style={{
          top: "42%",
          left: "42%",
          position: "fixed",
        }}
      >
        <Textarea placeholder="질문" />
        <Spacer y={0.5} />
        <Button
          onClick={() => {
            var config = {
              method: "get",
              maxBodyLength: Infinity,
              url: "http://127.0.0.1:3000/api/req?pp=ㅎㅇ",
              headers: {},
            };
            axios(config)
              .then(function (response) {
                var data = JSON.stringify(response.data);
                data = JSON.parse(data).rp;
                toast(data);
                console.log(data);
              })
              .catch(function (error) {
                console.log(error);
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
