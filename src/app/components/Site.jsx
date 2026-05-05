import styles from "./Site.module.css";

/* ====================================================
   SHARED BG WRAPPER (Benefits + Advantages + Process)
   ==================================================== */
export function SectionsBgWrap({ children }) {
  return <div className={styles.sectionsBgWrap}>{children}</div>;
}

/* ====================================================
   HERO
   ==================================================== */
const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "What is Parylene", href: "#what-is-parylene" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Applications", href: "#applications" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <>
      {/* Fixed glassmorphic header */}
      <header className={styles.hrTopBar}>
        <div className={styles.hrTopBarInner}>
          <a href="#home" className={styles.hrLogoLink}>
            <img
              src="/images/logo.png"
              alt="Parylene — Advanced Polymer"
              className={styles.hrLogo}
            />
          </a>

          <nav className={styles.hrPill} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={link.active ? styles.hrLinkActive : styles.hrLink}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero section — no positioning, BG via CSS */}
      <section className={styles.hrHero} id="home">
        <div className={styles.hrCopy}>
          <h1 className={styles.hrH1}>
            Advanced Conformal <span className={styles.hrGreen}>Coating</span> Solutions for
            <br />
            <span className={styles.hrBlue}>Ultimate Protection</span>
          </h1>

          <p className={styles.hrSub}>
            Parylene delivers ultra-thin, conformal coating technology that
            protects critical components across industries — from
            electronics to medical devices.
          </p>

          <div className={styles.hrBtns}>
            <button type="button" className={styles.hrBtnFill}>
              Get a Quote
            </button>
            <button type="button" className={styles.hrBtnOutline}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ====================================================
   ABOUT
   ==================================================== */
