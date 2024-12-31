"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import HoverEffect from "@/components/hover-effect";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormType, validateContactForm } from "@/validations";
import { sendMessage } from "@/action/contact";

const ContactForm = () => {
  const form = useForm<ContactFormType>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(validateContactForm),
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: ContactFormType) {
    const res = await sendMessage(values);

    if (res?.data) {
      form.reset();
      toast.success(res.data.success);
      return;
    }

    toast.error("An error occurred while sending the message.");
  }

  return (
    <div className="my-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:bg-neutral-950 bg-white"
                      placeholder="Enter your name"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:bg-neutral-950 bg-white"
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="dark:bg-neutral-950 bg-white"
                      placeholder="Enter your message"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <button
            disabled={isSubmitting}
            className="py-2 relative group border-2 border-neutral-700  hover:border-transparent text-neutral-30 transition-colors duration-100 hover:dark:bg-neutral-950 hover:bg-white hover:text-neutral-950 delay-300 slowmo hover:dark:text-neutral-100 lg:w-1/2 w-full flex items-center justify-center gap-5"
          >
            <HoverEffect>
              Let&apos;s go <ArrowUpRight className="w-4 h-4" />{" "}
            </HoverEffect>
          </button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
