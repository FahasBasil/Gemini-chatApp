import React from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

export const Main = () => {
  const {
    onSend,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleEnterKey = (event) => {
    if (event.key == "Enter") onSend();
  };

  return (
    <div className="h-screen mx-auto w-screen lg:w-full ">
      <div className="flex flex-1 items-center  space-x-[150px] lg:space-x-[1200px] p-4 lg:p-9 lg:ml-5 ">
        <p className="">Gemini</p>
        <img
          className="w-[40px] rounded-[200px]"
          src={assets.user_icon}
          alt="User Icon"
        />
      </div>

      {!showResults ? (
        <div className="flex flex-col lg:items-center  gap-9 pt-[150px]">
          <div className="lg:text-7xl text-5xl lg:p-0  pr-[100px] text-gray-300 space-y-5 lg:space-y-3">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-red-500">
              Hello, User.
            </p>
            <p>How can I help you today ?</p>
          </div>
        </div>
      ) : (
        <div className="overflow-y-auto h-[70vh] px-[100px] hide-scrollbar">
          <div className="flex items-center gap-[38px] mt-4 mb-4">
            <img className="w-[40px] rounded-[100px]" src={assets.user_icon} />
            <p>{recentPrompt}</p>
          </div>
          <div className="flex items-start  gap-[20px]">
            <img className="w-[40px] mt-3" src={assets.gemini_icon} />
            {loading ? (
              <div className="w-full flex flex-col items-start gap-[20px] ">
                <div className="w-full animate-pulse flex px-3">
                  <hr className="w-[80%]  h-[20px] bg-gradient-to-r from-blue-500 opacity-[30%]  via-red-500 to-red-500 border-none rounded-md" />
                </div>
                <div className="w-full animate-pulse flex px-3 ">
                  <hr className="w-[80%] h-[20px] bg-gradient-to-r from-blue-500 opacity-[30%] via-red-500 to-red-500 border-none rounded-md" />
                </div>
                <div className="w-full  animate-pulse flex px-3">
                  <hr className="w-[80%] h-[20px] bg-gradient-to-r from-blue-500 opacity-[30%]  via-red-500 to-red-500 border-none rounded-md" />
                </div>
              </div>
            ) : (
              <p
                className="flex flex-col p-5 pr-[100px] items-start justify-end text-justify font-lg font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: resultData }}
              ></p>
            )}
          </div>
        </div>
      )}

      <div
        className={`relative flex justify-between lg:items-center w-[320px] lg:w-[750px] lg:ml-[280px] ${
          !showResults ? "lg:mt-[100px] mt-[200px]" : "fixed "
        } mr-[80px] bg-[#f0f4f9] p-2 rounded-2xl`}
      >
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Enter a prompt here"
            className="w-full bg-white p-2 rounded-xl border border-gray-300"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={handleEnterKey}
            value={input}
          />
        </div>
        <div className="flex gap-5 ml-4 p-2">
          <img
            className="w-[20px] cursor-pointer"
            src={assets.gallery_icon}
            alt=""
          />
          <img
            className="w-[20px] cursor-pointer"
            src={assets.mic_icon}
            alt=""
          />
          {input ? (
            <img
              onClick={() => onSend()}
              className="w-[20px] cursor-pointer"
              src={assets.send_icon}
              alt=""
            />
          ) : null}
        </div>
      </div>
      <div className="flex items-center justify-center mr-[80px] lg:p-0 p-3 mt-5">
        <h1 className="opacity-[45%] text-[13px]">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </h1>
      </div>
    </div>
  );
};
