"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Content from "../TaskDetails/Content";
import LeftBar from "../TaskDetails/LeftBar";
import { BreadCrumb } from "primereact/breadcrumb";
import Link from "next/link";

const DetailModal = ({ visible, setVisible, task }) => {
  const [isOpen, setIsOpen] = useState(true);
  const items = [
    { label: "25Proje" },
    { label: "Projects" },
    {
      label: "Frontend Case",
      template: () => (
        <Link
          href="/dashboard"
          className="text-[#2083D7] text-sm font-semibold"
        >
          InputText
        </Link>
      ),
    },
  ];
  const home = { icon: "pi pi-home", url: "" };

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2 text-sm">
      <BreadCrumb model={items} home={home} />
    </div>
  );

  const footerContent = (
    <div>
      <Button label="Close" onClick={setVisible(false)} />
    </div>
  );

  return (
    <div className="card flex justify-content-center w-[680px]">
      <Dialog
        closable
        visible={visible}
        modal
        header={headerElement}
        footer={footerContent}
        style={{ width: "90%", maxWidth: "1180px", height: "full" }}
        onHide={() => setVisible(false)}
      >
        <div className="flex w-full">
          <Content visible={visible} setVisible={setVisible} task={task} />

          <div className="">
            <LeftBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DetailModal;
