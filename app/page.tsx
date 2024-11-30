"use client";

import { UploadButton } from "@/utils/uploadthing";
// import { useUploadthing}
import { generateReactHelpers } from "@uploadthing/react";
import { OurFileRouter } from "./api/uploadthing/core";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export default function Home() {
  const { startUpload } = useUploadThing("imageUploader")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
