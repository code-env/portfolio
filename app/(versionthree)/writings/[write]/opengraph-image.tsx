import { allWritings } from "content-collections";
import { ImageResponse } from "next/og";

export const runtime = "edge";

type params = {
  write: string;
};

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: params }) {
  const slug = params.write;

  // const writing = allWritings.find(
  //   (write) => write._meta.path === slug && write.isPublished
  // );

  // if (!writing) {
  //   return new Response(
  //     JSON.stringify({
  //       message: "Could not find writing with slug: " + slug,
  //     }),
  //     {
  //       status: 404,
  //     }
  //   );
  // }

  // Font
  const interSemiBold = fetch(
    new URL("@/fonts/Satoshi-Black.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {slug} {allWritings.length}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