export function About() {
  return (
    <section className={styles.abAbout} id="about">
      <div className={styles.abInner}>
        <div className={styles.abText}>
          <span className={styles.abEyebrow}>ABOUT US</span>
          <h2 className={styles.abTitle}>About <span style={{color:"#016B3F"}} >Parylene</span></h2>
          <p className={styles.abBody}>
            Parylene is a specialized nano-coating solution provider offering
            advanced conformal coating technology for high-performance
            applications. <br /> Inspired by India&apos;s growing semiconductor and
            manufacturing ecosystem, Parylene was established to bring world-class
            coating solutions locally — eliminating dependency on overseas services
            while improving quality, speed, and cost-efficiency. <br /> <span style={{paddingTop:"70px"}}>Our facility, built with global expertise, delivers precision coating solutions
            tailored for modern industries. </span>
          </p>
        </div>
        <div className={styles.abImageWrap}>
          <img
            src="/images/about.png"
            alt="Parylene nano-coating applied to circuit board"
            className={styles.abImage}
          />
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   WHAT IS PARYLENE
   ==================================================== */
const REASONS = [
  {
    title: "Waterproofing Electronics",
    desc: "Parylene provides a pinhole-free, ultra-thin barrier that protects electronics from moisture, corrosion, and contaminants.",
    src: "/images/pary1.png",
  },
  {
    title: "Dielectric Strength",
    desc: "Parylene offers high dielectric insulation, allowing safe high-voltage performance even in thin layers.",
    src: "/images/pary2.png",
  },
  {
    title: "Dry Lubricity",
    desc: "Parylene creates a low-friction surface that reduces wear and improves component longevity without lubrication.",
    src: "/images/pary3.png",
  },
  {
    title: "Adhesion Tie Layer",
    desc: "Parylene enhances bonding between surfaces, improving coating adhesion and durability.",
    src: "/images/pary4.png",
  },
  {
    title: "Biocompatibility",
    desc: "Parylene is FDA-approved and safe for use in medical and implantable devices.",
    src: "/images/pary5.png",
  },
  {
    title: "Ruggedization",
    desc: "Parylene strengthens delicate components and PCBs, increasing resistance to physical stress.",
    src: "/images/pary6.png",
  },
];

export function WhatIsParylene() {
  return (
    <section className={styles.wpSection} id="what-is-parylene">
      <div className={styles.wpInner}>
        <div className={styles.wpLeft}>
          <span className={styles.wpEyebrow}>WHAT IS PARYLENE</span>
          <h2 className={styles.wpTitle}>
            What is{" "} <br />
            <span className={styles.wpTitleAccent}>Parylene Coating</span> ?
          </h2>
          <h3 className={styles.wpSubtitle}>
            PARYLENE COATING IS THE MODERN TECHNOLOGY IN CONFORMAL COATING
          </h3>
          <p className={styles.wpBody}>
            Parylene is a conformal protective polymer coating material utilized
            to uniformly protect any component configuration on such diverse
            substrates as metal, glass, paper, resin, plastic, ceramic, ferrite
            &amp; silicon.
          </p>
          <div className={styles.wpMoleculesWrap}>
            <img
              src="/images/pary_left.png"
              alt="Molecular structures of Parylene variants"
              className={styles.wpMolecules}
            />
            <p className={styles.wpCaption}>
              Molecular structures of Parylene variants — N, C, D, F, and HT
            </p>
          </div>
        </div>

        <div className={styles.wpRight}>
          <h3 className={styles.wpRightTitle}>Top Reasons to use Parylene</h3>
          <ul className={styles.wpReasons}>
            {REASONS.map((r) => (
              <li key={r.title} className={styles.wpReason}>
               <img src={r.src} alt={r.title} />
                <div className={styles.wpReasonText}>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   APPLICATION
   ==================================================== */
const APPS = [
  { src: "/images/app-1.png", alt: "PCB circuit board with conformal coating", title: "PCBs", subtitle: "Printed circuit boards" },
  { src: "/images/app-2.png", alt: "Semiconductor wafer and dies", title: "Semiconductor", subtitle: "Wafers & dies" },
  { src: "/images/app-3.png", alt: "Electronic sensors and microchips", title: "Sensors", subtitle: "MEMS & detectors" },
  { src: "/images/app-4.png", alt: "Wire harnesses and cables", title: "Cables", subtitle: "Wire harnesses" },
  { src: "/images/app-5.png", alt: "LED illumination arrays", title: "LED", subtitle: "Illumination arrays" },
  { src: "/images/app-6.png", alt: "Medical implants and devices", title: "Medical", subtitle: "Implants & devices" },
];

export function Application() {
  return (
    <section className={styles.apSection} id="applications">
      <div className={styles.apHeader}>
        <span className={styles.apEyebrow}>APPLICATION</span>
        <h2 className={styles.apTitle}>Trusted across critical systems.</h2>
      </div>
      <div className={styles.apGrid}>
        {APPS.map((app, i) => (
          <div key={i} className={styles.apCard}>
            <div className={styles.apCardImageWrap}>
              <img src={app.src} alt={app.alt} className={styles.apCardImg} />
            </div>
            <div className={styles.apCardInfo}>
              <div className={styles.apCardText}>
                <span className={styles.apCardTitle}>{app.title}</span>
                <span className={styles.apCardSubtitle}>{app.subtitle}</span>
              </div>
              <div className={styles.apCardArrow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ====================================================
   WHY CHOOSE PARYLENE
   ==================================================== */
const BADGES_LEFT = [
  { label: "Transparent and optically clear", icon: "/images/benefit-1.png" },
  { label: "No thermal stress during application", icon: "/images/benefit-2.png" },
  { label: "Biocompatible and environmentally friendly", icon: "/images/benefit-3.png" },
  { label: "Free from pinholes and defects", icon: "/images/benefit-4.png" },
];

const BADGES_RIGHT = [
  { label: "Completely conformal and uniform", icon: "/images/benefit-5.png" },
  { label: "Ultra-thin and lightweight", icon: "/images/benefit-6.png" },
  { label: "Moisture and chemical resistant", icon: "/images/benefit-7.png" },
  { label: "High dielectric strength", icon: "/images/benefit-8.png" },
];

export function WhyChooseParylene() {
  return (
    <section className={styles.wcSection} id="benefits">
      <div className={styles.wcBgWash} aria-hidden="true" />

      <div className={styles.wcInner}>
        {/* LEFT COLUMN — text first, icon after, dot connector image */}
        <div className={`${styles.wcCol} ${styles.wcColLeft}`}>
          {BADGES_LEFT.map((b, i) => (
            <div key={b.label} className={`${styles.wcBadge} ${styles.wcBadgeLeft}`}>
              <span className={styles.wcBadgeLabel}>{b.label}</span>
              <div className={styles.wcBadgeIcon}>
                <img src={b.icon} alt={b.label} className={styles.wcBadgeIconImg} />
              </div>
              <img
                src={`/images/left-dot${i + 1}.png`}
                alt=""
                className={styles.wcDotImg}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* CENTER CIRCLE */}
        <div className={styles.wcCenter}>
          <div className={styles.wcCenterCircle}>
            <img
              src="/images/Ellipse 12.png"
              alt=""
              className={styles.wcCenterImg}
            />
            <div className={styles.wcCenterOverlay}>
              <span className={styles.wcEyebrow}>Why Parylene? (Key Benefits)</span>
              <h2 className={styles.wcTitle}>Why Choose Parylene</h2>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — dot connector image, icon, text */}
        <div className={`${styles.wcCol} ${styles.wcColRight}`}>
          {BADGES_RIGHT.map((b, i) => (
            <div key={b.label} className={`${styles.wcBadge} ${styles.wcBadgeRight}`}>
              <img
                src={`/images/right-dot${i + 1}.png`}
                alt=""
                className={styles.wcDotImg}
                aria-hidden="true"
              />
              <div className={styles.wcBadgeIcon}>
                <img src={b.icon} alt={b.label} className={styles.wcBadgeIconImg} />
              </div>
              <span className={styles.wcBadgeLabel}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   ADVANTAGES
   ==================================================== */
const ADV_CARDS = [
  {
    title: "PHYSICAL",
    items: [
      "Nano-level precision coating",
      "Uniform even on complex surfaces",
      "Controlled thickness",
    ],
    side: "left",
  },
  {
    title: "Barrier Protection",
    items: [
      "Resistant to moisture, chemicals, and corrosion",
      "Prevents gas permeability",
    ],
    side: "right",
  },
  {
    title: "Electrical",
    items: ["Excellent insulation", "Anti-static properties"],
    side: "left",
  },
  {
    title: "Mechanical",
    items: ["Smooth surface (dry lubrication)", "No stress during coating"],
    side: "right",
  },
  {
    title: "Thermal",
    items: ["Withstands extreme temperatures"],
    side: "left",
  },
];

export function Advantages() {
  return (
    <section className={styles.adSection}>
      <div className={styles.adBgWash} aria-hidden="true" />

      <div className={styles.adHeader}>
        <span className={styles.adEyebrow}>ADVANTAGES</span>
        <h2 className={styles.adSectionTitle}>Parylene Advantages</h2>
      </div>

      <div className={styles.adCardGrid}>
        {ADV_CARDS.map((card, idx) => (
          <article
            key={idx}
            className={`${styles.adCard} ${
              card.side === "left" ? styles.adCardLeft : styles.adCardRight
            }`}
          >
            <div className={styles.adCardImage}>
              <img
                src="/images/advantage.png"
                alt={card.title}
                className={styles.adCardImg}
              />
            </div>
            <div className={styles.adBody}>
              <h3 className={styles.adCardTitle}>{card.title}</h3>
              <ul className={styles.adList}>
                {card.items.map((it) => (
                  <li key={it}>
                    <span className={styles.adBullet} aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ====================================================
   PROCESS
   ==================================================== */
const STEPS = [
  {
    n: 1,
    title: "Vaporization",
    desc: "Raw material is converted into vapor under controlled temperature",
  },
  {
    n: 2,
    title: "Pyrolysis",
    desc: "Vapor transforms into reactive monomers",
  },
  {
    n: 3,
    title: "Deposition",
    desc: "Monomers form a thin polymer layer on the surface in a vacuum",
  },
  {
    n: 4,
    title: "Cold Trap",
    desc: "Excess material is safely captured and disposed",
  },
];

const RIGHT_LABELS = [
  ["Raw material", "(Dimer)"],
  ["Reactive Monomer", "(Gas Phase)"],
  ["Coating on Substrate", "(Polymer Layer)"],
  ["Excess Material", "(Captured)"],
];

export function Process() {
  return (
    <section className={styles.prSection} id="process">
      <div className={styles.prHeader}>
        <span className={styles.prEyebrow}>COATING PROCESS</span>
        <h2 className={styles.prTitle}>How Parylene Coating Works</h2>
      </div>

      <div className={styles.prContent}>
        <div className={styles.prSteps}>
          <div className={styles.prConnector} aria-hidden="true" />
          {STEPS.map((s) => (
            <div key={s.n} className={styles.prStep}>
              <div className={styles.prIconWrap}>
                <div className={styles.prIcon}>
                  <span className={styles.prNum}>{s.n}</span>
                </div>
              </div>
              <div className={styles.prStepBody}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.prDiagram}>
          <div className={styles.prDiagramImageWrap}>
            <img
              src="/images/coating.svg"
              alt="Parylene deposition system diagram"
              className={styles.prDiagramImage}
            />
          </div>
         
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   FACILITY
   ==================================================== */
const GALLERY = [
  { src: "/images/facility-main.png", alt: "Main facility floor", cls: "large" },
  { src: "/images/facility-1.png", alt: "Deposition chamber", cls: "sm" },
  { src: "/images/facility-2.png", alt: "Quality control lab", cls: "sm" },
  { src: "/images/facility-3.png", alt: "Component storage", cls: "sm" },
  { src: "/images/facility-4.png", alt: "Facility exterior", cls: "sm" },
];

export function Facility() {
  return (
    <section className={styles.fcSection}>
      <div className={styles.fcHeader}>
        <span className={styles.fcEyebrow}>OUR FACILITY</span>
        <h2 className={styles.fcTitle}>State-of-the-art Bangalore Facility</h2>
      </div>

      <div className={styles.fcGallery}>
        <div className={styles.fcGalleryMain}>
          <img
            src={GALLERY[0].src}
            alt={GALLERY[0].alt}
            className={styles.fcMainImg}
          />
        </div>
        <div className={styles.fcGalleryGrid}>
          {GALLERY.slice(1).map((item, i) => (
            <div key={i} className={styles.fcGridCell}>
              <img src={item.src} alt={item.alt} className={styles.fcGridImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   COMPARISON CHART
   ==================================================== */
const COLUMNS = ["ACRYLIC", "URETHANE", "EPOXY", "SILICONE", "PARYLENE"];

const ROWS = [
  ["Coating Quality", "Good", "Good", "Good", "Good", "Excellent"],
  ["Chemical Resistance", "Good", "Excellent", "Excellent", "Good", "Excellent"],
  ["Dielectric Strength", "Good", "Excellent", "Excellent", "Fair", "Excellent"],
  ["Adhesion", "Good", "Good", "Excellent", "Excellent", "Excellent"],
  ["Thermal Cycling", "Fair", "Good", "Good", "Excellent", "Excellent"],
  ["Abrasion Resistance", "Good", "Excellent", "Excellent", "Fair", "Good"],
  ["Application Stress", "High", "High", "High", "Low", "None"],
  ["Cure Required", "Yes", "Yes", "Fair", "Yes", "None"],
  ["Water Resistance", "Poor", "Good", "Good", "Fair", "Excellent"],
];


function getPillClass(value) {
  switch (value) {
    case "Excellent": return "ccPillGreen";
    case "Good": return "ccPillBlue";
    case "Fair": return "ccPillYellow";
    case "Poor": return "ccPillRed";
    case "High": return "ccPillRed";
    case "Low": return "ccPillGreen";
    case "None": return "ccPillGreen";
    case "Yes": return "ccPillYellow";
    default: return "ccPillBlue";
  }
}

export function ComparisonChart() {
  return (
    <section className={styles.ccSection}>
      <div className={styles.ccHeader}>
        <span className={styles.ccEyebrow}>COMPARISON</span>
        <h2 className={styles.ccTitle}>Conformal Coating Comparison Chart</h2>
      </div>

      <div className={styles.ccTableWrap}>
        <table className={styles.ccTable}>
          <thead>
            <tr>
              <th className={styles.ccFactorHead}>Performance<br />Facotors</th>
              {COLUMNS.map((c, i) => (
                <th
                  key={c}
                  className={i === 4 ? styles.ccHeadBest : styles.ccHead}
                >
                  {i===4?" ":c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, ri) => (
              <tr key={row[0]}>
                <td className={styles.ccFactor}>
                  <span
                    className={styles.ccIndicator}
                    aria-hidden="true"
                  />
                  {row[0]}
                </td>
                {row.slice(1).map((cell, ci) => (
                  <td key={ci} className={ci === 4 ? styles.ccCellBest : styles.ccCell}>
                    <span className={styles[getPillClass(cell)]}>{cell}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ====================================================
   INDUSTRIES
   ==================================================== */
const INDUSTRIES = [
  { label: "EV&\nAutomotive", img: "/images/serve1.png" },
  { label: "Electronics &\nSemiconductors", img: "/images/serve2.png" },
  { label: "Medical &\nHealthcare", img: "/images/serve3.png" },
  { label: "Aerospace &\nDefense", img: "/images/serve4.png" },
  { label: "Renewable\nEnergy", img: "/images/serve5.png" },
  { label: "Oil & Gas", img: "/images/serve6.png" },
  { label: "Industrial\nManufacturing", img: "/images/serve7.png" },
];

export function Industries() {
  return (
    <section className={styles.inSection} id="industries">
      <div className={styles.inHeader}>
        <span className={styles.inEyebrow}>INDUSTRIES</span>
        <h2 className={styles.inTitle}>Industries We Serve</h2>
      </div>

      <div className={styles.inRow}>
        {INDUSTRIES.map((item) => (
          <div key={item.label} className={styles.inCard}>
            <div className={styles.inIconBox}>
              <img src={item.img} alt={item.label} className={styles.inIconImg} />
            </div>
            <span className={styles.inLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ====================================================
   CTA BANNER
   ==================================================== */
export function CtaBanner() {
  return (
    <section className={styles.ctSection}>
      <div className={styles.ctBanner}>
        <div className={styles.ctContent}>
          <span className={styles.ctEyebrow}>Future of Protection</span>
          <h2 className={styles.ctTitle}>Built for Next-Gen Technologies</h2>
          <p className={styles.ctBody}>
            Parylene plays a critical role in protecting modern electronics,
            especially in electric vehicles, smart devices, and advanced medical
            systems — ensuring reliability in harsh environments.
          </p>
          <button type="button" className={styles.ctCta}>
            Get in touch
          </button>
        </div>
        <div className={styles.ctImageWrap}>
          <img
            src="/images/cta-car.png"
            alt="Advanced electronics with Parylene protection"
            className={styles.ctImage}
          />
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   FOOTER
   ==================================================== */
export function Footer() {
  return (
    <footer className={styles.frFooter} id="contact">
      <div className={styles.frInner}>
        <div className={styles.frHeader}>
          <span className={styles.frEyebrow}>CONTACT</span>
          <h2 className={styles.frTitle}>Get in Touch</h2>
        </div>

        <div className={styles.frAddresses}>
          <div className={styles.frAddressBlock}>
            <div className={styles.frAddressIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20V8l10-6 10 6v12H2z"/>
                <path d="M6 10v10M10 10v10M14 10v10M18 10v10"/>
                <path d="M2 10h20"/>
              </svg>
            </div>
            <div className={styles.frAddressBody}>
              <h3>FACTORY ADDRESS</h3>
              <p className={styles.frAddressName}>Parylene Asia Technologies Pvt Ltd</p>
              <p className={styles.frAddressDesc}>
                Doddaballapur Integrated Textile Park Ltd, SW-51, Phase II,
                Doddaballapur Apparel Park, Doddaballapur, Bangalore - 561 203.
                INDIA.
              </p>
            </div>
          </div>

          <div className={styles.frDivider} aria-hidden="true" />

          <div className={styles.frAddressBlock}>
            <div className={styles.frAddressIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"/>
                <path d="M9 22v-4h6v4M8 6h8M8 10h8M8 14h4"/>
              </svg>
            </div>
            <div className={styles.frAddressBody}>
              <h3>CORPORATE OFFICE</h3>
              <p className={styles.frAddressName}>INTENT InfoTech Building,</p>
              <p className={styles.frAddressDesc}>
                #226, INTENT InfoTech Building, Maria Street, Mariyannapalya, Near
                Manyata Tech Park, Bangalore – 560 024, INDIA.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.frContactBar}>
          <div className={styles.frBrand}>
            <img src="/images/logo.png" alt="Parylene" className={styles.frLogo} />
          </div>

          <div className={styles.frContactItem}>
            <div className={styles.frIconCircle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className={styles.frContactText}>
              <span className={styles.frContactLabel}>PHONE</span>
              <a href="tel:+919840264453">+91 98402 64453</a>
            </div>
          </div>

          <div className={styles.frBarDivider} aria-hidden="true" />

          <div className={styles.frContactItem}>
            <div className={styles.frIconCircle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div className={styles.frContactText}>
              <span className={styles.frContactLabel}>WEBSITE</span>
              <a href="https://www.parylene.com">www.parylene.com</a>
            </div>
          </div>

          <div className={styles.frBarDivider} aria-hidden="true" />

          <div className={styles.frContactItem}>
            <div className={styles.frIconCircle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className={styles.frContactText}>
              <span className={styles.frContactLabel}>EMAIL</span>
              <a href="mailto:enquiry@parylene.com">enquiry@parylene.com</a>
            </div>
          </div>

          <div className={styles.frSocial}>
            <span className={styles.frFollowLabel}>Follow us</span>
            <div className={styles.frSocialIcons}>
              <a href="#" aria-label="LinkedIn" className={styles.frSocialIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Email" className={styles.frSocialIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.frCopy}>
          <a href="#">Privacy Policy</a>
          <span className={styles.frSeparator}> | </span>
          <a href="#">Terms of Service</a>
          <span className={styles.frCopyRight}>© 2026 Parylene. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
