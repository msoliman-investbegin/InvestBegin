import React, { useState, useEffect } from 'react';
import logo from '../static/logo.png';
import { getCookie, setCookie } from '../utils/cookie';

const ConsentBanner = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consentCookie = getCookie('consent');
    if (consentCookie === 'true') {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentGiven(true);
    setCookie('consent', 'true', 365); // Set consent cookie for 1 year
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    });
  };

  const handleDecline = () => {
    setCookie('consent', 'false', 365); // Set consent cookie for 1 year
  };

  return (
    <div
      className={`bg-pink-100  fixed bottom-0 left-0 w-full bg-white p-5 shadow-md z-50 font-sans text-center ${
        consentGiven ? 'hidden' : ''
      } max-sm:top-0 max-sm:bottom-0 max-sm:h-full max-sm:overflow-auto max-sm:pt-10 max-sm:pb-5`}
    >
      <img src={logo} alt='Logo' className='max-w-[50px] mb-3 mx-auto' />
      <h2 className='text-xl mb-2 font-bold'>www.investbegin.de asks for your consent to use your personal data to:</h2>
      <ul className='list-none p-0 mb-3'>
        <li className='flex items-center mb-2'>
          <div
            className='w-6 h-6 mr-2 bg-no-repeat bg-contain'
            style={{ backgroundImage: `url('user-icon.png')` }}
          ></div>
          <p>Personalised ads and content, ad and content measurement, audience insights and product development</p>
        </li>
        <li className='flex items-center mb-2'>
          <div
            className='w-6 h-6 mr-2 bg-no-repeat bg-contain'
            style={{ backgroundImage: `url('storage-icon.png')` }}
          ></div>
          <p>Store and/or access information on a device</p>
        </li>
        <li className='flex items-center mb-2'>
          <div
            className='w-6 h-6 mr-2 bg-no-repeat bg-contain'
            style={{ backgroundImage: `url('learn-more-icon.png')` }}
          ></div>
          <p>Learn more</p>
        </li>
      </ul>
      <p className='text-sm mb-3 text-gray-700'>
        Your personal data will be processed and information from your device (cookies, unique identifiers, and other
        device data) may be stored by, accessed by and shared with third party vendors or used specifically by this site
        or app.
      </p>
      <button onClick={handleAccept} className='bg-blue-500 text-white py-3 px-5 rounded-full mr-2 mb-2'>
        Accept
      </button>
      <button onClick={handleDecline} className='bg-green-700 text-white py-3 px-5 rounded-full mr-2 mb-2'>
        Reject
      </button>
    </div>
  );
};

export default ConsentBanner;
