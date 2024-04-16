import React, { useState , useRef} from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  // const [name, setname] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post(' http://localhost:8000/userAuth/api/add_contact/', {
  //       name: name,
  //       email: email,
  //       message: message,
  //     });

  //     console.log('Response:', response.data);
  //     // Réinitialiser les champs du formulaire après l'envoi réussi
  //     setname('');
  //     setEmail('');
  //     setMessage('');
  //   } catch (error) {
  //     console.error('Error:', error.response.data);
  //     // Gérer les erreurs ici
  //   }
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3ntwsgx', 'template_rl3w1hv', form.current, {
        publicKey: '9C2mAjleZaNhc07Pp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          toast.success('Message sent ', {
            autoClose: 3000
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <><ToastContainer />
    <div className="pt-10 pb-8">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex-col gap-4 flex-align-center sm:flex-row">
          <div className="flex-1 w-full">
            <p>Full Name</p>
            <input
              type="text"
              className="w-full input"
              placeholder="First Name.."
              name="user_name" />
          </div>
        </div>
        <div className="mt-4">
          <p>Email Address</p>
          <input
            type="text"
            className="w-full input"
            placeholder="Email Address.."
            name="user_email" />
        </div>
        <div className="mt-4">
          <p>Message</p>
          <textarea
            name="message"
            rows={4}
            className="w-full input"
            placeholder="Message.."
          ></textarea>
        </div>
        <div className="mt-4 flex-center-center">
          <button type="submit" className="btn btn-primary" value="Send">
            Submit
          </button>
        </div>
      </form>
    </div></>
  );
};

export default Form;