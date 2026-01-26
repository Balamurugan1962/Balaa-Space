"use client";
import { useState } from "react";
import { HistTab } from "./components/HistTab";
import { Command } from "./components/Command";
import { Error } from "./components/Error";
import { commands } from "@/constants/Command_items";
import { useRouter } from "next/navigation";

type contentType = {
  type: "user" | "system";
  content: React.ReactNode;
};

export function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<contentType[]>([]);
  const router = useRouter();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") return;

    const value = inputValue.trim();
    if (!value) {
      setHistory([
        {
          type: "user",
          content: "",
        },
        ...history,
      ]);
      setInputValue("");
      return;
    }

    if (value === "exit") {
      router.push("/");
      return;
    }

    if (value === "clear") {
      setHistory([]);
      setInputValue("");
      return;
    }

    if (value === "help") {
      setHistory((prevHistory) => {
        const userContent: contentType = {
          type: "user",
          content: value,
        };

        const newHistory = [userContent, ...prevHistory];

        for (const command of commands) {
          const systemContent: contentType = {
            type: "system",
            content: (
              <div className="flex gap-2">
                <Command>{command.name}</Command>
                <p>-</p>
                <p className="font-semibold">{command.description}</p>
              </div>
            ),
          };
          newHistory.unshift(systemContent);
        }

        return newHistory;
      });
      setInputValue("");
      return;
    }

    if (value.startsWith("echo")) {
      const newValue = value.split(" ").slice(1).join(" ");

      setHistory((prevHistory) => {
        const userContent: contentType = {
          type: "user",
          content: value,
        };
        const systemContent: contentType = {
          type: "system",
          content: `${newValue}`,
        };

        const newHistory = [systemContent, userContent, ...prevHistory];

        return newHistory;
      });
      setInputValue("");
      return;
    }

    setHistory((prevHistory) => {
      const userContent: contentType = {
        type: "user",
        content: value,
      };

      const systemContent: contentType = {
        type: "system",
        content: <Error>Invaild Commad!</Error>,
      };

      const newHistory = [systemContent, userContent, ...prevHistory];

      return newHistory;
    });
    setInputValue("");
    return;
  }

  return (
    <div className="flex flex-col py-1 px-1 md:py-4 md:px-4 h-dvh w-dvw">
      <div className="flex-1 flex flex-col justify-end w-full h-full">
        <h1 className="text-xl md:text-2xl border border-muted p-3">
          Terminal
        </h1>
        <div className="flex-1 overflow-y-auto h-full text-sm md:text-lg flex flex-col-reverse border-l border-r  border-muted [&::-webkit-scrollbar]:hidden">
          {history.map((data, index) => (
            <HistTab key={index} type={data.type}>
              {data.content}
            </HistTab>
          ))}
        </div>
        <input
          className="border border-muted p-3 focus:outline-none"
          placeholder="Enter 'help' to get more details"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
