import { Link } from 'react-router-dom';
import { JOBS } from '../data/site';
import Process from '../components/Process';
import { Button, CTA, Pill, Section, SpecCard } from '../components/ui';

export default function Home(){
  return <>
    <section className="hero home-hero"><div className="wrap hero-grid">
      <div><p className="eyebrow">Oregon · Short-run label production</p><h1>Built to hit the shelf.</h1><p className="lead">Short-run labels and packaging for Oregon brands that need smaller quantities, frequent version changes, and production help from a real person.</p><p className="hero-sub">Clear and white films, white ink, selective gloss, contour cutting, and versioned production for jars, tubes, packages, and retail launches.</p><div className="button-row"><Button to="/quote">Request a quote</Button><Button to="/labels" secondary>See label options</Button></div></div>
      <div className="hero-panel"><p className="eyebrow">Production focus</p><strong>Labels first.</strong><p>Built for product businesses with more SKUs, smaller batches, and less room for production mistakes.</p><div className="mini-specs"><span>White ink</span><span>Gloss</span><span>Contour cut</span><span>Versioned jobs</span></div></div>
    </div></section>
    <div className="trust-strip"><div className="wrap">{['Oregon-based','Short runs welcome','Multiple versions per job','Artwork help available'].map(x=><Pill key={x}>{x}</Pill>)}</div></div>
    <Section eyebrow="Core production" title="Labels built for changing products." lead="The primary offer is short-run label production for brands that cannot afford to over-order or wait through long conventional print cycles.">
      <div className="featured-grid"><SpecCard meta="Primary service" title="Labels and stickers"><p>Jar labels, pre-roll and tube labels, product stickers, clear and white materials, white ink, gloss, and custom contour cutting.</p><Link className="text-link" to="/labels">Explore labels →</Link></SpecCard><SpecCard meta="Industry focus" title="Cannabis packaging"><p>Production workflows designed around batch changes, potency updates, strain versions, and hard packaging dates.</p><Link className="text-link" to="/cannabis">Cannabis production →</Link></SpecCard><SpecCard meta="Production support" title="Artwork that runs"><p>File rescue, version templates, cut paths, white layers, and production-ready artwork without forcing a full redesign.</p><Link className="text-link" to="/file-prep">Prepare a file →</Link></SpecCard></div>
    </Section>
    <Section eyebrow="The operating problem" title="Your product changes faster than your label inventory."><div className="three-grid">{[['Order what you need','Smaller production quantities reduce obsolete inventory when batches, strains, or package details change.'],['Run versions together','Related SKUs can be organized as one production family instead of a pile of disconnected one-off jobs.'],['Reorder from approved files','Approved production files can be preserved so future runs start from a known version.']].map(([t,d])=><SpecCard key={t} title={t}><p>{d}</p></SpecCard>)}</div></Section>
    <Section eyebrow="Typical jobs" title="A practical fit for launch quantities and version-heavy work."><div className="job-grid">{JOBS.map(([q,p,v,m])=><article key={p}><strong>{q}</strong><h3>{p}</h3><p>{v}</p><small>{m}</small></article>)}</div></Section>
    <Section eyebrow="How a job runs" title="Seven controlled steps."><Process/></Section>
    <Section eyebrow="Materials and effects" title="Choose the material by what it has to survive."><div className="two-grid"><div><h3>Clear film + white underbase</h3><p>For glass and transparent packaging where color must remain solid instead of disappearing into the container.</p></div><div><h3>Matte film + selective gloss</h3><p>For restrained artwork that needs a tactile, reflective detail without turning the entire label glossy.</p></div><div><h3>White film</h3><p>A versatile default for product labels, stickers, and decals when transparency is not the goal.</p></div><div><h3>Custom contour cutting</h3><p>For labels and stickers that need a custom shape rather than a standard rectangle.</p></div></div><div className="button-row"><Button to="/materials" secondary>Compare materials</Button></div></Section>
    <CTA/>
  </>
}
