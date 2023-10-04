import { Content } from "@prismicio/client";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as={"h1"}
      size={"xl"}
      className={"md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"}
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 mb-4 mobile:mb-8 max-w-md">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <Bounded
          className="px-4 py-10 mobile:py-14 mobile:px-6 tablet:py-16"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 place-items-center text-center border">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
            <Button
              field={slice.primary.button_link}
              className="mb-8 mobile:mb-10"
            >
              {slice.primary.button_text}
            </Button>
            <PrismicNextImage
              field={slice.primary.image}
              className="drop-shadow-xl max-w-4xl w-full"
              alt=""
            />
          </div>
        </Bounded>
      )}
      {slice.variation === "horizontal" && (
        <Bounded
          className="px-4 py-10 mobile:py-14 mobile:px-6 tablet:py-16"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center border">
            <div className="grid grid-rows-1-[1fr,auto,auto] mobile:place-items-center mobile:text-center h-fit">
              <PrismicRichText
                field={slice.primary.heading}
                components={components}
              />
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
              <Button
                field={slice.primary.button_link}
                className="mb-8 mobile:mb-10"
              >
                {slice.primary.button_text}
              </Button>
            </div>
            <PrismicNextImage
              field={slice.primary.image}
              className="drop-shadow-xl max-w-4xl w-full"
              alt=""
            />
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Hero;
