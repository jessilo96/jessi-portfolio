import { Mulish } from "next/font/google";

const LOGO_MASK = "/about-logo.png";
const BG_IMG = "/about-bg-logo.jpg";
const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '1000'], 
  variable: '--font-mulish',
});
export function AboutMe() {
  return (
    <section className="w-full h-200 bg-[#020b3f] flex items-center justify-center px-6 md:px-10 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center items-center">
          <div
            className="relative w-[260px] md:w-[380px] aspect-square overflow-hidden"
            style={{
              WebkitMaskImage: "url(/about-logo.png)",
              maskImage: "url(/about-logo.png)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(316.67deg, #0017F4 0%, #00DAF2 103.08%)",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute inset-0 bg-no-repeat mix-blend-color-dodge"
              style={{
                backgroundImage: "url(/about-bg-logo.jpg)",
                backgroundSize: "200%",
                backgroundPositionX: "8%",
                backgroundPositionY: "35%",
                filter: "brightness(70%)",
              }}
            />
          </div>
        </div>
        <div className={`text-white space-y-6 ${mulish.className}`}>
          <p className="text-teal-300 tracking-widest text-3xl">About Me</p>  

          <h1 className="text-2xl md:text-3xl font-extrabold leading-snug">
            You can’t use up creativity. The more you use, the more you have in your significant mind.  
          </h1>

          <p className="text-s text-gray-300 max-w-lg leading-relaxed">
            I believe that hard work beats talent and that working in harmony together with your team is the way to accomplish goals. For 4 years of working in an IT industry as a designer, I have experienced a diverse type of softwares each presents its own challenges that gives me motivation to strive and do better each day, and to learn and share these experiences with my colleagues. I am a hard working person who in quality of work.
          </p>
        </div>

      </div>
    </section>
  );
}