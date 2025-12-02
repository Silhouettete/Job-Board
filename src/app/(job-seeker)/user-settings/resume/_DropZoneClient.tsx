"use client";

import { UploadDropzone } from "@/services/uploadThing/components/uploadThing";
import { useRouter } from "next/navigation";

export function DropZoneClient() {
  const router = useRouter();
  return (
    <UploadDropzone
      endpoint="resumeUploader"
      onClientUploadComplete={() => router.refresh()}
    ></UploadDropzone>
  );
}
