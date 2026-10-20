import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Camera, CloudSnow, Map, Menu, Mountain, Phone, Snowflake, Ticket, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// ---------------------------------------------------------------- Content (from wolfcreekski.com, checked 2026-10-20)
const COMPANY = "Wolf Creek Ski Area";
const ABBR = "wcsa";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "(970) 264-5639";
const PHONE_HREF = "tel:+19702645639";
const SNOW_LINE = "1-800-SKI-WOLF";
const SNOW_HREF = "tel:+18007549653";
const PATROL = "(970) 264-4325";
const EMAIL = "wolfcreekski@wolfcreekski.com";
const MAIL = "P.O. Box 2800, Pagosa Springs, CO 81147";
const ORIGINAL = "https://wolfcreekski.com/";
const SHOP = "https://shop.wolfcreekski.com/";

const UP = "https://wolfcreekski.com/wp-content/uploads";
const LOGO = `${UP}/2021/08/WCS_transparent_full.png`;
const USFS = `${UP}/2021/08/us_forest_service_logo-4.png`;
const PHOTO = {
  hero: `${UP}/2026/09/WolfCreek_ScottDWSmith_d4a9472.jpg`,
  tickets: `${UP}/2026/08/WolfCreek_ScottDWSmith_d4a9510-e1787780318885.jpg`,
  events: `${UP}/2022/10/lombard-0306-scaled.jpg`,
  cat: `${UP}/2022/08/10-Snow-Cat-Trails-11.jpg-scaled.jpg`,
  one: `${UP}/2022/08/IMG_4523-scaled.jpg`,
  two: `${UP}/2022/08/SB-IMG_3429-61-scaled.jpg`,
  three: `${UP}/2022/08/SB-IMG_5055-1-scaled.jpg`,
  four: `${UP}/2022/08/SB-IMG_3779-1-1-scaled.jpg`,
};

const STATS = [
  ["430″", "average natural snowfall"],
  ["1,600", "skiable acres"],
  ["133", "named trails · 42 miles"],
  ["1,604′", "vertical, 10,300′ to 11,904′"],
];

const TERRAIN = [
  ["Beginner", 20, "green"],
  ["Intermediate", 35, "blue"],
  ["Advanced", 25, "black"],
  ["Expert", 20, "double"],
];

const LIFTS = [
  ["Raven", "High-speed detachable quad"],
  ["Charity Jane Express", "High-speed detachable quad"],
  ["Treasure Stoke", "High-speed detachable quad"],
  ["Alberta", "Quad chair"],
  ["Tumbler", "Quad chair"],
  ["Elma", "Triple chair"],
  ["Bonanza", "Triple chair"],
  ["Nova", "Double chair"],
  ["D. Boyce", "High-speed Poma"],
  ["Lynx", "Rolling conveyor"],
  ["Magic Carpet", "Rolling conveyor"],
  ["Wolf Pup Beginners", "Rolling conveyor"],
];

const PLAN = [
  { icon: Ticket, title: "Tickets & passes", text: "2026-27 season passes are on sale at regular rates. Lift tickets, group lessons and rentals can be bought ahead once the mountain runs seven days a week.", cta: "Shop online", href: SHOP },
  { icon: Snowflake, title: "Lessons", text: "Group and private lessons from the Wolf Creek Ski School, with the Wolf Pup beginner area and its own conveyor lift.", cta: "Lesson info", href: ORIGINAL },
  { icon: Mountain, title: "Rentals", text: "Ski and snowboard rentals at the base, plus Treasure Sports and Noel Sports for gear, tunes and retail deals.", cta: "Rental info", href: ORIGINAL },
  { icon: Map, title: "Lodging", text: "Stay in Pagosa Springs to the south or South Fork to the north. Both are a short drive over US-160 to the base area.", cta: "Find lodging", href: ORIGINAL },
];

const HOURS = [
  ["Lifts", "8:30 a.m. – 4:00 p.m.", "May open at 9:00 a.m. early season or during storms"],
  ["Ticket office", "8:15 a.m. – 4:30 p.m.", "Daily during the season"],
  ["Season", "Early November – early April", "Opening day depends on snow"],
];

const DINING = [
  ["Wolf Creek Lodge", "The main day lodge at the base area."],
  ["Continental Espresso Bar", "Coffee and a quick bite before first chair."],
  ["Pathfinder Bar", "The bar for après, listed with the base-area eateries."],
  ["Stokin' Boards", "Near the base area."],
];

