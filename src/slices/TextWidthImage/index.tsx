import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  SliceComponentProps,
  PrismicRichText,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading as="h3" size="lg" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
  ),
};
/**
 * Props for `TextWidthImage`.
 */
export type TextWidthImageProps =
  SliceComponentProps<Content.TextWidthImageSlice>;

/**
 * Component for "TextWidthImage" Slices.
 */
const TextWidthImage = ({ slice }: TextWidthImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={"py-16 px-8"}
    >
      <div
        className={
          "grid grid-cols-1 desktop:grid-cols-2 place-items-center px-8"
        }
      >
        <PrismicNextImage
          field={slice.primary.image}
          width={300}
          height={300}
          alt={""}
          className={clsx(
            "rounded-lg",
            slice.variation === "imageRight" && "desktop:order-2"
          )}
          imgixParams={{ ar: "1:1", fit: "crop" }}
        />
        <div className={"grid gap-4"}>
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWidthImage;
