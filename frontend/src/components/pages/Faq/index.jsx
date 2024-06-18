import withNavbar from "../../../shared/hoc/withNavBar";
import Faqs from "../../templates/Faq";

function Faq() {
    const faqs = [
        {
          category: "General",
          items: [
            {
              question: "What is this service?",
              answer:
                "This is a comprehensive service that provides a wide range of features and tools to help you achieve your goals.",
            },
            {
              question: "How does it work?",
              answer:
                "It's simple - just sign up and start using the platform. Our intuitive interface makes it easy to get started.",
            },
            {
              question: "Is there a free trial?",
              answer:
                "Yes, we offer a 14-day free trial so you can explore the platform and see if it's the right fit for you.",
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