// ---------------------------------------------------------------- Components
function SnowStake({ inches = 430 }) {
  const marks = [0, 100, 200, 300, 400];
  return (
    <div className="stake" aria-label={`Snow stake showing ${inches} inches of average snowfall`}>
      <div className="stake-pole">
        {marks.map((m) => <span key={m} className="stake-mark" style={{ bottom: `${(m / 450) * 100}%` }}><i />{m}″</span>)}
        <div className="stake-fill" style={{ height: `${(inches / 450) * 100}%` }} />
      </div>
      <p><strong>{inches}″</strong>average per season, the most in Colorado</p>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["#report", "Snow Report"], ["#mountain", "The Mountain"], ["#plan", "Plan a Trip"], ["#cams", "Webcams"], ["#contact", "Contact"]];
  return (
    <header className={`site-header${solid || open ? " is-solid" : ""}`}>
      <div className="alert-bar"><CloudSnow size={15} /> Snow report line: <a href={SNOW_HREF}>{SNOW_LINE}</a><span className="alert-sep">·</span><a href={SHOP} target="_blank" rel="noopener noreferrer">2026-27 passes on sale</a></div>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}><img src={LOGO} alt={`${COMPANY} logo`} className="logo" /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href={SHOP} target="_blank" rel="noopener noreferrer">Buy Tickets <ArrowUpRight size={16} /></a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src={PHOTO.hero} alt="Skiing deep powder at Wolf Creek" />
      <div className="hero-shade" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Continental Divide · Southern Colorado</p>
          <h1>The most snow<br />in Colorado.</h1>
          <p className="hero-lede">Family owned and operated on the Continental Divide, with 1,600 acres of terrain, no crowds and an average of 430 inches of natural snow every winter.</p>
          <div className="hero-actions">
            <a className="btn btn-red" href={SHOP} target="_blank" rel="noopener noreferrer">Tickets &amp; passes <ArrowRight size={18} /></a>
            <a className="btn btn-ghost" href="#report">Today's snow report</a>
          </div>
        </div>
        <SnowStake />
      </div>
    </section>
  );
}

function Report() {
  return (
    <section className="report" id="report" aria-label="Snow report">
      <div className="wrap report-grid">
        <div className="report-head"><CloudSnow size={22} /><div><strong>Snow report</strong><span>Updated every morning in season</span></div></div>
        {[["24 hr", "—"], ["Base depth", "—"], ["Lifts open", "— / 12"], ["Trails open", "— / 133"]].map(([k, v]) => (
          <div className="report-cell" key={k}><span>{k}</span><strong>{v}</strong></div>
        ))}
        <a className="report-link" href={SNOW_HREF}><Phone size={16} /> {SNOW_LINE}</a>
      </div>
      <p className="wrap report-note">Live numbers appear here from the mountain's snow report feed once the season starts.</p>
    </section>
  );
}

