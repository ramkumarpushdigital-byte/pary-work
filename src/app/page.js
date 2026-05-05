import {
  Hero,
  About,
  WhatIsParylene,
  Application,
  WhyChooseParylene,
  Advantages,
  Process,
  Facility,
  ComparisonChart,
  Industries,
  CtaBanner,
  Footer,
  SectionsBgWrap,
} from "./components/Site";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <WhatIsParylene />
      <Application />
      <SectionsBgWrap>
        <WhyChooseParylene />
        <Advantages />
        <Process />
        <Facility />
        <ComparisonChart />
      </SectionsBgWrap>
      <Industries />
      <CtaBanner />
      <Footer />
    </main>
  );
}
