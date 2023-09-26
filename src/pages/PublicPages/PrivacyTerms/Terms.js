import React from 'react';
import PublicTopHeaderComponent from '../PublicTopHeaderComponent';
import IQFooterComponent from '../HomePageComponent/IQFooterComponent';

const Terms = () => {
    return (
        <>
         <PublicTopHeaderComponent/>
         <div class="container mt-3">
        <header>
          <h1>Terms and Conditions</h1>
        </header>
    
        <section className='mt-3'>
          <h2>Introduction</h2>
          <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.</p>
        </section>
    
        <section className='mt-3'>
          <h2>Use of Cookies</h2>
          <p>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.</p>
        </section>
    
        <section className='mt-3 mb-3'>
          <h2>Intellectual Property</h2>
          <p>The content of this website is for your general information and use only. It is subject to change without notice. This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
        </section>
    
       
    
      
      </div>
         <IQFooterComponent/>
        </>
   
    );
};

export default Terms;