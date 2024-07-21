import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const handleSidebar = () => {
    setExtended((prev) => !prev);
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSend(prompt);
  };

  const { onSend, setPrevPrompt, prevPrompts, setRecentPrompt, newChat } =
    useContext(Context);

  return (
    <div
      className={`flex flex-col h-screen bg-[#f0f4f9] px-[14px] py-[20px] justify-between transition-all duration-300 ${
        extended ? "max-w-[250px] min-w-[200px]" : "max-w-[80px] min-w-[60px]"
      }`}
    >
      <div className="space-y-6">
        <img
          className="w-[20px] block cursor-pointer hover:bg-white duration-300 rounded-md"
          src={assets.menu_icon}
          onClick={handleSidebar}
        />
        <div
          className="flex bg-white rounded-2xl gap-2 items-center justify-center py-2 px-1 cursor-pointer transition-all duration-300"
          onClick={() => newChat()}
        >
          <img className="w-[15px]" src={assets.plus_icon} />
          {extended ? (
            <h1 className="text-sm opacity-[50%]">New chat</h1>
          ) : null}
        </div>
        {extended ? (
          <div className="flex flex-col gap-3 animate-fadeIn">
            <p>Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  className="flex items-start p-3 hover:bg-white  duration-300 gap-2 rounded-xl cursor-pointer "
                  onClick={() => loadPrompt(item)}
                >
                  <img className="w-[20px]" src={assets.message_icon} />
                  <p className="text-sm ">{item.slice(0, 18)} ....</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
