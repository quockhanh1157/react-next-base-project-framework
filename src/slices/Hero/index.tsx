import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import {PrismicRichText} from "@prismicio/react";
import {PrismicNextLink} from "@prismicio/next";
import {PrismicNextImage} from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({slice}: HeroProps): JSX.Element => {
  console.log(slice, '===')
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={{
        heading1: ({children}) => (
          <h1>{children}</h1>
        )
      }}/>
      <PrismicRichText field={slice.primary.body}/>
      <PrismicNextLink field={slice.primary.button_link}>
        {slice.primary.button_text}
      </PrismicNextLink>
      {slice.variation !== 'noImage' && <PrismicNextImage field={slice.primary.image}/>}
    </section>
  );
};

export default Hero;
