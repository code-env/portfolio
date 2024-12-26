import { ImageResponse } from "next/og";

export const runtime = "edge";

type params = {
  write: string;
};

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: params }) {
  const slug = params.write;

  const satoshi = fetch(
    new URL("@/fonts/Satoshi-Black.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="w-full h-full p-4 bg-white flex">
        <div tw="bg-white h-full w-full flex items-center justify-center flex-col">
          <div tw="flex-1 w-full flex items-center justify-center text-4xl">
            {slug.split("-").join(" ")}
          </div>
          <div tw="flex justify-end w-full items-center gap-2">
            <p>@bossadizenith</p>{" "}
            <img
              src="https://avatars.githubusercontent.com/u/135658967"
              tw="w-14 h-14 rounded-full border ml-2"
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await satoshi,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
