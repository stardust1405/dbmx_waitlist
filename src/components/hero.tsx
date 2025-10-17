"use client";

import { useMemo, useState } from "react";

import Countdown from "./countdown";
import People from "./people";
import { Logo } from "./svgs";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
  const year = useMemo(() => new Date().getFullYear() + 1, []);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center mb-2">
        <Logo className="" />
        <div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
          </span>
          <p className="uppercase text-sm font-medium">
            available in early {year}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-foreground text-center">AI Native Database Management Tool</h2>
        <h2 className="text-3xl text-foreground">
          {isSuccess ? "You're on the waitlist" : "Get early Access"}
        </h2>
        <p className="text-base text-muted-foreground text-center max-w-md">
          {isSuccess
            ? "You've successfully secured your spot.We’ll hit you up the moment it’s your turn to dive in"
            : "Be among the first to experience the future of Database Management. Join the waitlist to get notified when we launch."}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
        <Form onSuccessChange={setIsSuccess} />
      </div>
      <div className="flex items-center justify-center gap-2">
        <People count={waitlistPeople} />
      </div>
      <Countdown period={new Date("2026-01-01")} />
    </div>
  );
}