function MountainStats() {
  return (
    <section className="mountain" id="mountain">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow dark">The mountain</p>
          <h2>Big snow. Real terrain. Short lift lines.</h2>
        </div>
        <div className="stats">
          {STATS.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
        <div className="mountain-grid">
          <div className="terrain">
            <h3>Terrain mix</h3>
            {TERRAIN.map(([name, pct, cls]) => (
              <div className="terrain-row" key={name}>
                <span className={`diff diff-${cls}`} aria-hidden="true" />
                <span className="terrain-name">{name}</span>
                <span className="terrain-bar"><i style={{ width: `${pct * 2.4}%` }} /></span>
                <strong>{pct}%</strong>
              </div>
            ))}
            <p className="terrain-note">Longest run: Navajo Trail, 2 miles. Plus 10 km of Nordic trails. Uphill capacity of 14,780 riders an hour keeps the wait short.</p>
            <a className="text-link" href={ORIGINAL} target="_blank" rel="noopener noreferrer">Download the trail map <ArrowUpRight size={16} /></a>
          </div>
          <div className="lift-board" aria-label="Lift list">
            <div className="lift-board-head"><span>Lift</span><span>Type</span></div>
            {LIFTS.map(([name, type]) => (
              <div className="lift-row" key={name}><span className="lift-dot" aria-hidden="true" /><strong>{name}</strong><span>{type}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="strip" aria-label="Photos from Wolf Creek">
      {[PHOTO.one, PHOTO.two, PHOTO.cat, PHOTO.three, PHOTO.four].map((src, i) => (
        <img key={src} src={src} alt={`Wolf Creek terrain photo ${i + 1}`} loading="lazy" />
      ))}
    </section>
  );
}

function Plan() {
  return (
    <section className="plan" id="plan">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow dark">Plan your trip</p>
          <h2>Everything you need before first chair.</h2>
        </div>
        <div className="plan-grid">
          {PLAN.map(({ icon: Icon, title, text, cta, href }) => (
            <article className="plan-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={href} target="_blank" rel="noopener noreferrer">{cta} <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
        <div className="hours">
          {HOURS.map(([k, v, note]) => <div key={k}><span>{k}</span><strong>{v}</strong><small>{note}</small></div>)}
        </div>
      </div>
    </section>
  );
}

function Lodge() {
  return (
    <section className="lodge">
      <div className="lodge-photo" style={{ backgroundImage: `url(${PHOTO.events})` }} role="img" aria-label="Special events at Wolf Creek" />
      <div className="lodge-copy">
        <p className="eyebrow">At the base</p>
        <h2>Warm up, refuel, go again.</h2>
        <ul className="dining">
          {DINING.map(([n, t]) => <li key={n}><strong>{n}</strong><span>{t}</span></li>)}
        </ul>
        <p className="lodge-note">Special events and deals run all season, from early-season pass sales to the end-of-season Easter egg hunt.</p>
        <a className="btn btn-red" href={ORIGINAL} target="_blank" rel="noopener noreferrer">Events &amp; deals <ArrowUpRight size={18} /></a>
      </div>
    </section>
  );
}

function Cams() {
  const cams = [["Base area", PHOTO.tickets], ["Alberta lift", PHOTO.two], ["Summit", PHOTO.cat]];
  return (
    <section className="cams" id="cams">
      <div className="wrap">
        <div className="section-head row">
          <div><p className="eyebrow dark">Webcams</p><h2>See it before you drive it.</h2></div>
          <a className="text-link" href={ORIGINAL} target="_blank" rel="noopener noreferrer">All webcams <ArrowUpRight size={16} /></a>
        </div>
        <div className="cam-grid">
          {cams.map(([name, src]) => (
            <figure className="cam" key={name}>
              <img src={src} alt={`${name} webcam preview`} loading="lazy" />
              <figcaption><span className="live-dot" /> <Camera size={14} /> {name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="cam-note">Live feeds load here from the mountain's existing camera provider.</p>
      </div>
    </section>
  );
}

function Stewardship() {
  return (
    <section className="steward">
      <div className="wrap steward-row">
        <img src={USFS} alt="U.S. Forest Service" loading="lazy" />
        <p>Wolf Creek operates on National Forest land in partnership with the U.S. Forest Service, and reports on its stewardship, sustainability and community contributions every season.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Questions before you go?</h2>
          <dl className="directory">
            <div><dt>Main office</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd></div>
            <div><dt>Snow report</dt><dd><a href={SNOW_HREF}>{SNOW_LINE}</a></dd></div>
            <div><dt>Ski patrol (emergencies only)</dt><dd><a href="tel:+19702644325">{PATROL}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
            <div><dt>Mail</dt><dd>{MAIL}</dd></div>
          </dl>
        </div>
        <div className="map">
          <iframe title="Map to Wolf Creek Ski Area" src="https://maps.google.com/maps?q=Wolf%20Creek%20Ski%20Area%2C%20Colorado&z=10&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <p>On US-160 at the top of Wolf Creek Pass, between Pagosa Springs and South Fork.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <img src={LOGO} alt={`${COMPANY} logo`} className="footer-logo" />
        <div className="footer-links">
          <a href="#report">Snow Report</a><a href="#mountain">The Mountain</a><a href="#plan">Plan a Trip</a><a href="#cams">Webcams</a>
          <a href="https://www.facebook.com/wolfcreekski/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/wolfcreekski/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY}. Independent concept · not for official use. Current site: <a href={ORIGINAL}>wolfcreekski.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Report />
        <MountainStats />
        <Gallery />
        <Plan />
        <Lodge />
        <Cams />
        <Stewardship />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
