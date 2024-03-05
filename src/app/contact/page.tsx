"use client";
import React from "react";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { cn } from "@/utils/cn";
import { Textarea } from "@/components/TextArea";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconLocation,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 pt-32">
        Thanks for choosing <br/>
		Manhas AC Services
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
			<LabelInputContainer>
				<Label htmlFor="firstname">First name</Label>
				<Input id="firstname" placeholder="....." type="text" />
			</LabelInputContainer>
			<LabelInputContainer>
				<Label htmlFor="lastname">Last name</Label>
				<Input id="lastname" placeholder="......." type="text" />
			</LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder=".....@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mobile">Mobile</Label>
          <Input id="mobile" placeholder="enter your mobile no." type="tel" />
        </LabelInputContainer>
		<LabelInputContainer className="mb-4">
            <Label htmlFor="lastname">Message</Label>
			<Textarea/>
            {/* <Input id="lastname" placeholder="Enter your message or feedback" type="text" /> */}
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit message &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
	  <div className="flex flex-col ">
		<div className="flex flex-row bg-zinc-800 p-3 rounded-md pl-6 mb-4">
			<IconPhone className="mr-4"/>
			<Link href="tel:+919797943188">+91 97979 43188</Link>
			<BottomGradient />
		</div>
		<div className="flex flex-row bg-zinc-800 p-3 rounded-md pl-6 mb-4">
			<IconMail className="mr-4"/>
			<Link href="mailto:jasvir@gmail.com">jasvir@gmail.com</Link>
			<BottomGradient />
		</div>
		<div className="flex flex-row bg-zinc-800 p-3 rounded-md pl-6 items-center">
			<IconLocation className="mr-4"/>
			<Link href="https://www.google.com/maps/dir//manhas+ac+service+jammu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x391e9b1020071d33:0xa3153b635814d2ad?sa=X&ved=2ahUKEwj6ppeI19yEAxVQwzgGHQ_hBhoQ9Rd6BAhJEAA"> House no 313, Sect 4, Sanjay Nagar,<br/>Jammu, Jammu and Kashmir 180010</Link>
			<BottomGradient />
		</div>
	  </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
