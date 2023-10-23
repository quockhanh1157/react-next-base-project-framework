import React from "react";
import Bounded from "@/components/Bounded";
import {createClient} from "@/prismicio";
import {PrismicRichText} from "@prismicio/react";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";

const FooterLayout = async () => {
  const client = createClient()

  let footer = await client.getSingle("footer")

  return (
    <Bounded as={"footer"} className={'bg-blue-300'}>
      {
        footer ?
          <div>
            <div className={'flex flex-row mobile:flex-col justify-between mobile:items-start gap-6'}>
              <div className={'flex-1 flex flex-col gap-5'}>
                <PrismicRichText field={footer.data.author}/>
                <PrismicRichText field={footer.data.description}/>
                <PrismicRichText field={footer.data.address}/>
              </div>
              <div className={'flex-1'}>
                <p className={'pb-5'}>{footer.data.navigationtext}</p>
                <nav>
                  <ul className="flex flex-col">
                    {footer.data.navigation.map(({link, label}) => (
                      <li key={label} className={'pb-1'}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className={'flex-1'}>
                <p className={'pb-5'}>{footer.data.followtext}</p>
                <nav>
                  <ul className="flex flex-col">
                    {footer.data.follow.map(({link, label,icon}) => (
                      <li key={label} className={'flex items-center'}>
                        <PrismicNextImage width={50} height={50} field={icon} alt={''}/>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className={'flex flex-col justify-between items-center gap-6'}>
              <p className="text-xs">&copy; {new Date().getFullYear()}</p>
            </div>
          </div> :
          <div className="flex flex-row mobile:flex-col justify-between items-center gap-6">
            <p className="text-xs">&copy; {new Date().getFullYear()}</p>
          </div>
      }
    </Bounded>
  );
};

export default FooterLayout;
