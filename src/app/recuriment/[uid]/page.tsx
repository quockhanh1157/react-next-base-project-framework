import {Metadata} from "next";
import {notFound} from "next/navigation";
import {PrismicRichText} from "@prismicio/react";

import {createClient} from "@/prismicio";
import {PrismicNextImage} from "@prismicio/next";
import Bounded from "@/components/Bounded";

type Params = { uid: string };

export default async function Page({params}: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("recurimentpage", params.uid)
    .catch(() => notFound());

  console.log(page)
  return <Bounded
    className="px-4 py-10 mobile:py-14 mobile:px-6 tablet:py-16"
  >
    <h1 className={'text-center pb-32 font-bold text-7xl text-blue-500'}>{page.data.title}</h1>
    <div
      className={
        "grid grid-cols-1 desktop:grid-cols-2 px-8"
      }
    >
      <div className={'m-auto'}>
      <PrismicNextImage
        field={page.data.image}
        width={300}
        height={300}
        alt={""}
        imgixParams={{ar: "1:1", fit: "crop"}}
      />
      </div>
        <PrismicRichText field={page.data.description} components={{
          preformatted: ({ children }) => (
            <p className="text-slate-600 mb-8">{children}</p>
          ),
        }}/>
    </div>
  </Bounded>
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("recurimentpage", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("recurimentpage");

  return pages.map((page) => {
    return {uid: page.uid};
  });
}
