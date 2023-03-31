import React from 'react';

const GoogleMap = () => {
    return (

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.7346642280245!2d-83.6167796!3d42.624583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88235f3ee5404841%3A0x1c4b1e898ff17ea5!2s1600%20S%20Milford%20Rd%2C%20Highland%20Charter%20Twp%2C%20MI%2048357!5e0!3m2!1sen!2sus!4v1680202644859!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

    );
};

export default GoogleMap;
