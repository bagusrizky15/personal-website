import { ConversionRequest } from "@/app/pages/apps/conversion-model";

export const convertWordToPdf = async ({ file }: ConversionRequest): Promise<Blob> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    process.env.NEXT_PUBLIC_CONVERT_API + "/app/convert-word-to-pdf/convert",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Conversion failed");
  }

  return await response.blob();
};