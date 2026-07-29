import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV, SITE } from '../data/site';
import { Button } from './ui';

export default function Layout() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const drawerRef = useRef(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.querySelector('button, a')?.focus();
    const focusables = [...drawerRef.current.querySelectorAll('a,button')];
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <div className="wrap header-inner">
          <Link className="brand" to="/" aria-label="The Gorilla Press home">
            <span className="brand-mark">GP</span>
            <span><strong>The Gorilla Press</strong><small>Short-run label production</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
            <Button to="/quote">Request a quote</Button>
          </nav>
          <button ref={triggerRef} className="menu-button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}><span aria-hidden="true">☰</span></button>
        </div>
        <div className="channel-bar" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      </header>

      {open && (
        <div className="drawer" id="mobile-menu" role="dialog" aria-modal="true" ref={drawerRef}>
          <button className="drawer-close" onClick={() => setOpen(false)}><span aria-hidden="true">×</span> Close</button>
          <nav aria-label="Mobile navigation">
            {NAV.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <Button to="/quote">Request a quote</Button>
        </div>
      )}

      <main id="main"><Outlet /></main>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div><div className="brand compact"><span className="brand-mark">GP</span><span><strong>The Gorilla Press</strong></span></div><p>Short-run labels and packaging production for Oregon brands.</p></div>
          <div><h4>Services</h4><Link to="/labels">Labels</Link><Link to="/cannabis">Cannabis</Link><Link to="/materials">Materials</Link><Link to="/file-prep">File prep</Link></div>
          <div><h4>Company</h4><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/quote">Request a quote</Link></div>
          <div><h4>Legal</h4><Link to="/privacy">Privacy</Link><Link to="/production-terms">Production terms</Link></div>
          <div><h4>Direct</h4><a href={`mailto:${SITE.email}`}>{SITE.email}</a><span>{SITE.region}</span><span>{SITE.visits}</span></div>
        </div>
        <div className="wrap footer-base"><span>© {new Date().getFullYear()} The Gorilla Press</span><span>Built to hit the shelf.</span></div>
      </footer>
    </div>
  );
}
