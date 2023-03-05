import "./Contact.scss";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-bgImg-container">
        <main className="contact">
          <h2>Contact Me ...</h2>
          <div className="contact__list">
            <div className="contact__item">
              <i className="fas fa-envelope"></i> Email
              <div className="text-secondary">jsmith@email.com</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-mobile-alt"></i> Phone
              <div className="text-secondary">+1 (571) 360-1234</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-map-marker-alt"></i> Address
              <div className="text-secondary">58 First St. Mc Lean, VA</div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
