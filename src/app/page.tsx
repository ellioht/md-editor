"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function Home() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="bg-border p-1 h-full w-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full h-full border rounded-md bg-background"
        >
          <ResizablePanel defaultSize={50}>
            <CodeEditor
              value={code}
              language="js"
              placeholder="Please enter JS code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
              className="h-full"
            />
          </ResizablePanel>

          <ResizableHandle withHandle className="h-full border-2" />

          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
