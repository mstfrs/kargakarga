import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import NavTabs from "./NavTabs";
import Board from "./Board";
import { fetchFlags, getAllBoardandTasks } from "@/services/serviceHelper";
import { FaPlus } from "react-icons/fa";

const Boardsview = () => {
  const [boardData, setBoardData] = useState();
 
  const [containers, setContainers] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [currentContainerId, setCurrentContainerId] = useState();
  const [containerName, setContainerName] = useState('');
  const [itemName, setItemName] = useState('');
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  





  const fetchBoarsAndTasks = async () => {
    const profile = JSON.parse(localStorage.getItem("Auth"));

    try {
      const data = await getAllBoardandTasks(profile.data.token);
      const flagsData = await fetchFlags(profile.data.token);
      setBoardData(data.data);
      console.log(flagsData)       
    } catch (error) {
      console.log(error); // Hata durumunda hata mesajını göster
    }
  };

  useEffect(() => {
    fetchBoarsAndTasks();
  }, []);
  return (
    <div className="flex flex-col gap-6 overflow-y-auto">
      <div className="flex justify-between ">
        <h2 className="text-[#145389] text-[22px] font-semibold">
          Frontend Case
        </h2>
        <CiFilter size={20} className="cursor-pointer" />
      </div>
      <NavTabs />
      <div className="flex gap-[10px] overflow-x-auto">
        {boardData?.map((item, index) => (
          <Board item={item} key={index} />
        ))}

        <div className="justify-center border border-[#EAECF0] w-[319px] flex flex-col  items-center gap-[6px] bg-white rounded-xl">
          

          <div className=" flex flex-col w-[309px] justify-center items-center text-[#98A2B3] gap-4 text-2xl cursor-pointer">
          <FaPlus  size={40}/>
          <h3>Add Board</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boardsview;
