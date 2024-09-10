"use server";

import { actionClient } from "@/lib/safe-action";
import { validateContactForm } from "@/validations";

const serverUrl = process.env.DISCORD_SERVER_URL as string;

export const sendMessage = actionClient
  .schema(validateContactForm)
  .action(async ({ parsedInput: { email, message, name } }) => {
    const values = {
      email,
      message,
      name,
    };

    console.log(serverUrl);

    const description = Object.entries(values)
      .map((value) => `${value[0]}: ${value[1]}`)
      .join("\n");

    const response = await fetch(serverUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "Message Received",
        tts: false,
        color: "white",
        embeds: [
          {
            title: "Contact Form",
            description,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not send the message");
    }

    return { success: "Thanks for the message will get back to you." };
  });
