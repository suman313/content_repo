"use client";
import "./post1.css";
import { useEffect, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import listOfSkills from "./json";
import deleteIcon from "../assets/delete.svg";
import Image from "next/image";

export default function Page() {
  const [isClearable, setIsClearable] = useState(false);
  const [isSearchable, setIsSearchable] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  // const [isMulti, setIsMulti] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<
    { value: string; label: string }[]
  >([]);
  useEffect(() => {
    console.log(isSearchable);
  });

  const handleChange = (
    event: SingleValue<{ value: string; label: string }>
  ) => {
    let newArray: { value: string; label: string }[] | undefined[] = [
      ...selectedSkills,
    ];
    if (event?.label !== undefined) newArray.push(event);
    setSelectedSkills(newArray);
    console.log(newArray);
  };
  const handleMultiChange = (
    event: MultiValue<{ value: string; label: string }>
  ) => {
    let newArray: any = event;
    // newArray.push(event);
    setSelectedSkills(newArray);
  };
  const removeSkills = () => {
    setSelectedSkills([]);
  };
  return (
    <>
      <div className="absolute flex flex-col justify-around  gap-6 top-[20%] left-[25%]  w-fit h-[500px] container p-5 rounded-lg">
        <div className="flex justify-between items-center gap-2 w-fit">
          <div className="flex flex-row justify-center items-center m-3 gap-2">
            <p className="text-xl font-medium text-[#efe9e9]">Searchable</p>
            <label>
              <input type="checkbox" checked={isSearchable} />
              <span onClick={() => setIsSearchable((prev) => !prev)}></span>
            </label>
          </div>
          <div className="flex flex-row justify-center items-center m-3 gap-2">
            <p className="text-xl font-medium text-[#efe9e9]">Clearable</p>
            <label>
              <input type="checkbox" checked={isClearable} />
              <span onClick={() => setIsClearable((prev) => !prev)}></span>
            </label>
          </div>
          <div className="flex flex-row justify-center items-center m-3 gap-2">
            <p className="text-xl font-medium text-[#efe9e9]">Disabled</p>
            <label>
              <input type="checkbox" checked={isDisabled} />
              <span onClick={() => setIsDisabled((prev) => !prev)}></span>
            </label>
          </div>
          <div className="flex flex-row justify-center items-center m-3 gap-2">
            <p className="text-xl font-medium text-[#efe9e9]">Loading</p>
            <label>
              <input type="checkbox" checked={isLoading} />
              <span onClick={() => setIsLoading((prev) => !prev)}></span>
            </label>
          </div>
          {/* <div className="flex flex-row justify-center items-center m-3 gap-2">
            <p className="text-xl font-medium text-[#efe9e9]">IsMulti</p>
            <label>
              <input type="checkbox" checked={isMulti} />
              <span onClick={() => setIsMulti((prev) => !prev)}></span>
            </label>
          </div> */}
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <p className="text-4xl font-bold text-white">Add Skills</p>

          <Select
            className="w-[50%] p-2"
            classNamePrefix="select"
            // defaultValue={colourOptions[0]}
            isMulti
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={listOfSkills}
            onChange={(selectedOption) => handleMultiChange(selectedOption)}
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          {selectedSkills.map((item) => (
            <p className="text-white bg-slate-700 p-2 rounded-md">
              {item.label}
            </p>
          ))}
          {/* {selectedSkills.length > 0 && (
            <span className="skill-span" onClick={removeSkills}>
              <Image src={deleteIcon} width={30} height={30} alt="deleteIcon" />
            </span>
          )} */}
        </div>
      </div>
    </>
  );
}
