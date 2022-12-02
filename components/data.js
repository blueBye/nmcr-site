import {
  AdjustmentsIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  EmojiHappyIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "دسترسی در همه جا",
  desc: "با میدان سایبری ما می‌تونی روی همه دستگاه‌هات به همه امکانات میدان سایبری دسترسی داشته باشی. دیگه نگران هزینه سخت‌افزار نباش. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "سادگی",
      desc: "دیگه نیازی نیست درگیر پیکربندی ابر و ماشین مجازی بشی",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "گزارش لحظه به لحظه",
      desc: "از تمام چیزایی که مهم‌اند گزارش بگیر",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "فقط با یه کلیک",
      desc: "مرورگر را باز کن و سرویس بگیر",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
