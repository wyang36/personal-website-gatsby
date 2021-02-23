import React, { useState, useRef } from 'react';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from 'gatsby';

const styles = {
  form: {
    paddingTop: '100px',
    margin: 'auto',
    maxWidth: '600px',
    width: 'calc(100% - 40px)',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '25px',
    fontSize: 'bold',
  },
  input: {
    marginTop: '10px',
    outline: 'none',
    padding: '6px 10px',
    backgroundColor: 'transparent',
    border: '1px solid',
  },
  icons: {
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    paddingLeft: '5px',
    paddingRight: '5px',
    cursor: 'pointer',
  },
  buttons: {
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontSize: '12pt',
  },
};

const ContactForm = ({ theme, resume }) => {
  const [formState, setFormState] = useState({});
  const formRef = useRef();

  const handleUpdate = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then((response) => {
        console.log('====================================');
        console.log(`${JSON.stringify(response, null, 2)}`);
        console.log('====================================');
        navigate(form.getAttribute('action'));
      })
      .catch((error) => {
        console.log('====================================');
        console.log(`error in submiting the form data:${error}`);
        console.log('====================================');
      });
  };
  return (
    <div style={{ ...styles.form, color: theme.colorContent2 }}>
      <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
      <div style={styles.icons}>
        <a
          href={resume.file.url}
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          style={styles.link}
        >
          <FontAwesomeIcon icon={faFilePdf} size="lg" />
        </a>
        <a
          href="https://github.com/wyang36"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          style={styles.link}
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/kira-yang-41298220"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          style={styles.link}
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://www.instagram.com/kirawyang/"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          style={styles.link}
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
      <form
        method="post"
        ref={formRef}
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        action="/success"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label style={{ ...styles.field, color: theme.colorContent2 }}>
          Name
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleUpdate}
            style={{
              ...styles.input,
              color: theme.colorContent0,
              borderColor: theme.colorContent2,
            }}
          />
        </label>
        <label style={{ ...styles.field, color: theme.colorContent2 }}>
          Email
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleUpdate}
            style={{
              ...styles.input,
              color: theme.colorContent0,
              borderColor: theme.colorContent2,
            }}
          />
        </label>
        <label style={{ ...styles.field, color: theme.colorContent2 }}>
          Message
          <textarea
            name="message"
            id="message"
            rows="5"
            onChange={handleUpdate}
            style={{
              ...styles.input,
              color: theme.colorContent0,
              borderColor: theme.colorContent2,
            }}
          />
        </label>
        <div style={styles.buttons}>
          <button type="submit" style={{ ...styles.button, color: theme.colorCompleted }}>
            Send
          </button>
          <input
            type="reset"
            value="Clear"
            style={{ ...styles.button, color: theme.colorInProgress }}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
