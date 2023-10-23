import { Content } from "@prismicio/client";
import {JSXMapSerializer, SliceComponentProps} from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";


const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as={"h3"}
      size={"sm"}
      className={"md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0 truncate"}
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal mb-4 mobile:mb-8 max-w-md leading-10 block text-ellipsis max-h-25 overflow-hidden">
      {children}
    </p>
  ),
};

/**
 * Props for `Recuitment`.
 */
export type RecuitmentProps = SliceComponentProps<Content.RecuitmentSlice>;

/**
 * Component for "Recuitment" Slices.
 */
const Recuitment = ({ slice }: RecuitmentProps): JSX.Element => {

  return (
    <Bounded
      className="px-4 py-10 mobile:py-14 mobile:px-6 tablet:py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
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
          imgixParams={{ ar: "1:1", fit: "crop" }}
        />
        <div className={"grid gap-4 text-center desktop:text-start"}>
          <PrismicRichText field={slice.primary.title} components={components}/>
          <PrismicRichText field={slice.primary.description} components={components}/>
          <Button
            field={slice.primary.button_link}
            className="mb-8 mobile:mb-10"
          >
            {slice.primary.button_text}
          </Button>
        </div>
      </div>
    </Bounded>
  );
};

export default Recuitment;
