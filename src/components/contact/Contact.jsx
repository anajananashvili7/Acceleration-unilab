import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, source });
    setName('');
    setEmail('');
    setPhone('');
    setSource('');
  };

  return (
    <div className="mt-[100px] flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto p-6">
      {/* Left Section: Text */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#003459] text-[54px] leading-[65px]">Get in Touch</h2>
        <p className="mb-6 text-[#000000] text-[14px] leading-[24px] font-semibold">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <div className="flex items-center">
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>How did you find us?</option>
            <option value="search">Search Engine</option>
            <option value="social">Social Media</option>
            <option value="friend">Friend</option>
            <option value="other">Other</option>
          </select>
          <button type="submit" className="bg-[#003459] text-semibold text-white py-2 w-full px-4 rounded">
            SEND
          </button>
          <div className="flex gap-[50px]">
            <div className="flex items-center gap-4">
              <div>
                <img src="/phone.png" alt="Phone" />
              </div>
              <div className="flex flex-col text-[13px]">
                <div className="font-bold">PHONE</div>
                <div>03 5432 1234</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src="/fax.png" alt="Fax" />
              </div>
              <div className="flex flex-col text-[13px]">
                <div className="font-bold">FAX</div>
                <div>03 5432 1234</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src="/mail.png" alt="Email" />
              </div>
              <div className="flex flex-col text-[13px]">
                <div className="font-bold">EMAIL</div>
                <div>info@marcc.com.au</div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Right Section: Map */}
      <div className="w-full md:w-1/2 p-4">
        <div className="h-[500px] border border-gray-300 rounded overflow-hidden"> {/* Set a fixed height here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2970.0059107507686!2d-87.79765492391466!3d41.89272997124011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDUzJzMzLjgiTiA4N8KwNDcnNDIuMyJX!5e0!3m2!1ska!2sge!4v1729378383809!5m2!1ska!2sge"
            width="100%"
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
