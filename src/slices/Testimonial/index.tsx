import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as={"h2"} size={"md"} className={"text-center mb-12"}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};
/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial = async ({
  slice,
}: TestimonialProps): Promise<JSX.Element> => {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID("testimonial", item.testimonial.uid);
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className={"grid grid-cols-1 desktop:grid-cols-3 gap-6"}>
        {testimonials.map(
          (item, index) =>
            item && (
              <div
                key={index}
                className={
                  "border px-8 py-10 bg-white shadow-lg rounded-lg grid content-between desktop:px-14 desktop:py-16"
                }
              >
                <PrismicRichText
                  field={item.data.quote}
                  components={components}
                />
                <div className="flex items-center">
                  <PrismicNextImage
                    field={item.data.avatar}
                    alt={""}
                    width={70}
                    height={70}
                    className={"border rounded-full mr-5 aspect-square"}
                    imgixParams={{ ar: "1:1", fit: "crop" }}
                  />
                  <div>
                    <p className="text-base font-medium text-slate-700">
                      {item.data.name}
                    </p>
                    <p className="text-base text-slate-600">
                      {item.data.job_title}
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default Testimonial;
