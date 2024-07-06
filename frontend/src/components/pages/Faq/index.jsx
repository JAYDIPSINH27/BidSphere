import React from 'react';
import Faqs from '../../templates/Faq';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

function Faq() {
  const faqs = [
    {
      category: 'General Information',
      items: [
        {
          question: 'What is Bidsphere?',
          answer:
              `A tender bidding application is an online platform where suppliers and vendors can find, submit bids for, and track tenders or 
              procurement opportunities issued by buyers or contracting authorities.`,
        },
        {
          question: 'Who can use the Bidsphere application?',
          answer:
                `The application can be used by organizations or individuals who want to get bidding done on their issued projects/tenders and 
                suppliers, contractors, service providers, and buyers from various industries looking to win the tender contracts posted through competitive bidding.`,
        },
        {
          question: 'How does it work?',
          answer:
                `It's simple - just sign up and upload the necessary documents requested at the time of signup depending on the role registering for. 
                We will review them and once approved you can start using the platform. Our intuitive interface makes it easy to get started.`,
        },
        {
          question: 'Is there a cost to using this application?',
          answer:
                "No, we don't charge any fee from our users. This application is free to use for both tender issuers and bidders.",
        },
      ],
    },
    {
      category: 'Features',
      items: [
        {
          question: 'How do I search for tenders?',
          answer:
                `For both the tender issuers and bidders we have provided the tender search feature. The tender issuers can see all the tenders posted by them 
                and filter based on keywords, date and status. The bidders can see all the tenders and `,
        },
        {
          question: 'What if I need to get some info on the tender before placing a bid?',
          answer: `We have a Q&A Page/Hep desk page where the bidders can create a ticket asking their question about a bid, any other user can respond to 
          the ticket. The issuers are also notified about the ticket and their reply will be highlighted differently for the user`,
        },
        {
          question: 'Can I edit or delete a tender after posting it?',
          answer:
                'Yes, you can edit, update, or delete a tender from the tender management section on your issuer dashboard.',
        },
        {
          question: 'How do I receive notifications about new tenders?',
          answer: 'Ensure you have email notifications enabled in your account settings. You will receive alerts when new tenders are posted.',
        },
      ],
    },
    {
      category: 'Support and Troubleshooting',
      items: [
        {
          question: 'How can I contact customer support?',
          answer:
                `You can reach out to us via email or phone mentioned in the contact us section. We have a dedicated support team 
                available to assist you with any questions or issues you may have. Please note that our working hours are 
                Mon - Fri 8 a.m. to 5 p.m. and Sat - Sun 8 a.m. to 12 p.m.`,
        },
        {
          question: 'What should I do if I encounter technical issues?',
          answer:
                `If you experience any technical issues, please contact our support team through 'Contact Us' section. Provide detailed 
                information about the problem for quicker resolution.`,
        },
        {
          question: 'How quickly can I expect a response?',
          answer:
                'We strive to respond to all support inquiries within 1 business day. However, during peak times, it may take a bit longer.',
        },
        {
          question: 'Can I see details of other bidders?',
          answer: 'After placing your bid, you can view limited details such as names and bid amounts of other bidders while sensitive information remains protected.',
        },
      ],
    },
  ];

  return (
    <div>
      <Faqs faqs={faqs}></Faqs>
    </div>
  );
}

export default withAppBarFooter(Faq);
