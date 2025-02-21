"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView.hook";
import { sendEmail } from "@/action/sendEmail";
import SubmitBtn from "./submit-btn";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const { toast } = useToast();

    const sendEmailAction = async (formData: FormData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
            toast({
                title: "Something went wrong.",
                description: "Your message was not sent. Please try again.",
            });
            return;
        }

        toast({
            title: "Success",
            description: "Email sent successfully!",
        });
    };

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="-mt-6 text-gray-700 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:example@gmail.com">
                    example@163.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={sendEmailAction}
            >
                <input
                    className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}
