import FooterStyles from './Footer.module.css';

const Footer = () => (
  <div className={FooterStyles.footer}>
    <div className={FooterStyles.top}>
      <div>
        <p>John David Peña</p>
        <p>Agent with eXp Realty</p>
        <p>Agent License Number: #733512</p>
      </div>

      <div>
        <p>Broker Office: (915) 242-2100</p>
        <p>Broker Address: 221 N. Kansas St., Suite 700</p>
        <p>Broker License Number: #501852</p>
      </div>
    </div>

    <div className={FooterStyles.middle}>
      <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597687797/eXp/eXpLOGO2_400x212.jpg' alt='EXP Realty logo' />
    </div>

    <div className={FooterStyles.bottom}>
      <a target='_blank' href='https://drive.google.com/file/d/1dnGCj8szdMqM0RDDAalvKZ-QIbI4QSYa/view?usp=sharing'>Consumer Protection Notice</a>
      <br />
      <a target='_blank' href='https://drive.google.com/file/d/1zSlxg8JSjHTp1BpzgFxXeEFhOEOch3XT/view?usp=sharing'>Information About Brokerage Services</a>
    </div>
  </div>
);

export default Footer;

{/* <div className={FooterStyles.middle}>
      <p>Each office is independently owned and operated. All information provided is deemed reliable, but is not guaranteed and should be independently verified. EXP Realty is an equal opportunity employer and supports the fair housing act.</p>

      <p>EXP Realty is an Equal Opportunity Employer and supports the Fair Housing Act. Each EXP Realty office is independently owned and operated. If you are currently working with an agent this is not a solicitation of your business.</p>
    </div> */}

{/* <a target='_blank' href="https://johnpena.kw.com/kw/termsofuse">Terms of Use <span>&#10990;</span>&nbsp;</a>
      <a target='_blank' href="https://johnpena.kw.com/kw/privacypolicy">Privacy Policy <span>&#10990;</span>&nbsp;</a>
      <a target='_blank' href="https://johnpena.kw.com/kw/cookie-policy">Cookie Policy <span>&#10990;</span>&nbsp;</a>
      <a target='_blank' href="https://johnpena.kw.com/kw/dmca">DMCA <span>&#10990;</span>&nbsp;</a>
      <a target='_blank' href="https://johnpena.kw.com/kw/fairhousing">Fair Housing <span>&#10990;</span>&nbsp;</a>
      <a target='_blank' href="https://johnpena.kw.com/kw/Web-Accessibility">Accessibility</a> */}