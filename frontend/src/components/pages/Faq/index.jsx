import withNavbar from "../../../shared/hoc/withNavBar";
import Faqs from "../../templates/Faq";

function Faq() {
    const faqs = [
        {
          category: "General Information",
          items: [
            {
              question: "What is Bidsphere?",
              answer:
              "A tender bidding application is an online platform where suppliers and vendors can find, submit bids for, and track tenders or procurement opportunities issued by buyers or contracting authorities."
            },
            {
              question: "Who can use the Bidsphere application?",
              answer:
                "The application can be used by organizations or individuals who want to get bidding done on their issued projects/tenders and suppliers, contractors, service providers, and buyers from various industries looking to win the tender contracts posted through competitive bidding.",
            },
            {
              question: "How does it work?",
              answer:
                "It's simple - just sign up and upload the necessary documents requested at the time of signup depending on the role registering for. We will review it and once approved you can start using the platform. Our intuitive interface makes it easy to get started.",
            },
            {
              question: "Is there a cost to using this application?",
              answer:
                "No, we don't charge any fee from our users. This application is free to use for both tender issuers and bidders.",
            },
          ],
        },
        {
          category: "Pricing",
          items: [
            {
              question: "How much does it cost?",
              answer:
                "We offer several pricing plans to fit your needs. You can check out our pricing page for more details.",
            },
            {
              question: "Are there any discounts available?",
              answer:
                "Yes, we offer discounts for annual subscriptions and for teams. You can learn more about our discounts on the pricing page.",
            },
            {
              question: "Do you offer refunds?",
              answer:
                "We stand behind our product, so we offer a 30-day money-back guarantee. If you're not satisfied, you can request a full refund.",
            },
          ],
        },
        {
          category: "Features",
          items: [
            {
              question: "What features are included?",
              answer:
                "Our platform includes a wide range of features, such as analytics, collaboration tools, and customization options. You can check out our features page for more details.",
            },
            {
              question: "Can I customize the platform?",
              answer: "Yes, our platform is highly customizable. You can tailor it to your specific needs and preferences.",
            },
            {
              question: "Do you offer integrations?",
              answer:
                "Absolutely! We offer integrations with a variety of popular tools and platforms. You can check out our integrations page to see what's available.",
            },
          ],
        },
        {
          category: "Support",
          items: [
            {
              question: "What kind of support do you offer?",
              answer:
                "We have a dedicated support team available to assist you with any questions or issues you may have. You can reach out to us via email, phone, or our support portal.",
            },
            {
              question: "Do you have a knowledge base?",
              answer:
                "Yes, we have a comprehensive knowledge base with articles, tutorials, and FAQs to help you get the most out of our platform.",
            },
            {
              question: "How quickly can I expect a response?",
              answer:
                "We strive to respond to all support inquiries within 1 business day. However, during peak times, it may take a bit longer.",
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

export default withNavbar(Faq);