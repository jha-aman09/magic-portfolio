"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type CallbackProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: CallbackProps }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setSuccess("");

    if (touched && !validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/callback-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccess("Thank you! We'll get back to you soon.");
      setEmail("");
      setTouched(false);
    } catch (err) {
      setError("Failed to schedule a meeting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: mailchimp.effects.mask.cursor,
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
          opacity: mailchimp.effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          color: mailchimp.effects.dots.color,
          size: mailchimp.effects.dots.size as any,
          opacity: mailchimp.effects.dots.opacity as any,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width as any,
          height: mailchimp.effects.grid.height as any,
          opacity: mailchimp.effects.grid.opacity as any,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as any,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Flex fillWidth maxWidth={24} gap="8">
          <Input
            id="callback-email"
            formNoValidate
            labelAsPlaceholder
            type="email"
            label="Email"
            value={email}
            required
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={error}
          />
          <Flex height="48" vertical="center">
            <Button type="submit" size="m" fillWidth disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Schedule Meeting"}
            </Button>
          </Flex>
        </Flex>
      </form>
      {success && (
        <Text color="success" marginTop="m">
          {success}
        </Text>
      )}
    </Column>
  );
};
