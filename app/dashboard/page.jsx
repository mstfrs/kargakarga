"use client";
import Boardsview from "@/components/Boardsview/Boardsview";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState } from "react";
import { SWRConfig } from "swr";
import { getFetcher } from "@/services/serviceHelper";
import axios from "axios";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profile = JSON.parse(localStorage.getItem("Auth"));
  return (
    <SWRConfig value={{fetcher:(url)=>axios(url,{ headers: { Authorization: "Bearer " + profile.data.token } }).then(r=>r.data)}}>
    <div className="overflow-hidden ">
      <Header />
      <div className="flex flex-col md:flex-row justify-start">
        <div className={`${isOpen ? "min-w-[354px]" : ""} md:h-[90vh] !relative`}>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="w-[100vw] md:h-[88vh] overflow-auto py-6 px-8 bg-[#F3F6FD] ">
          <Boardsview />
        </div>
      </div>
    </div>
    </SWRConfig>
  );
};

export default Dashboard;
