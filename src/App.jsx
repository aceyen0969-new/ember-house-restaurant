import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Flame, Instagram, Menu, Plus, X } from 'lucide-react';

const dishes = [
  {
    number: '01',
    name: 'Coal-kissed carrots',
    description: 'Whipped feta · smoked honey · toasted pistachio',
    price: '₱390',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',
    tag: 'A HOUSE FAVORITE'
  },
  {
    number: '02',
    name: 'Ribeye over embers',
    description: 'Dry-aged beef · charred shallot · pepper jus',
    price: '₱1,650',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85',
    tag: 'FROM THE FIRE'
  },
  {
    number: '03',
    name: 'Burnt Basque cheesecake',
    description: 'Vanilla bean · seasonal fruit · sea salt',
    price: '₱360',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    tag: 'SAVE ROOM'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ date: '', time: '7:00 PM', guests: '2 guests', name: '', email: '' });

  const closeMenu = () => setMenuOpen(false);
  const openReservation = () => {
    setSubmitted(false);
    setReservationOpen(true);
    closeMenu();
  };

  const submitReservation = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement"><span className="announcement-dot" /> OPEN TONIGHT · WALK INS WELCOME <span className="announcement-divider">/</span> MAKATI CITY</div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Ember House home" onClick={closeMenu}>
          <span className="brand-mark"><Flame size={25} strokeWidth={1.7} /></span>
          <span className="brand-words">EMBER <span>HOUSE</span></span>
        </a>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#menu" onClick={closeMenu}>The menu</a>
          <a href="#experience" onClick={closeMenu}>The experience</a>
          <button className="nav-reserve" onClick={openReservation}>Book a table <ArrowUpRight size={15} /></button>
        </nav>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Restaurant dining room glowing in warm evening light" />
          <div className="hero-vignette" />
          <div className="hero-topline"><span>FIRE-LED COOKING</span><span>EST. MMXXI</span></div>
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>A TABLE WITH A LITTLE MORE SOUL</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>GOOD FOOD.<br /><em>WILD</em> FIRE.</motion.h1>
            <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.7 }}>
              <p>Seasonal plates, honest ingredients, and the kind of evenings that stay with you.</p>
              <a className="round-link" href="#story" aria-label="Discover Ember House"><ArrowDownRight size={23} /></a>
            </motion.div>
          </div>
          <div className="hero-side-note"><span className="side-line" /> MORE THAN A MEAL</div>
          <div className="hero-index"><span>01</span><span className="index-line" /><span>04</span></div>
        </section>

        <section className="intro section-pad" id="story">
          <motion.div className="intro-label" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <span className="section-number">01 / THE HOUSE</span>
            <span className="tiny-flame"><Flame size={19} /></span>
          </motion.div>
          <motion.div className="intro-content" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <h2>There’s a reason<br />we gather <em>around</em><br />the fire.</h2>
            <div className="intro-aside">
              <p className="large-copy">At Ember House, the best things take time. A fire built slowly. Ingredients grown close. One more story after the plates are cleared.</p>
              <a className="text-link" href="#experience">GET TO KNOW US <ArrowUpRight size={15} /></a>
            </div>
          </motion.div>
          <div className="intro-stamp"><span>GATHER</span><Flame size={26} /><span>STAY AWHILE</span></div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="section-heading">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="section-number">02 / FROM OUR KITCHEN</span>
              <h2>A few good<br /><em>things.</em></h2>
            </motion.div>
            <motion.div className="menu-heading-aside" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p>Built around the season. Finished over flame. Best enjoyed with people you like.</p>
              <a className="text-link" href="#contact">VIEW THE FULL MENU <ArrowUpRight size={15} /></a>
            </motion.div>
          </div>
          <div className="dish-grid">
            {dishes.map((dish, index) => (
              <motion.article className={`dish-card dish-card-${index + 1}`} key={dish.number} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.12 }}>
                <div className="dish-image-wrap">
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                  <span className="dish-tag">{dish.tag}</span>
                  <span className="dish-number">{dish.number}</span>
                </div>
                <div className="dish-details">
                  <div><h3>{dish.name}</h3><p>{dish.description}</p></div>
                  <span className="dish-price">{dish.price}</span>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="menu-footnote">A TASTE OF WHAT’S ON · MENU CHANGES WITH THE SEASON</p>
        </section>

        <section className="fire-feature" id="experience">
          <div className="feature-image" />
          <div className="feature-shade" />
          <div className="feature-content">
            <motion.span className="section-number" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>03 / THE EXPERIENCE</motion.span>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>A little smoke.<br />A little <em>magic.</em></motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>The crackle of the grill. Glasses catching the candlelight. A kitchen that wears its heart on its sleeve. Come as you are, leave a little happier.</motion.p>
            <motion.button className="light-button" onClick={openReservation} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>MAKE AN EVENING OF IT <ArrowRight size={17} /></motion.button>
          </div>
          <div className="feature-caption"><span>01</span><span>FIRE IS OUR FAVORITE INGREDIENT</span></div>
        </section>

        <section className="quote-section section-pad">
          <span className="quote-mark">“</span>
          <motion.blockquote variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            The sort of place where dinner becomes the whole evening, and nobody minds one bit.
          </motion.blockquote>
          <div className="quote-credit"><span className="quote-line" /> A NOTE FROM OUR GUESTBOOK</div>
        </section>

        <section className="visit-section section-pad" id="contact">
          <div className="visit-left">
            <span className="section-number">04 / COME ON IN</span>
            <h2>Your seat<br />is <em>waiting.</em></h2>
            <p>Bring your appetite. Bring your favorite people. We’ll take care of the rest.</p>
            <button className="reserve-button" onClick={openReservation}>RESERVE YOUR TABLE <ArrowUpRight size={17} /></button>
          </div>
          <div className="visit-right">
            <div className="visit-detail"><span className="detail-label">FIND US</span><p>28 Salcedo Street<br />Legazpi Village, Makati</p><a href="https://maps.google.com/?q=Legazpi+Village+Makati" target="_blank" rel="noreferrer" className="text-link">GET DIRECTIONS <ArrowUpRight size={14} /></a></div>
            <div className="visit-detail"><span className="detail-label">WHEN TO DROP BY</span><p>Tue – Thu <span>5 pm – 10 pm</span><br />Fri – Sun <span>5 pm – 11 pm</span><br />Monday <span>Taking a breather</span></p></div>
            <div className="visit-detail"><span className="detail-label">SAY HELLO</span><p>+63 917 555 0188<br />hello@emberhouse.example</p></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#home" className="brand footer-brand"><span className="brand-mark"><Flame size={23} /></span><span className="brand-words">EMBER <span>HOUSE</span></span></a>
        <p>GOOD FOOD. GOOD FIRE. GOOD COMPANY.</p>
        <div className="footer-right"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><span>© 2026 EMBER HOUSE</span><a href="#home" className="back-top">BACK TO TOP ↑</a></div>
      </footer>

      {reservationOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setReservationOpen(false); }}>
          <motion.div className="reservation-modal" role="dialog" aria-modal="true" aria-labelledby="reservation-title" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
            <button className="modal-close" aria-label="Close reservation form" onClick={() => setReservationOpen(false)}><X size={21} /></button>
            {!submitted ? <>
              <span className="section-number">YOUR EVENING STARTS HERE</span>
              <h2 id="reservation-title">Save us<br /><em>a seat.</em></h2>
              <p className="modal-intro">Send a reservation request. This demo form confirms locally and does not contact a real restaurant.</p>
              <form onSubmit={submitReservation} className="reservation-form">
                <label>Your name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Name for the table" /></label>
                <label>Email address<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label>
                <div className="form-row"><label>Date<input required type="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} /></label><label>Time<select value={form.time} onChange={(event) => setForm({ ...form, time: event.target.value })}><option>5:00 PM</option><option>5:30 PM</option><option>6:00 PM</option><option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option><option>8:30 PM</option><option>9:00 PM</option></select></label></div>
                <label>Party size<select value={form.guests} onChange={(event) => setForm({ ...form, guests: event.target.value })}><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6 guests</option><option>7+ guests</option></select></label>
                <button className="reserve-button form-submit" type="submit">REQUEST A TABLE <ArrowRight size={16} /></button>
              </form>
            </> : <div className="success-state"><span className="success-icon"><Flame size={28} /></span><span className="section-number">REQUEST PREPARED</span><h2 id="reservation-title">Looking<br /><em>good.</em></h2><p>Your demo request for {form.guests} on {form.date} at {form.time} is ready. No real booking was sent.</p><button className="reserve-button" onClick={() => setReservationOpen(false)}>BACK TO THE HOUSE <ArrowRight size={16} /></button></div>}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;
