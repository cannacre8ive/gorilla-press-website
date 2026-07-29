import { PROCESS } from '../data/site';
export default function Process() {
  return <div className="process-grid">{PROCESS.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>;
}
