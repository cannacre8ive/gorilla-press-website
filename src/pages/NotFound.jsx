import { Button } from '../components/ui';
export default function NotFound(){return <section className="hero"><div className="wrap hero-copy"><p className="eyebrow">404</p><h1>That page did not make it past QC.</h1><div className="button-row"><Button to="/labels" secondary>View labels</Button><Button to="/quote">Request a quote</Button></div></div></section>}
