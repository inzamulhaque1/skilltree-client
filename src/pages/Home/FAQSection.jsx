/* eslint-disable react/no-unescaped-entities */
import * as Accordion from "@radix-ui/react-accordion";
import { GoChevronDown } from "react-icons/go"; // Using GoChevronDown for the accordion icon

const FAQSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion.Root type="single" collapsible>
          {/* Question 1 */}
          <Accordion.Item value="item-1" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                How do I book a tutor?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              Booking a tutor is simple! Browse the available tutors, select the one that matches your needs, and click "Book Now." Follow the instructions to confirm your booking.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 2 */}
          <Accordion.Item value="item-2" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                Are there free tutorials available?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              Yes, we offer a variety of free tutorials to help you get started. Check the "Free Tutorials" section in the main menu for more details.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 3 */}
          <Accordion.Item value="item-3" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                Can I cancel or reschedule a session?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              Absolutely! You can cancel or reschedule a session at least 24 hours in advance. Check the "My Bookings" section in your dashboard for options.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 4 */}
          <Accordion.Item value="item-4" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                How do I contact support?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              You can contact support through the "Contact Us" section on our website or via email at support@platform.com.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 5 */}
          <Accordion.Item value="item-5" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                Are there any membership benefits?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              Yes! Members get exclusive discounts on tutoring sessions and early access to new tutorials and features.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 6 */}
          <Accordion.Item value="item-6" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                What payment methods do you accept?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              We accept payments via credit card, PayPal, and other secure methods. You can find more information on the payment page.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 7 */}
          <Accordion.Item value="item-7" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                How do I track my progress?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              You can track your progress on your dashboard, where you’ll see a summary of your completed tutorials and upcoming sessions.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 8 */}
          <Accordion.Item value="item-8" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                Can I get a refund if I'm not satisfied?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              Yes, we offer a 30-day money-back guarantee for all our paid services. Please refer to our refund policy for more details.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 9 */}
          <Accordion.Item value="item-9" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                How do I upgrade my account?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              You can upgrade your account through the "Account Settings" section, where you can choose the plan that best suits your needs.
            </Accordion.Content>
          </Accordion.Item>
          {/* Question 10 */}
          <Accordion.Item value="item-10" className="mb-4 border-b pb-2">
            <Accordion.Header>
              <Accordion.Trigger className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center w-full">
                Do you offer group sessions?
                <GoChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-gray-600 dark:text-gray-300">
              Yes, we offer group tutoring sessions at discounted rates. You can check the "Group Sessions" section for more details.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default FAQSection;
