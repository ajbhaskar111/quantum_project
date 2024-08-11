import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import ReactPlayer from "react-player";
import styled from "styled-components";

const CustDialog = styled(Dialog)`
  .p-dialog-content {
    padding: 0;
    overflow: visible;
  }
`;

export const QuantamVideo = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <a onClick={() => setVisible(true)} className="block">
        <div className="video-box relative overflow-hidden">
          <img
            src={props?.item?.video?.video_poster}
            className="w-full block"
          />
        </div>
      </a>

      <CustDialog
        visible={visible}
        style={{ width: "60%" }}
        headerStyle={{ display: "none" }}
      >
        <div className="grid bg-black-alpha-10 absolute text-white mt-0 w-full">
          <div className="col-9 text-left">
            <p>{props?.item?.title}</p>
          </div>
          <div className="col-3 text-right z-5">
            <i
              className="pi pi-times cursor-pointer"
              style={{ fontSize: "2rem" }}
              onClick={() => {
                if (!visible) return;
                setVisible(false);
              }}
            ></i>
          </div>
        </div>

        <ReactPlayer
          url={props?.item?.video?.video_url}
          width={"100%"}
          height={"100%"}
          playing={true}
          controls={true}
        />
      </CustDialog>
    </div>
  );
};
