"use client";
import React from "react";
import { Button, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";
const NewIssuePage = () => {
  return (
    <div className="space-y-3 max-w-xl">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
