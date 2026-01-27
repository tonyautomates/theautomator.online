import Image from "next/image";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="px-4 pt-6 pb-12">
      <div className="mx-auto max-w-[390px] text-center">

        {/* Headline */}
        <h1 className="text-[30px] sm:text-[31px] font-[900] leading-[1.2] tracking-[-0.03em]">
  LET US DO <span className="text-[#2C88FF]">THE WORK</span>
  <br />
  FOR YOU
</h1>

        {/* Subheadline */}
        <p className="mt-2 text-[14px] leading-[1.6] text-[#5F6368]">
          we design and set up your new automation
          <br />
          to save you hours of work every week
        </p>

        {/* Card */}
        <div className="mt-8 flex justify-center">
          <div
            className="overflow-hidden rounded-[16px]"
            style={{
              boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
            }}
          >
            <Image
              src="/figma.png"
              alt="Live Automation Overview"
              width={207}
              height={345}
              priority
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <CtaButton />
        </div>

        {/* List */}
        <div className="mt-8 px-3 text-left">
          <h2 className="mb-3 text-[16px] font-semibold">
            What happens when you sign up:
          </h2>

          <ul className="list-disc list-inside space-y-1 text-[15px]">
            <li>you tell us more about you</li>
            <li>let us know what you want to automate</li>
            <li>or let us choose what works best for you</li>
            <li>we get on a short call and lay out the plan</li>
          </ul>
        </div>

      </div>
    </section>
  );
}