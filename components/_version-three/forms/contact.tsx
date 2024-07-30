"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { contactForm, validateContactForm } from "@/validations";
import { ArrowUpRight } from "lucide-react";

const ContactForm = () => {
  const form = useForm<contactForm>({
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

  async function onSubmit(values: contactForm) {
    form.reset();
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
                      className=""
                      placeholder="Enter your name"
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
                      className=""
                      placeholder="Enter your email"
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
                      className=""
                      placeholder="Enter your message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <button className="px-10 py-2 relative group lg:w-1/2 outline-none flex gap-3 items-center justify-center">
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
