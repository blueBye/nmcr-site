import { benefitOne, benefitTwo } from "../components/data";

import Benefits from "../components/benefits";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle
        pretitle="مزایای نقش مجاز"
        title=" چرا باید میدان سایبری ما را انتخاب کنی؟">
        میدان سایبری نقش مجاز بهترین میدان سایبری ایرانیه که می‌تونه تمام امکانات
         لازم برای راه‌اندازی سناریو‌های مورد نیازت را فراهم کنه. دیگه نگران تهیه سرور
         و نوشتن کد برای راه‌اندازی آزمایشگاه یا آموزش نباش...

      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="ویدئو معرفی را ببین"
        title="با میدان سایبری نقش مجاز آشنا شو">
        تا حالا از میدان سایبری استفاده نکردی؟
        می‌خوای بدونی با میدان سایبری چیکار میشه کرد؟
        ویدئو زیر را از دست نده.
      </SectionTitle>
      <Video />
      
      <SectionTitle pretitle="سوالات متداول" title="سوالاتی که ممکنه داشته باشی">
        اینجا چند تا از سوالاتی که در شروع ممکنه داشته باشی را جواب دادیم.
         اگر سوالت اینجا نیست کافیه بهمون ایمیل بزنی.
      </SectionTitle>
      <Faq />
      <Cta />
      <h1>test</h1>
    </>
  );
}
