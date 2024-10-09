"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function Home() {
  const [code, setCode] = useState(`# Enter markdown here`);
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
              language="md"
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
            <div className="w-full h-full">
              <MarkdownPreview source={code} style={{ padding: 16 }} className="h-full w-full" />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
